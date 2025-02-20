# Web Components - Benitez Jose Antonio

Este proyecto contiene ejemplos de Web Components desarrollados por Benitez Jose Antonio.

## Estructura de carpetas

La estructura de carpetas para nuestros Web Components es la siguiente:

```
.
├── cardRecipe
│   ├── cardRecipe.js
│   ├── cardRecipe.css
├── miTarjeta
│   ├── miTarjeta.js
│   ├── miTarjeta.css
├── index.html
├── main.js
└── README.md
```

## Descripción de los componentes

### `<mi-tarjeta>`

Este componente muestra una tarjeta con un título, un contador que se incrementa al hacer clic en un botón y un slot para contenido personalizado.

#### Atributos

- `titulo`: Define el título de la tarjeta.

#### Ejemplo de uso

```html
<mi-tarjeta titulo="Hola Mundo">
    <p>Este es un elemento &lt;p&gt;</p>
</mi-tarjeta>
```

### `<card-recipe>`

Este componente muestra una tarjeta de receta con una imagen, un título, una descripción y un enlace.

#### Atributos

- `title`: Define el título de la receta.
- `description`: Define la descripción de la receta.
- `img`: Define la URL de la imagen de la receta.
- `link`: Define el enlace a la receta completa.

#### Ejemplo de uso

```html
<card-recipe title="Lomo con salsa" description="Una breve descripcion de la receta" img="ruta/a/la/imagen.jpg" link="#"></card-recipe>
```

## Debugging

1. Es necesario instalar todas las dependencias del proyecto con `npm install`.

2. Para arrancar el proyecto usaremos el comando `npm run dev`.

3. Tu proyecto se ha arrancado en la url: `http://localhost:6886`.
