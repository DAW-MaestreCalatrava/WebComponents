class MiTarjeta extends HTMLElement {
    static get observedAttributes() {
        return ['title'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.count = 0;
        this.title = this.getAttribute('title') || 'Default title';
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title') {
            this.title = newValue;
        }
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
            <style>
                @import "./components/miTarjeta/miTarjeta.css";
            </style>
            <div class="mi-tarjeta">
                ${this.title}
            </div>
        `;
    }


}
customElements.define('mi-tarjeta', MiTarjeta);