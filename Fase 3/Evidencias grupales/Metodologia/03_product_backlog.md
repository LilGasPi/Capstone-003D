# Product Backlog — Estacionando

## Convenciones

- **Prioridad:** Must / Should / Could.
- **Estado:** Hecho, En curso, Pendiente.
- **SP:** estimación relativa en Story Points.
- Un elemento solo se considera **Hecho** si cumple la Definition of Done del proyecto.
- Cuando una interfaz existe pero falta integración de extremo a extremo, se clasifica como **En curso**, no como Hecho.

## Backlog priorizado

| ID | Épica | Historia de usuario | Prioridad | SP | Estado | Criterios de aceptación resumidos |
|---|---|---|---|---:|---|---|
| PB-01 | Autenticación | Como usuario quiero registrarme para acceder a Estacionando | Must | 5 | Hecho | Registro disponible, validaciones básicas y persistencia de cuenta |
| PB-02 | Autenticación | Como usuario quiero iniciar/cerrar sesión para proteger mi cuenta | Must | 3 | Hecho | Sesión controlada y navegación según autenticación |
| PB-03 | Perfil | Como usuario quiero administrar mis datos y vehículos | Must | 5 | Hecho | Visualización/edición básica de perfil y datos asociados |
| PB-04 | Exploración | Como conductor quiero ver espacios disponibles en lista/mapa | Must | 8 | Hecho | Se muestran espacios persistidos, ubicación y precio |
| PB-05 | Exploración | Como conductor quiero revisar el detalle de un estacionamiento | Must | 5 | Hecho | Se muestran características, ubicación, precio y datos relevantes |
| PB-06 | Publicación | Como anfitrión quiero publicar un espacio | Must | 8 | Hecho | Formulario por pasos, ubicación, fotos, precio y disponibilidad |
| PB-07 | Publicación | Como anfitrión quiero editar/administrar mis espacios | Must | 5 | Hecho | Mis espacios se pueden consultar y modificar según reglas del sistema |
| PB-08 | Reservas | Como conductor quiero solicitar una reserva | Must | 8 | Hecho | Se registra reserva con horario, espacio, vehículo y precio |
| PB-09 | Reservas | Como conductor quiero revisar mis reservas próximas e históricas | Must | 5 | Hecho | Se listan reservas por estado |
| PB-10 | Reservas | Como conductor quiero cancelar una reserva según las reglas | Should | 5 | Hecho | Cancelación con motivo/estado y actualización persistente |
| PB-11 | Reservas | Como usuario quiero registrar entrada/salida del estacionamiento | Should | 5 | En curso | Check-in/check-out deben funcionar de extremo a extremo y quedar demostrables |
| PB-12 | Disponibilidad | Como conductor quiero evitar reservar horarios ocupados | Must | 8 | En curso | Validación de solapamiento y disponibilidad consistente en UI y BD |
| PB-13 | Mapas | Como conductor quiero visualizar los espacios georreferenciados | Must | 5 | Hecho | Mapa renderiza coordenadas persistidas |
| PB-14 | Mapas | Como anfitrión quiero confirmar la ubicación al publicar | Must | 5 | Hecho | Latitud/longitud quedan asociadas al espacio |
| PB-15 | Pricing | Como anfitrión quiero recibir un precio sugerido | Should | 8 | En curso | Motor/regla integrada a UI y demostrable con datos reales |
| PB-16 | Ruteo | Como conductor quiero conocer la opción más conveniente/ruta | Should | 8 | En curso | Ranking/ruta integrada al flujo demostrable |
| PB-17 | Administración | Como administrador quiero ver un resumen operativo | Should | 8 | Hecho | Acceso restringido y dashboard con métricas disponibles |
| PB-18 | Administración | Como administrador quiero gestionar usuarios, espacios y reservas | Should | 8 | En curso | Lectura y acciones administrativas validadas de extremo a extremo |
| PB-19 | Incidencias | Como usuario quiero reportar una incidencia ligada a una reserva | Should | 8 | En curso | Registro, consulta, seguimiento y resolución completos |
| PB-20 | Reseñas | Como conductor quiero calificar una experiencia finalizada | Could | 5 | En curso | Solo habilitada para reservas elegibles y persistida |
| PB-21 | KYC | Como anfitrión quiero verificar mi identidad | Should | 13 | Pendiente / parcial | Flujo real de solicitud, evidencia, revisión, aprobación/rechazo |
| PB-22 | Pagos | Como conductor quiero pagar una reserva online | Must futuro | 13 | Pendiente | Integración real con proveedor, estados y manejo de errores |
| PB-23 | Notificaciones | Como usuario quiero recibir confirmaciones y cambios | Should | 8 | Pendiente | Correo/push/otro canal productivo con eventos relevantes |
| PB-24 | Calidad | Como equipo quiero pruebas automáticas del flujo crítico | Must | 8 | Pendiente | Casos mínimos de auth, publicación, reserva y permisos |
| PB-25 | Seguridad | Como equipo quiero revisar RLS/permisos y secretos | Must | 5 | En curso | Políticas verificadas, secretos fuera del repo y accesos mínimos |
| PB-26 | Mobile/PWA | Como usuario quiero una experiencia instalable/móvil robusta | Could | 13 | Pendiente | PWA/app validada en dispositivos y flujo principal usable |
| PB-27 | Observabilidad | Como equipo quiero monitorear errores y disponibilidad | Could | 8 | Pendiente | Logs, alertas y evidencia de seguimiento |
| PB-28 | UX | Como usuario quiero mensajes y estados claros en todas las operaciones | Should | 5 | En curso | Loading, éxito, error, vacío y confirmaciones consistentes |

## Orden de prioridad para las próximas iteraciones

1. Cerrar flujos críticos de publicación, disponibilidad y reserva.
2. Asegurar persistencia, permisos y pruebas.
3. Integrar pricing/ruteo de forma demostrable.
4. Completar administración e incidencias.
5. Integrar pagos y KYC real.
6. Agregar notificaciones, observabilidad y experiencia móvil/PWA.

## Regla de mantenimiento

Este Product Backlog es un artefacto vivo. Después de cada review o feedback docente se deben:

1. agregar nuevos ítems;
2. actualizar prioridad;
3. revisar estimación;
4. mover estados únicamente con evidencia;
5. vincular la historia al Sprint Backlog correspondiente.
