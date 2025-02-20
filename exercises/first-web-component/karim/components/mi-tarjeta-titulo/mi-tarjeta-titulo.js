class MiTarjetaTitulo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["titulo"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "titulo") {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <link rel="stylesheet" href="./components/mi-tarjeta-titulo/mi-tarjeta-titulo.css">
      <div class="titulo">${this.getAttribute("titulo")}</div>
    `;
  }
}

customElements.define("mi-tarjeta-titulo", MiTarjetaTitulo);
