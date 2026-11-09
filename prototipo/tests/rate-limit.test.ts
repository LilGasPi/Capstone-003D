
import { describe, expect, it } from 'vitest'
import {
  AUTH_RATE_LIMITS,
  createRateLimitKey,
  evaluateRateLimit,
  extractClientIp,
  normalizeRateLimitEmail,
} from '@/lib/auth/rate-limit-policy'

const TEST_SECRET = 'clave-de-prueba-con-suficiente-longitud-123456'

describe('Rate limiting de autenticación', () => {
  describe('Configuración', () => {
    it('limita login por correo e IP a 5 intentos', () => {
      expect(AUTH_RATE_LIMITS.loginByIpAndEmail.maxAttempts).toBe(5)
    })

    it('limita registro por IP a 3 solicitudes', () => {
      expect(AUTH_RATE_LIMITS.registerByIp.maxAttempts).toBe(3)
    })
  })

  describe('Identificación de solicitudes', () => {
    it('normaliza el correo electrónico', () => {
      expect(normalizeRateLimitEmail(' TEST@EXAMPLE.COM ')).toBe(
        'test@example.com',
      )
    })

    it('genera claves estables sin exponer la identidad', () => {
      const key = createRateLimitKey(
        'login-ip-email',
        '127.0.0.1|test@example.com',
        TEST_SECRET,
      )

      expect(key).toBe(
        createRateLimitKey(
          'login-ip-email',
          '127.0.0.1|test@example.com',
          TEST_SECRET,
        ),
      )

      expect(key).not.toContain('test@example.com')
      expect(key).not.toContain('127.0.0.1')
    })

    it('separa los contadores por operación', () => {
      const login = createRateLimitKey(
        'login-ip',
        '127.0.0.1',
        TEST_SECRET,
      )

      const register = createRateLimitKey(
        'register-ip',
        '127.0.0.1',
        TEST_SECRET,
      )

      expect(login).not.toBe(register)
    })

    it('utiliza la IP proporcionada por Vercel', () => {
      const requestHeaders = new Headers({
        'x-vercel-forwarded-for': '203.0.113.10',
      })

      expect(extractClientIp(requestHeaders, true)).toBe(
        '203.0.113.10',
      )
    })

    it('no confía en cabeceras de proxy fuera de Vercel', () => {
      const requestHeaders = new Headers({
        'x-forwarded-for': '203.0.113.10',
      })

      expect(extractClientIp(requestHeaders, false)).toBe(
        'local',
      )
    })
  })

  describe('Decisión de bloqueo', () => {
    const now = new Date('2026-11-09T12:00:00.000Z')
    const end = new Date('2026-11-09T12:15:00.000Z')

    it('permite los intentos inferiores al límite', () => {
      const result = evaluateRateLimit(3, 5, end, now.getTime())

      expect(result.allowed).toBe(true)
      expect(result.retryAfterSeconds).toBe(0)
    })

    it('permite el quinto intento', () => {
      const result = evaluateRateLimit(5, 5, end, now.getTime())

      expect(result.allowed).toBe(true)
    })

    it('bloquea el sexto intento', () => {
      const result = evaluateRateLimit(6, 5, end, now.getTime())

      expect(result.allowed).toBe(false)
      expect(result.retryAfterSeconds).toBe(900)
    })

    it('calcula el tiempo restante del bloqueo', () => {
      const later = new Date('2026-11-09T12:10:00.000Z')

      const result = evaluateRateLimit(6, 5, end, later.getTime())

      expect(result.retryAfterSeconds).toBe(300)
    })
  })
})
