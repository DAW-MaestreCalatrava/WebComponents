# Organización de Web Components

Este proyecto es un ejemplo de como poder organizar los Web Components en un proyecto más grande.

## Estructura de carpetas

La estructura de carpetas para nuestros Web Components será:

```
.
├── components
│   ├── my-component-1
│   ├── ├── my-component-1.js
│   ├── ├── my-component-1.css
│   ├── ├── components
│   ├── ├── ├── my-component-1-1
│   ├── ├── ├── ├── my-component-1-1.js
│   ├── ├── ├── ├── my-component-1-1.css
│   ├── ├── └── my-component-1-n
│   ├── my-component-2
│   ├── ...
│   └── my-component-n
└── global.css
└── main.js
└── index.html
```

## Debugging

1. Es necesario instalar todas las dependencias del proyecto con `npm install`.

2. Para arrancar el proyecto usaremos el comando `npm run dev`

3. Tu proyecto se ha arrancado en la url: `http://localhost:6886`

## Git team work

![Work as a team](https://www.linkedin.com/feed/update/urn:li:activity:7297547140006895617/)