class MiContador extends HTMLElement {
  static get observedAttributes() {
    return ["count"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.count = parseInt(this.getAttribute("count")) || 0;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
        <style>
        @import "/mi-contador/mi-contador.css";
        </style>
        <div>
          <h3>Contador</h3>
          <p id="contador">${this.count}</p>
          <button id="incrementar">+</button>
          <button id="decrementar">-</button>
        </div>
      `;
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.buttonIncrementar = this.shadowRoot.getElementById("incrementar");
    this.buttonIncrementar.addEventListener("click", () => this.incrementar());

    this.buttonDecrementar = this.shadowRoot.getElementById("decrementar");
    this.buttonDecrementar.addEventListener("click", () => this.decrementar());
  }

  incrementar() {
    this.count++;
    this.shadowRoot.getElementById("contador").textContent = this.count;
  }

  decrementar() {
    this.count--;
    this.shadowRoot.getElementById("contador").textContent = this.count;
  }
}

customElements.define("mi-contador", MiContador);
