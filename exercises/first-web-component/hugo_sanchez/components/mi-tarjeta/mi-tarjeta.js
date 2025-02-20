class MiTarjeta extends HTMLElement {
    static get observedAttributes() {
        return ["titulo"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.favorito = false;
        this.titulo = this.getAttribute("titulo") || "Título por defecto";

        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
        <style>
            @import "/components/mi-tarjeta/mi-tarjeta.css";
        </style>
        <div class="tarjeta">
            <h3>${this.titulo}</h3>
            <div class="contenido">
                <slot></slot>
            </div>
            <button id="favButton">Añadir a favoritos</button>
        </div>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "titulo") {
            this.titulo = newValue;
            this.render();
        }
    }

    connectedCallback() {
        this.favButton = this.shadowRoot.querySelector("#favButton");
        this.favButton.addEventListener("click", () => this.toggleFavorito());
    }

    toggleFavorito() {
        this.favorito = !this.favorito;
        this.favButton.textContent = this.favorito ? "En favoritos" : "Añadir a favoritos";
        this.favButton.classList.toggle("favorito", this.favorito);
    }
}

// Registrar el componente
customElements.define("mi-tarjeta", MiTarjeta);
