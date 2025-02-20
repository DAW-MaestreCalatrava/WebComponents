class MiTarjeta extends HTMLElement {
    static get observedAttributes() {
        return ["color"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // Estado inicial
        this.count = 0;
        this.color = this.getAttribute("color") || "green";
    }

    render() {
        // Crear el template del botón
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                button {
                    background-color: ${this.color};
                    color: white;
                    border: none;
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                }
            </style>

            <button>
                ❤️ 0
                <slot></slot>
            </button>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.button = this.shadowRoot.querySelector("button");
        this.button.addEventListener("click", () => this.increment());
    }

    increment() {
        this.count++;
        this.button.textContent = `❤️ ${this.count}`;
    }
}

// Registrar el componente
customElements.define("mi-tarjeta", MiTarjeta);