# Norte — París y Copenhague 2026

Guía web nueva para el viaje del 3 al 8 de diciembre de 2026. Se publica como una ruta independiente dentro del repositorio existente: `/norte-cph/`. La página original y todos sus archivos quedan intactos.

## Funciones

- Itinerario por días, vuelos confirmados, mapas esquemáticos para las dos ciudades y enlaces directos a navegación.
- Lugares destacados y sugerencias de comida, con búsqueda en Maps.
- Checklist con progreso, registro de gastos y propuestas con votación local.
- Apartados de documentos y fotos con enlaces privados que cada usuario configura en su propio navegador; no se publican en el repositorio.
- Exportar/importar el estado local como JSON; compartir enlace/resumen e imprimir.
- Instalable como web app y con caché para abrir la carcasa offline.

## Datos y límites

Checklist, propuestas y gastos se guardan en `localStorage` en el dispositivo actual. No hay backend ni sincronización entre viajeros. Para compartir datos, exporta el JSON y envíalo por un canal privado. No guardar números de reserva, contraseñas ni fotos de documentos en la web.

Los mapas son ilustrativos, no cartográficos. Los tiempos y horarios del itinerario son orientativos; verificar vuelos, transporte, aperturas y reservas antes de viajar. Las referencias de reserva no se incluyen.

## Estructura

- `index.html`: interfaz responsive y funciones locales.
- `manifest.webmanifest`: metadatos de instalación.
- `sw.js`: caché limitada a los archivos de esta web.
- `icon.svg`: icono propio.

