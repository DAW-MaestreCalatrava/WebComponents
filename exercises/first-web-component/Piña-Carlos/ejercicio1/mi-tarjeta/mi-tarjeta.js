class MiTarjeta extends HTMLElement {
  static get observedAttributes() {
    return ["titulo", "color"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.count = 0;
    this.titulo = this.getAttribute("titulo") || "Título por defecto";
    this.color = this.getAttribute("color") || "orange";
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "/mi-tarjeta/mi-tarjeta.css";
                button {
                    background-color: ${this.color};
                }
            </style>
              <div>
              <h3>${this.titulo}</h3>
              <button>
                <slot></slot> ${this.count}
              </button>
            </div>
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
    this.button.innerHTML = `<slot></slot> ${this.count}`;
  }
}

customElements.define("mi-tarjeta", MiTarjeta);
