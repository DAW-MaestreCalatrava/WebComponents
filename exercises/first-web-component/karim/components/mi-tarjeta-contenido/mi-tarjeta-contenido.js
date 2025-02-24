class MiTarjetaContenido extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <link rel="stylesheet" href="./components/mi-tarjeta-contenido/mi-tarjeta-contenido.css">
      <div class="contenido">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("mi-tarjeta-contenido", MiTarjetaContenido);
