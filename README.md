# ✈️ Viaje a París & Copenhague (3–8 Diciembre 2026)

Web/App colaborativa (PWA) para organizar el itinerario, el mapa, los gastos, el checklist y las recomendaciones del viaje de los 5.

## 📱 ¿Cómo usar la App en el móvil?
1. Entra en el enlace oficial de GitHub Pages: https://ergalego84-alt.github.io/Paris-Copenaghe/
2. **Para guardarla como una app nativa en tu móvil:**
   - **En Android (Chrome):** Toca los tres puntos del menú superior derecho y selecciona **"Instalar aplicación"** o **"Añadir a la pantalla principal"**.
   - **En iPhone (Safari):** Toca el botón de **Compartir** (el cuadrado con la flecha hacia arriba) y selecciona **"Añadir a pantalla de inicio"**.

---

## 🔄 Activar sincronización entre los 5 móviles (Firebase, gratis)

Sin esto, cada móvil ve solo sus propios datos guardados en local. Con Firebase configurado, el Checklist, los Gastos, las Propuestas y los nombres de los 5 se sincronizan al instante en todos los móviles.

1. Ve a [console.firebase.google.com](https://console.firebase.google.com) e inicia sesión con una cuenta de Google.
2. Crea un proyecto nuevo (gratis, plan Spark, no pide tarjeta).
3. En el menú lateral, entra en **Compilación → Firestore Database** y pulsa **Crear base de datos** (puedes empezar en "modo de prueba").
4. En la pestaña **Reglas** de Firestore, pega esto para empezar rápido (podéis restringirlo más adelante si queréis):
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```
5. En **Configuración del proyecto** (el engranaje) → pestaña **General** → sección "Tus apps" → pulsa el icono `</>` para añadir una app Web.
6. Copia el objeto `firebaseConfig` que te muestra Firebase.
7. Abre `index.html`, busca el bloque `const firebaseConfig = {...}` (cerca del final del archivo) y sustituye los valores de ejemplo por los tuyos.
8. Sube el archivo actualizado a GitHub Pages. Ya está: los 5 móviles verán los mismos datos.

Mientras no se configure, la app sigue funcionando perfectamente en modo local (verás un aviso "📵 Sin sincronizar" en la portada).

---

## 🗺️ Estructura del Viaje
- **3 al 5 de diciembre:** París (Adrián + Elia) 🇫🇷
- **5 al 8 de diciembre:** Copenhague (Los 5 juntos) 🇩🇰

## 🛠️ Secciones de la App
- **🏠 Inicio:** Resumen rápido de los accesos principales y estado del viaje.
- **🇫🇷 / 🇩🇰 París y Copenhague:** Itinerarios detallados hora por hora con enlaces directos a Google Maps.
- **🗺️ Mapa:** Todos los lugares del viaje en un mapa (OpenStreetMap/Leaflet, sin necesidad de clave de API), con chinchetas numeradas y coloreadas por día. Selector de ciudad y filtro por día.
- **💶 Gastos:** Cada gasto tiene quién paga, cantidad, concepto y quién participa (por defecto todos, se puede desmarcar). Calcula automáticamente lo pagado/lo que corresponde/el saldo de cada uno y propone el ajuste final con el menor número de transferencias.
- **✅ Checklist:** Lista de lugares de interés compartida.
- **⭐ Ideas / 🍴 Comer:** Ideas de comida, fotos y parques para proponer al grupo.
- **🔔 Cambios pendientes:** Zona de control de propuestas (requieren aprobación del administrador; los gastos no).
- **✈️ Vuelos / 📁 Documentos:** Horarios de los vuelos y accesos rápidos a la documentación en Google Drive.
- **⚙️ Ajustes → Los 5 viajeros:** Cambia los nombres que se usan para repartir los gastos.

## 🔧 Sobre la corrección de botones y enlaces
- Todos los enlaces a Google Maps y Google Drive son enlaces `<a>` reales con `target="_blank" rel="noopener"`, para que se abran de forma fiable también con la app instalada en la pantalla de inicio.
- La navegación interna ahora usa `bubbling` en vez de `capture`, evitando conflictos con los enlaces reales.
- Si un enlace no se abre estando la app instalada como PWA (algo típico de iOS en modo standalone), mantén pulsado el enlace y elige "Abrir en Safari/Chrome".
- El Service Worker (`sw.js`) se ha actualizado de versión para forzar que los móviles descarguen la versión nueva en vez de quedarse con una copia en caché antigua.
