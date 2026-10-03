# Fuentes y evidencias revisadas

## Objetivo

Registrar qué fuentes se utilizaron para construir los artefactos metodológicos y separar evidencia técnica de supuestos.

## Fuentes principales

### Repositorio académico
- Repositorio: `LilGasPi/Capstone-003D`
- Evidencias revisadas:
  - Fase 1 / Individuales.
  - Fase 2 / Evidencias grupales.
  - Fase 3 / Evidencias grupales.
  - Formato de presentación y planillas de evaluación existentes.

### Aplicación / código
Se revisó el repositorio `LilGasPi/Estacionando` como evidencia de UI y módulos versionados. Entre los componentes presentes se encuentran:

- autenticación y recuperación de contraseña;
- exploración de estacionamientos;
- publicación;
- reservas;
- espacios propios;
- perfiles;
- panel administrativo;
- UI de incidencias;
- UI de revisión KYC;
- cliente Supabase;
- mapas en la implementación versionada.

La existencia de una pantalla o componente no se interpreta automáticamente como flujo productivo completo.

### Documentación técnica del proyecto
La documentación técnica pública describe como arquitectura desplegada:

- Next.js 16 + React 19 + TypeScript;
- Prisma + PostgreSQL;
- Supabase para PostgreSQL/Storage/Realtime;
- Mapbox para geocodificación, mapas y rutas;
- Java 21 + Spring Boot 4 para motores de pricing y ruteo;
- autenticación y sesiones propias;
- validación de RUT;
- disponibilidad y protección ante reservas concurrentes;
- motor de precio dinámico;
- motor de optimización de ruta.

La misma documentación declara como trabajo de fases posteriores, entre otros:

- app móvil;
- KYC real;
- pagos;
- notificaciones;
- elementos de la arquitectura original no implementados todavía.

## Criterio utilizado para los estados

### Hecho
Existe evidencia suficiente y el comportamiento es demostrable o está expresamente documentado como implementado.

### En curso
Existe código, UI, modelo o servicio parcial, pero falta validar integración de extremo a extremo o su demostración actual.

### Pendiente
La documentación lo identifica como futuro o no existe evidencia suficiente para declararlo terminado.

## Diferencias entre fuentes

El repositorio `LilGasPi/Estacionando` y la documentación técnica pública no representan exactamente la misma estructura de implementación. Por ello:

1. no se mezclan automáticamente capacidades entre ambas fuentes;
2. en presentación se debe demostrar la versión que efectivamente se ejecutará;
3. la documentación técnica se utiliza para arquitectura/decisiones que estén respaldadas por el despliegue oficial;
4. una UI presente en un repositorio no convierte una integración externa en productiva.

## Auditoría docente pendiente

El archivo `Resumen evidencias Antonio Varas.xlsx`, visible en la plataforma docente, no fue encontrado en el Drive conectado ni en los repositorios revisados.

Por lo tanto, queda una sola dependencia documental externa para poder cerrar una revisión “observación por observación”: incorporar ese Excel y completar `08_matriz_trazabilidad_y_auditoria.md`.

## Checklist de verificación final

- [x] Metodología en Git.
- [x] Product Vision en Git.
- [x] Product Backlog en Git.
- [x] Sprint Backlog en Git.
- [x] Definition of Done en Git.
- [x] Retrospectiva en Git.
- [x] Avance y roadmap preparados.
- [x] Matriz de trazabilidad creada.
- [ ] Auditoría docente específica cruzada con evidencia (bloqueada por falta del Excel).
- [ ] BPMN corregidos con notación profesional (siguiente actividad).
