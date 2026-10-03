# Product Vision — Estacionando

## Visión

Estacionando es una plataforma digital de dos lados que conecta a conductores que necesitan un lugar para estacionar con anfitriones que poseen espacios disponibles en casas, edificios, garajes o propiedades.

La visión del producto es reducir el tiempo y la incertidumbre asociados a la búsqueda de estacionamiento y, al mismo tiempo, permitir que espacios ociosos generen valor para sus propietarios.

## Declaración de visión

**Para** conductores que necesitan encontrar estacionamiento de forma rápida y anfitriones que tienen espacios disponibles, **Estacionando** es una plataforma web de marketplace que permite publicar, encontrar, reservar y gestionar espacios de estacionamiento, incorporando disponibilidad, precio y ruteo para mejorar la experiencia de ambos lados.

## Problema

En zonas urbanas, buscar estacionamiento genera pérdida de tiempo, incertidumbre y circulación innecesaria. Paralelamente, existen espacios privados que permanecen sin uso durante parte del día.

Estacionando aborda ambos problemas mediante un marketplace donde:

- los anfitriones publican y administran sus espacios;
- los conductores exploran y reservan alternativas;
- el sistema apoya la elección mediante ubicación, disponibilidad, precio y conveniencia.

## Usuarios objetivo

| Usuario | Necesidad principal | Valor esperado |
|---|---|---|
| Conductor | Encontrar un estacionamiento adecuado | Menos tiempo de búsqueda y mejor información para decidir |
| Anfitrión | Publicar y administrar un espacio | Monetizar capacidad ociosa y controlar disponibilidad |
| Administrador | Supervisar la plataforma | Trazabilidad, control operativo y soporte |

## Propuesta de valor

- Publicación de espacios por anfitriones.
- Exploración de estacionamientos en lista y mapa.
- Disponibilidad y horarios configurables.
- Flujo de reserva y gestión de reservas.
- Gestión básica de perfil y espacios.
- Base para recomendaciones de precio y ruteo.
- Arquitectura preparada para evolucionar hacia pagos, verificación, notificaciones y otros módulos.

## Objetivo general

Desarrollar una plataforma web funcional que conecte conductores y anfitriones mediante la publicación, búsqueda y reserva de espacios de estacionamiento.

## Objetivos específicos

1. Permitir registrar y administrar cuentas de usuario.
2. Permitir que un anfitrión publique y gestione un espacio.
3. Permitir que un conductor explore espacios y revise su detalle.
4. Permitir crear y gestionar reservas.
5. Incorporar disponibilidad, precio y ubicación como variables centrales.
6. Diseñar e integrar progresivamente pricing dinámico y ruteo óptimo.
7. Mantener una hoja de ruta clara para funciones todavía pendientes.

## Alcance del incremento actual

El incremento actual permite evidenciar una aplicación web con módulos de autenticación, exploración, publicación, reservas, perfiles y administración, además de integración con Supabase y visualización cartográfica en la interfaz.

La documentación técnica del proyecto también describe servicios de pricing y ruteo como parte del diseño/implementación del producto. Para efectos de evaluación, cada capacidad se presenta según el nivel que efectivamente pueda demostrarse en la versión desplegada.

## Fuera del alcance terminado

No se debe declarar como completamente terminado aquello que aún dependa de integración o validación productiva, por ejemplo:

- pagos reales;
- KYC/verificación de identidad de extremo a extremo;
- notificaciones productivas;
- PWA final validada;
- automatizaciones o integraciones futuras no demostrables;
- módulos que solo tengan interfaz/prototipo sin flujo completo.

## Indicadores de éxito del MVP

| Indicador | Evidencia |
|---|---|
| Publicación | El anfitrión puede completar el flujo básico del espacio |
| Exploración | El conductor puede visualizar alternativas y sus datos |
| Reserva | Existe un flujo demostrable de creación/gestión de reservas |
| Persistencia | Los datos relevantes se leen/escriben en la base de datos |
| Claridad de avance | La presentación diferencia terminado, en curso y pendiente |
| Trazabilidad | Backlogs, DoD, retrospectivas y roadmap quedan versionados en Git |

## Frase de producto

**Estacionando — Tu lugar, más cerca.**
