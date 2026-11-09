
import { headers } from 'next/headers'
import { prisma } from '@/lib/db/prisma'
import {
  AUTH_RATE_LIMITS,
  createRateLimitKey,
  evaluateRateLimit,
  extractClientIp,
  normalizeRateLimitEmail,
} from './rate-limit-policy'

type AuthOperation = 'login' | 'register'

type RateLimitResult =
  | { allowed: true }
  | { allowed: false; error: string }

type RateLimitRow = {
  attempts: number
  windowEndsAt: Date
}

type LimitRule = {
  scope: string
  identity: string
  maxAttempts: number
  windowMs: number
}

async function consumeLimit(
  rule: LimitRule,
  secret: string,
): Promise<{
  allowed: boolean
  retryAfterSeconds: number
}> {
  const key = createRateLimitKey(
    rule.scope,
    rule.identity,
    secret,
  )

  // PostgreSQL actualiza el contador de forma atómica.
  // Una ventana vencida reinicia el contador a 1.
  const rows = await prisma.$queryRaw<RateLimitRow[]>`
    INSERT INTO "auth_rate_limits" (
      "key",
      "attempts",
      "window_ends_at",
      "updated_at"
    )
    VALUES (
      ${key},
      1,
      NOW() + (${rule.windowMs}::integer * INTERVAL '1 millisecond'),
      NOW()
    )
    ON CONFLICT ("key")
    DO UPDATE SET
      "attempts" = CASE
        WHEN "auth_rate_limits"."window_ends_at" <= NOW()
          THEN 1
        ELSE "auth_rate_limits"."attempts" + 1
      END,
      "window_ends_at" = CASE
        WHEN "auth_rate_limits"."window_ends_at" <= NOW()
          THEN EXCLUDED."window_ends_at"
        ELSE "auth_rate_limits"."window_ends_at"
      END,
      "updated_at" = NOW()
    RETURNING
      "attempts",
      "window_ends_at" AS "windowEndsAt"
  `

  const row = rows[0]

  if (!row) {
    throw new Error('No se pudo obtener el contador de intentos')
  }

  return evaluateRateLimit(
    row.attempts,
    rule.maxAttempts,
    row.windowEndsAt,
  )
}

function blockedMessage(retryAfterSeconds: number): string {
  const minutes = Math.ceil(retryAfterSeconds / 60)

  return (
    `Demasiados intentos. Inténtalo nuevamente en ` +
    `aproximadamente ${minutes} ` +
    (minutes === 1 ? 'minuto.' : 'minutos.')
  )
}

export async function checkAuthRateLimit(
  operation: AuthOperation,
  email?: string,
): Promise<RateLimitResult> {
  try {
    const secret = process.env.RATE_LIMIT_SECRET

    if (!secret || secret.length < 32) {
      throw new Error('RATE_LIMIT_SECRET no está configurado')
    }

    const requestHeaders = await headers()

    const ip = extractClientIp(
      requestHeaders,
      process.env.VERCEL === '1',
    )

    const rules: LimitRule[] = []

    if (operation === 'login') {
      rules.push({
        scope: 'login-ip',
        identity: ip,
        ...AUTH_RATE_LIMITS.loginByIp,
      })

      rules.push({
        scope: 'login-ip-email',
        identity: `${ip}|${normalizeRateLimitEmail(email ?? '')}`,
        ...AUTH_RATE_LIMITS.loginByIpAndEmail,
      })
    } else {
      rules.push({
        scope: 'register-ip',
        identity: ip,
        ...AUTH_RATE_LIMITS.registerByIp,
      })
    }

    for (const rule of rules) {
      const result = await consumeLimit(rule, secret)

      if (!result.allowed) {
        return {
          allowed: false,
          error: blockedMessage(result.retryAfterSeconds),
        }
      }
    }

    return { allowed: true }
  } catch (error) {
    console.error(
      'Error al comprobar el límite de autenticación:',
      error,
    )

    // Si falla la protección, no permitimos continuar
    // sin verificar el límite.
    return {
      allowed: false,
      error:
        'No es posible procesar la solicitud en este momento. ' +
        'Inténtalo nuevamente más tarde.',
    }
  }
}
