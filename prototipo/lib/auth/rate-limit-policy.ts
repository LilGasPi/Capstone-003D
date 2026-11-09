
import { createHmac } from 'node:crypto'
import { isIP } from 'node:net'

const MINUTE = 60 * 1000

export const AUTH_RATE_LIMITS = {
  loginByIp: {
    maxAttempts: 30,
    windowMs: 15 * MINUTE,
  },
  loginByIpAndEmail: {
    maxAttempts: 5,
    windowMs: 15 * MINUTE,
  },
  registerByIp: {
    maxAttempts: 3,
    windowMs: 60 * MINUTE,
  },
} as const

export function normalizeRateLimitEmail(email: string): string {
  return email.trim().toLowerCase()
}

export function createRateLimitKey(
  scope: string,
  identity: string,
  secret: string,
): string {
  const digest = createHmac('sha256', secret)
    .update(identity)
    .digest('hex')

  return `${scope}:${digest}`
}

export function extractClientIp(
  requestHeaders: { get(name: string): string | null },
  isVercel: boolean,
): string {
  // No confiamos en cabeceras de proxy fuera de Vercel.
  if (!isVercel) {
    return 'local'
  }

  const forwarded =
    requestHeaders.get('x-vercel-forwarded-for') ??
    requestHeaders.get('x-forwarded-for') ??
    requestHeaders.get('x-real-ip')

  const candidate = forwarded?.split(',')[0]?.trim() ?? ''

  return isIP(candidate) ? candidate : 'unknown'
}

export function evaluateRateLimit(
  attempts: number,
  maxAttempts: number,
  windowEndsAt: Date,
  nowMs: number = Date.now(),
) {
  const allowed = attempts <= maxAttempts

  return {
    allowed,
    retryAfterSeconds: allowed
      ? 0
      : Math.max(
          1,
          Math.ceil((windowEndsAt.getTime() - nowMs) / 1000),
        ),
  }
}
