class MiTarjeta extends HTMLElement {
    constructor() {
      super();
      // Crea un Shadow DOM abierto para encapsular el contenido del componente.
      this.attachShadow({ mode: "open" });
      this.contador = 0;
    }
  
    // Especifica los atributos que el componente observará para detectar cambios.
    static get observedAttributes() {
      return ["titulo"];
    }
  
    // Este método se ejecuta cuando cambia un atributo observado, en este caso 'titulo'.
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "titulo") {
        this.render();
      }
    }
  
    // Este método se ejecuta cuando el componente se agrega al DOM.
    connectedCallback() {
      this.render();
      this.shadowRoot.querySelector("button").addEventListener("click", () => {
        this.contador++;
        this.shadowRoot.querySelector("#contador").textContent = this.contador;
      });
    }
  
    // Define la estructura HTML y los estilos del componente, actualizándolo cuando sea necesario.
    render() {
      this.shadowRoot.innerHTML = `
        <style>
            @import "/miTarjeta/miTarjeta.css";
        </style>
        <div class="tarjeta">
          <div class="titulo">${this.getAttribute("titulo") || "Título predeterminado"}</div>
          <slot></slot>
          <div class="contador">Contador: <span id="contador">${this.contador}</span></div>
          <button>Incrementar</button>
        </div>
      `;
    }
  }
  
  // Registra el componente con el nombre 'mi-tarjeta' para que pueda usarse en HTML.
  customElements.define("mi-tarjeta", MiTarjeta);
  