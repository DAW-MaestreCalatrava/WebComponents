import '../mi-tarjeta-titulo/mi-tarjeta-titulo.js';
import '../mi-tarjeta-contenido/mi-tarjeta-contenido.js';

class MiTarjeta extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.contador = 0;
    this.incrementarContador = this.incrementarContador.bind(this);
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
    this.shadowRoot.querySelector("button").addEventListener("click", this.incrementarContador);
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("button").removeEventListener("click", this.incrementarContador);
  }

  incrementarContador() {
    this.contador++;
    this.shadowRoot.querySelector(".contador").textContent = `Contador: ${this.contador}`;
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <link rel="stylesheet" href="./components/mi-tarjeta/mi-tarjeta.css">
      <div class="tarjeta">
        <mi-tarjeta-titulo titulo="${this.getAttribute("titulo")}"></mi-tarjeta-titulo>
        <mi-tarjeta-contenido>
          <slot></slot>
        </mi-tarjeta-contenido>
        <div class="contador">Contador: ${this.contador}</div>
        <button>Incrementar</button>
      </div>
    `;
  }
}

customElements.define("mi-tarjeta", MiTarjeta);
