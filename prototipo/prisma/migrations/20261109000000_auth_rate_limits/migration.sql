
-- Contadores de intentos para login y registro.
-- No se almacenan direcciones IP ni correos en texto plano.

CREATE TABLE "auth_rate_limits" (
    "key" VARCHAR(128) NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "window_ends_at" TIMESTAMPTZ(3) NOT NULL,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auth_rate_limits_pkey" PRIMARY KEY ("key")
);

CREATE INDEX "auth_rate_limits_window_ends_at_idx"
ON "auth_rate_limits"("window_ends_at");

-- Restringir el acceso a esta tabla interna.
ALTER TABLE "auth_rate_limits" ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE "auth_rate_limits"
FROM anon, authenticated;
