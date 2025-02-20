class MiTarjeta extends HTMLElement {
    static get obserbedAttributes() {
        return ["titulo"];
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.cont = 0;
        this.titulo = this.getAttribute("titulo") || "Placeholder";
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>
            @import "./components/my-component-1/my-component-1.css";
        </style>
        <div>${this.titulo}<br>
            <slot></slot><br>
            <button>Nº de clicks ${this.cont}</button>
        </div>`;
    }
    attributeChangedCallback() {
        this.render();
    }
    connectedCallback() {
        this.button = this.shadowRoot.querySelector("button");
        this.button.addEventListener("click", () => this.increment());
    }
    increment() {
        this.cont++;
        this.button.textContent = `Nº de clicks ${this.cont}`;
    }
}
customElements.define("mi-tarjeta", MiTarjeta);