# Alberto - Web Component Project

This project implements custom web components using modern web technologies. It provides reusable UI components that can be integrated into any web application.

## Description

Alberto is a collection of web components built using native Web Components specifications. These components are framework-agnostic and can be used in any web project.

## Setup

To get started with this project, follow these steps:

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Development

To run the development server:

```bash
npm run dev
```

The development server will start on `http://localhost:1123`. The server features live-reload, automatically refreshing the browser when changes are detected.

## Project Structure

```
alberto/
├── index.html              # Main entry point
├── package.json            # Project dependencies and scripts
├── miTarjeta/             # Card web component
│   ├── miTarjeta.js       # Component implementation
│   └── index.html         # Component demo/testing
├── README.md              # Project documentation
└── node_modules/          # Installed dependencies
```

### Components

- **miTarjeta**: A custom card component that can be used to display content in a card format
```html
<mi-tarjeta></mi-tarjeta>
```

## Usage

Import and use the components in your HTML:

```html
<script type="module" src="./miTarjeta/miTarjeta.js"></script>
<mi-tarjeta></mi-tarjeta>
```

