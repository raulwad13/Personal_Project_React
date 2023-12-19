# Monster Hunter Maps

![image](https://github.com/raulwad13/Personal_Project_React/assets/145336326/a9bf2fcc-c8b9-44ff-9d02-4994d9920d0e)

Este proyecto es el trabajo final del bootcamp de Desarrollo Web Fullstack creado por Raul. La aplicación es una plataforma fullstack con un backend construido en Express y MongoDB para la gestión de elementos relacionados con los monstruos del videojuego Monster Hunter. El frontend está desarrollado en React utilizando Vite como entorno de desarrollo.

## Descripción

La aplicación permite filtrar y organizar monstruos del juego Monster Hunter según su bioma. Los usuarios pueden realizar operaciones como la creación, edición, eliminación y visualización de los monstruos.

## Tecnologías Utilizadas

- **Backend:**
  - Express: Framework de servidor web para Node.js que facilita la creación de API REST.
  - MongoDB: Base de datos NoSQL utilizada para almacenar la información de los monstruos.

- **Frontend:**
  - React: Biblioteca de JavaScript para construir interfaces de usuario.
  - Vite: Entorno de desarrollo rápido para aplicaciones web React.

## Configuración del Proyecto

### Requisitos Previos

Asegúrese de tener instalados los siguientes elementos:

- Node.js y npm
- MongoDB

### Pasos de Configuración

1. **Clonar el Repositorio:**

    ```bash
    git clone https://github.com/raulwad13/Personal_Project_React.git
       ```

2. **Configuración del Backend:**

    ```bash
    cd ..
    npm install
    ```

    Configurar las variables de entorno en el archivo `.env`:

    ```env
    PORT=3001
    MONGODB_URI=mongodb://localhost:27017/monsters
    ```

3. **Configuración del Frontend:**

    ```bash
    cd client
    npm install
    ```

    Configurar las variables de entorno en el archivo `.env`:

    ```env
    REACT_APP_API_URL=http://localhost:3001/api
    ```

4. **Iniciar la Aplicación:**

    - Iniciar el backend:

        ```bash
        cd ..
        npm start
        ```

    - Iniciar el frontend:

        ```bash
        cd client
        npm start
        ```

    La aplicación estará disponible en `http://localhost:3000`.

## Funcionalidades Principales

1. **Filtrado por Bioma:**
   - Los usuarios pueden ver una lista de biomas y filtrar los monstruos según su hábitat.

2. **Creación de Monstruos:**
   - A través de un formulario, los usuarios pueden agregar nuevos monstruos al sistema, especificando detalles como nombre, tipo, y bioma.

3. **Edición y Actualización:**
   - La aplicación permite a los usuarios editar y actualizar la información de los monstruos existentes.

4. **Eliminación de Monstruos:**
   - Se proporciona una función para eliminar monstruos de la base de datos.
   - 
+Estos tres últimos puntos por ahora desde Back exclusivamente
## Contribuciones

¡Las contribuciones son bienvenidas! Si desea mejorar esta aplicación, abra un problema o envíe una solicitud de extracción.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
