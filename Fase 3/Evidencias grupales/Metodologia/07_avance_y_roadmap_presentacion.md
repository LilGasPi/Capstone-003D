# Avance del aplicativo y Roadmap — Contenido para presentación

## Mensaje central

La presentación debe separar explícitamente:

- **Hecho:** demostrable hoy.
- **En curso:** existe trabajo parcial o una integración que todavía requiere cierre.
- **Pendiente:** pertenece al roadmap.

No utilizar un porcentaje único si no existe una métrica objetiva y actualizada que lo respalde.

## Estado del aplicativo

### Hecho / demostrable

- Aplicación web responsive.
- Registro, login y recuperación de contraseña.
- Exploración de estacionamientos.
- Visualización de espacios en lista y mapa.
- Detalle de estacionamiento.
- Publicación de espacios mediante flujo por pasos.
- Carga/gestión básica de fotografías.
- Configuración de disponibilidad y tarifa.
- Gestión de espacios propios.
- Perfil de usuario.
- Módulo de reservas y estados asociados.
- Base de panel administrativo.
- Persistencia mediante Supabase en la implementación actualmente versionada.
- Navegación y diseño general del producto.

### En curso / requiere validación de extremo a extremo

- Disponibilidad sin conflictos en todos los escenarios.
- Check-in/check-out completo.
- Pricing dinámico integrado al flujo visible.
- Ruteo/recomendación óptima integrada al flujo visible.
- Administración avanzada.
- Incidencias completas con ciclo de resolución.
- Reseñas.
- Seguridad/RLS y permisos finales.
- Cobertura de pruebas automatizadas.

### Pendiente / roadmap

- Pago real con proveedor.
- KYC/verificación de identidad productiva.
- Notificaciones productivas.
- PWA/app móvil final.
- Observabilidad y alertas.
- Hardening de seguridad.
- Pruebas de carga y rendimiento.
- Analítica avanzada.

## Roadmap propuesto

### Iteración 1 — Consolidación del MVP
**Objetivo:** cerrar el núcleo conductor/anfitrión.

- Validar publicación de extremo a extremo.
- Validar disponibilidad y reserva sin solapamientos.
- Consolidar gestión de reservas.
- Corregir permisos/errores críticos.
- Agregar pruebas mínimas del flujo principal.

**Salida:** MVP estable y demostrable.

### Iteración 2 — Motores y experiencia
**Objetivo:** convertir pricing y ruteo en capacidades visibles y medibles.

- Integrar precio sugerido.
- Integrar ruteo/ranking.
- Mejorar filtros y UX.
- Completar estados de carga/error/vacío.

**Salida:** recomendación útil para conductor y anfitrión.

### Iteración 3 — Confianza y operación
**Objetivo:** reforzar seguridad y administración.

- KYC real.
- Incidencias completas.
- Revisión de RLS/permisos.
- Panel administrativo consolidado.
- Trazabilidad/auditoría.

**Salida:** operación controlada.

### Iteración 4 — Monetización
**Objetivo:** cerrar la transacción económica.

- Integrar pagos.
- Estados de pago.
- Reembolsos/cancelaciones.
- Notificaciones transaccionales.

**Salida:** flujo comercial completo.

### Iteración 5 — Escala y producto final
**Objetivo:** preparación para entrega/productización.

- PWA/móvil.
- Observabilidad.
- Pruebas automatizadas ampliadas.
- Rendimiento.
- Accesibilidad.
- Analítica.

**Salida:** versión final estabilizada.

## Diapositiva sugerida: “Estado actual”

Título:
**Avance real del aplicativo**

Tres columnas:

### HECHO
Web · Auth · Explorar · Publicar · Perfil · Reservas base · Mapa · Admin base

### EN CURSO
Disponibilidad robusta · Pricing · Ruteo · Incidencias · Reseñas · Seguridad final

### PENDIENTE
Pagos · KYC real · Notificaciones · PWA/móvil · Observabilidad

Frase inferior:
**Presentamos evidencia de lo que funciona hoy y mantenemos el resto como roadmap.**

## Diapositiva sugerida: “Roadmap”

Usar cinco etapas horizontales:

1. **Consolidar MVP**
2. **Pricing + Ruteo**
3. **Confianza + Admin**
4. **Pagos + Notificaciones**
5. **Escala + Producto final**

## Pitch breve

> “Para esta revisión separamos el avance en tres estados. Lo que marcamos como hecho es aquello que podemos demostrar en la aplicación y respaldar con código o persistencia. Lo que está en curso ya tiene trabajo realizado, pero aún requiere cerrar integración o validación. Finalmente, el roadmap agrupa las capacidades pendientes por dependencia: primero estabilizamos el núcleo, después integramos pricing y ruteo, luego confianza y administración, y finalmente monetización y escalabilidad.”

## Evidencias a mostrar en vivo

1. Login/registro.
2. Exploración y mapa.
3. Publicación de espacio.
4. Mis espacios/perfil.
5. Reservas.
6. Si está estable: panel administrativo.
7. Git con la carpeta metodológica y backlog.
8. Roadmap de la presentación.

## Regla de presentación

Si una función no puede demostrarse durante la revisión o no tiene evidencia suficiente de extremo a extremo, presentarla como **En curso** o **Pendiente**, no como terminada.
