class MiSorpresa extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.mensaje = "¡Sorpresa!";
    this.cambiarMensaje = this.cambiarMensaje.bind(this);
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector("button").addEventListener("click", this.cambiarMensaje);
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("button").removeEventListener("click", this.cambiarMensaje);
  }

  cambiarMensaje() {
    this.mensaje = this.mensaje === "¡Sorpresa!" ? "¡Otra Sorpresa!" : "¡Sorpresa!";
    this.shadowRoot.querySelector(".mensaje").textContent = this.mensaje;
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <link rel="stylesheet" href="./components/mi-sorpresa/mi-sorpresa.css">
      <div class="sorpresa">
        <div class="mensaje">${this.mensaje}</div>
        <button>Cambiar Mensaje</button>
      </div>
    `;
  }
}

customElements.define("mi-sorpresa", MiSorpresa);
