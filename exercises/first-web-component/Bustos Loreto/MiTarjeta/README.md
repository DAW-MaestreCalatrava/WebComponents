# Proyecto Web Components

Este proyecto contiene Web Components personalizados para una tarjeta (`<mi-tarjeta>`) y un botón (`<mi-boton>`). Se ejecuta utilizando un servidor local con `npm` en Visual Studio Code.

## Requisitos

- Node.js instalado (descargar desde [aquí](https://nodejs.org/))
- Visual Studio Code instalado

## Instalación y ejecución

1. **Clonar o descargar el proyecto**

   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. **Inicializar un proyecto Node.js**

   ```sh
   npm init -y
   ```

3. **Instalar un servidor de desarrollo (opcional)**  
   Se recomienda usar `lite-server` o `http-server` para servir el proyecto.

   ```sh
   npm install --save-dev lite-server
   ```

4. **Configurar el `package.json`**  
   Edita `package.json` y agrega este script en la sección `scripts`:

   ```json
   "scripts": {
     "start": "lite-server"
   }
   ```

5. **Ejecutar el proyecto**

   ```sh
   npm start
   ```

6. **Abrir en el navegador**  
   Una vez iniciado el servidor, abre la URL que aparece en la terminal (por defecto, `http://localhost:3000`).

## Estructura del Proyecto

```
/NOMBRE_DEL_PROYECTO
│── index.html        # Página principal con Web Components
│── main.js           # Script de los componentes
│── package.json      # Configuración de npm
│── /img              # Carpeta de imágenes
└── /node_modules     # Dependencias instaladas
```

## Notas

- Asegúrate de que el archivo `main.js` contenga la definición de los Web Components.
- Para cambios en los archivos, recarga el navegador o usa `npm run start`.

¡Listo! Ahora puedes ejecutar tu proyecto en Visual Studio Code con `npm`. 🚀

