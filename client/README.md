# Monster Hunter Maps — frontend

Interfaz React + Vite del mapa interactivo de biomas.

## Ejecutar

1. Arranca el backend Express y MongoDB desde la raíz del repositorio: `npm start`.
2. En otra terminal, ejecuta `cd client && npm install && npm run dev`.
3. Abre la dirección que indique Vite (habitualmente `http://localhost:5173`).

Por defecto React consulta `http://localhost:3000/api/monsters`. Para cambiarlo, crea `client/.env` con `VITE_API_URL=https://tu-servidor/api`.

**Recorrido:** seleccionar bioma → elegir monstruo → consultar ficha → volver al mapa.

Si la base de datos está vacía, hay que cargar los datos de `monsters.json` mediante el endpoint `POST /api/monsters/seed` una sola vez en un entorno local de confianza. No expongas ese endpoint públicamente sin protección.
