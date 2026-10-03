# Definition of Done — Estacionando

Un ítem del backlog solo puede pasar a **Hecho** cuando cumple todos los criterios aplicables de esta Definition of Done.

## Checklist general

### Funcionalidad
- [ ] Cumple todos los criterios de aceptación de la historia.
- [ ] El flujo principal funciona de principio a fin.
- [ ] Los estados alternativos relevantes (error, vacío, carga, permisos) están contemplados.
- [ ] No depende de datos ficticios para demostrar el comportamiento declarado como terminado.

### Código
- [ ] El código está versionado en Git.
- [ ] No hay secretos, contraseñas ni credenciales comprometidas en el repositorio.
- [ ] El proyecto compila/builda correctamente.
- [ ] No se introducen errores evidentes de TypeScript/lint/build.
- [ ] El cambio fue revisado al menos por otro integrante cuando corresponda.

### Datos y backend
- [ ] La lectura/escritura de datos funciona contra el entorno acordado.
- [ ] Las validaciones de negocio están implementadas.
- [ ] Los permisos y accesos están revisados.
- [ ] Si se modificó el modelo de datos, la migración/esquema queda documentado/versionado.
- [ ] Los errores de persistencia muestran una respuesta controlada.

### UX
- [ ] La pantalla es usable en escritorio y en tamaño móvil razonable.
- [ ] Hay feedback visible al guardar, cancelar, publicar o reservar.
- [ ] Los mensajes de error son comprensibles.
- [ ] Los botones críticos no permiten acciones duplicadas accidentales.
- [ ] El diseño mantiene consistencia visual con Estacionando.

### Integraciones
- [ ] La integración fue probada con una respuesta real o entorno de prueba verificable.
- [ ] Se documentaron variables de entorno requeridas.
- [ ] Existen manejos de timeout/error cuando corresponda.
- [ ] Un mock o una interfaz visual no se presenta como integración productiva terminada.

### Pruebas
- [ ] Se ejecutó una prueba manual del camino feliz.
- [ ] Se probó al menos un caso de error/validación.
- [ ] Cuando exista suite automatizada, las pruebas relevantes están verdes.
- [ ] El flujo queda demostrable durante la presentación.

### Documentación y evidencia
- [ ] La historia/tarea está reflejada en Product/Sprint Backlog.
- [ ] El estado del roadmap se actualizó si corresponde.
- [ ] Existe evidencia verificable: commit, captura, demo, prueba o documento.
- [ ] La documentación técnica se actualizó si cambió una decisión relevante.
- [ ] La presentación no contradice el estado real del producto.

## Regla de estados

- **Hecho:** cumple la DoD y es demostrable.
- **En curso:** existe trabajo parcial, interfaz o integración incompleta.
- **Pendiente:** todavía no existe incremento demostrable.
- **Bloqueado:** no puede avanzar por una dependencia identificada.

## Regla especial para entregas académicas

Ninguna funcionalidad se marcará como terminada únicamente porque exista en un roadmap, maqueta, BPMN, tabla de base de datos o pantalla sin integración. La evidencia debe corresponder al comportamiento que se declara frente a la profesora.
