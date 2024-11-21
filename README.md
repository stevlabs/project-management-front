# Web de Gestión de Proyectos

Una aplicación web para la gestión de proyectos, documentos, tareas, ...etc.

## Características

- **Gestión de proyectos:** Crear, eliminar y gestionar proyectos.
- **Gestión de tareas:** Crear, asignar y priorizar tareas. (En progreso)
- **Gestión de documentos:** Subir, eliminar y descargar archivos.
- **Roles y permisos:** Funcionalidades ajustadas según el rol del usuario (En progreso)

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/react-gestion-proyectos.git
   cd react-gestion-proyectos
   ```

2. **Instala las dependencias con Yarn:**
   ```bash
   yarn install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo .env y agrega:
   ```bash
   VITE_URL_BASE=http://localhost:4000/api/v1 (EJEMPLO)
   VITE_URL_BASE=URL_DEL_BACK
   ```

4. **Inicia la aplicación:**
   ```bash
    yarn dev
    ```