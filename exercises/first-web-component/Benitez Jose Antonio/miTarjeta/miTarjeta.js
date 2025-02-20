class MiTarjeta extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.titulo = this.getAttribute('titulo') || 'Título';
        this.contador = 0;
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('button').addEventListener('click', () => this.incrementarContador());
    }

    incrementarContador() {
        this.contador++;
        this.shadowRoot.querySelector('#contador').textContent = `Contador: ${this.contador}`;
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "/miTarjeta/miTarjeta.css";
            </style>
            <div class="card">
                <div class="card-header">
                    <h2>${this.titulo}</h2>
                </div>
                <div class="card-body">
                    <p id="contador">Contador: ${this.contador}</p>
                    <button>Incrementar</button>
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('mi-tarjeta', MiTarjeta);