# ✈️ Viaje a París & Copenhague (3–8 diciembre 2026)

PWA para organizar el viaje de cinco personas: itinerario, mapa, gastos, checklist y propuestas.

## Aviso importante de seguridad

La versión actual del cliente **no inicia sesión ni distingue al administrador de los demás viajeros**. Los botones de aceptar/rechazar propuestas solo cambian la interfaz; no prueban la identidad de quien los pulsa. No habilites Firestore con reglas que permitan leer/escribir a cualquiera y no guardes aquí documentos, datos de identidad ni información financiera sensible.

El código incluye una configuración de Firebase, pero eso no confirma que la base de datos ni sus reglas estén seguras. La sincronización está desactivada en esta copia local (`FIREBASE_SYNC_ENABLED = false`). Antes de activarla, revisa las reglas publicadas en Firebase Console. Si no conoces su estado, usa el archivo `firestore.rules` de este repositorio como cierre temporal: deniega toda lectura/escritura hasta que se implemente autenticación y autorización. La aplicación seguirá en modo local.

Documentación oficial: [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started) y [Firebase Authentication para web](https://firebase.google.com/docs/auth/web/start).

## Uso en el móvil

La web publicada está en [GitHub Pages](https://ergalego84-alt.github.io/Paris-Copenaghe/).

- Android (Chrome): menú ⋮ → **Instalar aplicación** o **Añadir a la pantalla principal**.
- iPhone (Safari): **Compartir** → **Añadir a pantalla de inicio**.

## Qué contiene

- París: 3–5 de diciembre, Adrián y Elia.
- Copenhague: 5–8 de diciembre, el grupo de cinco; la llegada de Marina, Irene y Juan Carlos el día 5 está pendiente de confirmar por la cancelación de su vuelo.
- Mapa Leaflet/OpenStreetMap, itinerarios, gastos compartidos, checklist, propuestas, buscador de comida y exportación de imágenes del itinerario.
- La ruta del sábado es flexible y no incluye Tivoli como actividad fija de llegada.

## Pendientes técnicos antes de compartir datos

1. Añadir Firebase Authentication e identificar a los cinco viajeros.
2. Cambiar los documentos globales tipo lista por registros individuales para que las reglas puedan permitir propuestas a viajeros y reservar aprobación/rechazo al administrador.
3. Publicar y probar reglas de Firestore que permitan solo esos usuarios y validen el tipo y tamaño de los datos.
4. Probar sincronización concurrente y restauración de copias de seguridad.
5. Revisar el estado real del proyecto Firebase; este repositorio no contiene las reglas publicadas.

No basta con proteger botones en la interfaz: las restricciones deben imponerse en las reglas del servidor.
