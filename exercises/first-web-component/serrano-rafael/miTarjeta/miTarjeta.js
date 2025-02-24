class MiTarjeta extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.count = 0;
    }

    static get observedAttributes() {
        return ['titulo'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'titulo' && oldValue !== newValue) {
            this.render();
        }
    }

    connectedCallback() { // Se ejecuta cuando el elemento es añadido al DOM
        this.render();
        this.shadowRoot.querySelector('button').addEventListener('click', () => { // Evento para incrementar el contador
            this.count++;
            this.shadowRoot.querySelector('#counter').textContent = this.count;
        });
    }

    render() { // Método para renderizar el componente
        this.shadowRoot.innerHTML = /*html*/ `
        <style>
            @import "/miTarjeta/miTarjeta.css";
        </style>
        <div class="card">
            <div class="title">${this.getAttribute('titulo') || 'Título predeterminado'}</div>
            <slot></slot>
            <span id="counter">${this.count}</span>
            <p>☝</p>
            <button>INCREMENTAR CONTADOR</button>
        </div>
        `;
    }
}

customElements.define('custom-card', MiTarjeta);