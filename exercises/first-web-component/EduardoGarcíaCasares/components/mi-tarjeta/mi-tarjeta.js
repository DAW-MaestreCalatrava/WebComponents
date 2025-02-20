class MiTarjeta extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Estado inicial
        this.contador = 0;
        this.titulo = this.getAttribute('titulo') || "Título por defecto";
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector("#btn-aumentar").addEventListener('click', () => this.incrementarContador());
    }

    incrementarContador() {
        this.contador++;
        this.shadowRoot.querySelector("#contador").textContent = this.contador;
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
        <link rel="stylesheet" href="/components/mi-tarjeta/mi-tarjeta.css">
            <div class="tarjeta">
                <h2>${this.titulo}</h2>
                <slot></slot>  <!-- Contenido dinámico -->
                <p>Contador: <span id="contador">0</span></p>
                <button id="btn-aumentar">Aumentar</button>
            </div>
        `;
    }
}

// Registrar el Web Component
customElements.define('mi-tarjeta', MiTarjeta);
