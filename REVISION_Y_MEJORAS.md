# Revisión del proyecto París–Copenhague

Fecha: 24-11-2026  
Base revisada: repositorio `ergalego84-alt/Paris-Copenaghe`, rama `main`, commit `4f5bca6d069087fb179835eae0187f3ec11f363e`.

Comprobación de procedencia: el `C:\Users\ergal\Downloads\index_1.html` aportado después por el usuario tiene el mismo Git blob SHA-1 (`151357414ef9981374903779d0b4934e30ae56e5`) que `index.html` en esa rama `main`. El paquete corregido parte de ese contenido exacto.

## Correcciones realizadas en esta copia local

- Actualicé los vuelos con la información que aportó el usuario: Marina, Irene y Juan Carlos vuelan Málaga–Copenhague con SAS SK584 (10:45–14:25, según el index anterior) y vuelven Copenhague–Málaga con SAS SK587 (13:50–17:40). Adrián y Elia vuelven Copenhague–Málaga con Ryanair FR648 (13:25–17:15). Las dos capturas adjuntas confirman los regresos; la ida SK584 se conserva de `index_1.html`.
- Ajusté el sábado 5 para contemplar la llegada de los tres desde Málaga a las 14:25, la llegada de Adrián y Elia a las 15:20, el encuentro a las 16:30 y un paseo flexible por Nyhavn y el centro.
- Ajusté el plan de sábado a una tarde flexible para Adrián y Elia con Nyhavn y el mercado de Nytorv/Gammeltorv. Tivoli ya no aparece como actividad fija de llegada.
- Cambié Rosenborg a visita exterior + Kongens Have; la visita interior queda opcional.
- Eliminé referencias de reserva de los vuelos de la copia local.
- Eliminé del README la instrucción peligrosa de permitir lectura y escritura pública en Firestore. Añadí `firestore.rules` con denegación por defecto y documentación explícita sobre los requisitos de autenticación.
- Añadí avisos en la interfaz: esta versión no inicia sesión y no protege las acciones de administrador; no debe conectarse a datos reales hasta que existan Authentication y reglas apropiadas.
- Desactivé la conexión de Firebase por defecto en esta copia local. Los cinco viajeros usan almacenamiento local hasta que se implemente autenticación y autorización verificables.
- El indicador de nube espera respuestas del servidor para los cinco documentos y ya no afirma que los otros cuatro móviles están conectados.
- Añadí escape de nombres, gastos, propuestas y datos dinámicos; filtré enlaces externos para aceptar HTTPS; validé datos locales/compartidos para que valores dañados no rompan las vistas.
- Reemplacé el Service Worker. Ahora guarda la carcasa de la app para modo sin conexión, limita la caché a su propio prefijo y no intercepta peticiones externas o escrituras.

## Pendientes importantes antes de publicar

1. **Reglas Firebase reales:** no se obtuvo acceso a Firebase Console ni se pudieron comprobar las reglas actualmente publicadas. El archivo `firestore.rules` solo cambia el comportamiento si alguien lo publica en el proyecto.
2. **Autenticación y roles:** la app sigue sin iniciar sesión. Los botones de aprobación no son control de seguridad. Hay que identificar a los cinco usuarios y al administrador y aplicar los permisos en servidor.
3. **Modelo de datos:** varios estados se escriben como listas completas en un único documento. Dos móviles que guarden cambios a la vez pueden pisarse cambios entre sí. Separar gastos, propuestas, checklist y paradas en documentos individuales permite reglas más precisas y escrituras menos propensas a conflictos.
4. **Exposición pública:** GitHub y GitHub Pages son públicos. En el repositorio original aparecen enlaces directos a carpetas de Drive y datos del viaje. Revisar el uso compartido de las carpetas, en especial la de DNIs. Los códigos de reserva se eliminaron de esta copia, pero pueden seguir en commits anteriores del repositorio remoto; no asumir que basta con borrarlos del último `index.html`.
5. **Prueba real:** la sincronización entre cinco teléfonos, permisos de Drive, ubicación GPS, modo instalado y modo sin conexión no se probaron en dispositivos reales.

Firebase recomienda combinar Authentication con Firestore Security Rules para acceso por usuario; `allow read, write: if true` deja la base accesible a cualquiera. Referencias: [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started), [reglas basadas en Authentication](https://firebase.google.com/docs/firestore/security/rules-conditions).

## Archivos de esta revisión

- `index.html`: aplicación y datos del itinerario corregidos.
- `sw.js`: almacenamiento temporal y modo offline de la carcasa.
- `README.md`: instrucciones de seguridad y estado honesto del proyecto.
- `firestore.rules`: reglas de denegación por defecto hasta completar la autenticación.

Estos cambios son locales; no se han publicado en GitHub ni en GitHub Pages.
