class MiTarjeta extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.contador = 0;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
            <div class="tarjeta">
                <h2>${this.getAttribute('titulo') || 'Título por defecto'}</h2>
                <div class="contenido">
                    <slot></slot>
                </div>
                <button>${this.getAttribute('buttonText') || 'contador'}: ${this.contador}</button>
            </div>

            <style>
                @import "/my-card/my-card.css";
            </style>
        `;

        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.contador++;
            this.render();
        });
    }

    static get observedAttributes() {
        return ['titulo'];
    }

    attributeChangedCallback() {
        this.render();
    }
}

customElements.define('mi-tarjeta', MiTarjeta);