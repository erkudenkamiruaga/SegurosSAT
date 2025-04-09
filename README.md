# SegurosSAT - Instrucciones de Instalación y Ejecución

Bienvenido/a al proyecto **SegurosSAT**, una aplicación web para reportar incidencias relacionadas con roturas (vitrocerámicas, cristales, espejos y mamparas). Este documento te guiará paso a paso para clonar, configurar y ejecutar el proyecto en tu máquina local.

## Requisitos previos

Antes de empezar, asegúrate de tener instalado lo siguiente en tu máquina:

1. **Node.js y npm**:
   - Descarga e instala Node.js desde [nodejs.org](https://nodejs.org/). Recomendamos usar la versión **LTS** (por ejemplo, v20.x.x).
   - Durante la instalación, asegúrate de marcar la opción "Add to PATH" para que `node` y `npm` sean reconocidos en la terminal.
   - Verifica la instalación abriendo una terminal y ejecutando:
     ```bash
     node -v
     npm -v
     ```
     Deberías ver las versiones instaladas (por ejemplo, `v20.12.0` para Node.js y `10.5.0` para npm).

## Pasos para ejecutar el proyecto

### 1. Accede a la carpeta del proyecto
1. Abre una terminal (en Windows puedes usar CMD, PowerShell o Git Bash; en macOS/Linux usa la terminal por defecto).
2. Navega a la carpeta donde quieres guardar el proyecto. Por ejemplo:
   ```bash
   cd ~/Proyectos
   ```
3. Entra a la carpeta del proyecto:
   ```bash
   cd SegurosSAT
   ```

### 2. Instala las dependencias del backend
1. Navega a la carpeta `backend/`:
   ```bash
   cd backend
   ```
2. Instala las dependencias listadas en `package.json` (Express, Nodemailer, CORS):
   ```bash
   npm install
   ```
   - Esto creará la carpeta `node_modules/` y el archivo `package-lock.json`.

### 3. Inicia el servidor
1. Desde la carpeta `backend/`, inicia el servidor:
   ```bash
   node server.js
   ```
   - Deberías ver un mensaje como:
     ```
     Servidor corriendo en http://localhost:3000/bienvenido.html
     ```
   - Si hay un error (por ejemplo, "Cannot find module 'express'"), verifica que las dependencias estén instaladas correctamente (`npm install express`).
   - Si el puerto 3000 está ocupado (`EADDRINUSE: address already in use`), cambia el puerto en `server.js` (por ejemplo, `const port = 3001`) y reinicia el servidor.

### 4. Accede al proyecto en el navegador
1. Abre tu navegador (Chrome, Firefox, etc.).
2. Ve a:
   ```
   http://localhost:3000/bienvenido.html
   ```
   - Esto debería cargar la página de inicio (`bienvenido.html`).
