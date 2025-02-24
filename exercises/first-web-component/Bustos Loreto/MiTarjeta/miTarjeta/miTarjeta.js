 
        class MiTarjeta extends HTMLElement {
            static get observedAttributes() {
                return ["titulo"];
            }

            constructor() {
                super();
                this.attachShadow({ mode: "open" });
                this.contador = 0;
                this.titulo = this.getAttribute("titulo") || "Tarjeta";
            }

            render() {
                this.shadowRoot.innerHTML = /* html */ `
                    <style>
                        @import "/miTarjeta/miTarjeta.css";
                    </style>
                    <div class="tarjeta">
                        <h2>${this.titulo}</h2>
                        <slot></slot>
                        <button id="boton">Intenta registrarte</button>
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
                this.render();
                this.boton = this.shadowRoot.querySelector("#boton");
                this.boton.addEventListener("click", () => this.incrementar());
            }

            incrementar() {
                this.contador++;
                this.boton.textContent = `Intentos de registro: ${this.contador}`;
            }
        }

        customElements.define("mi-tarjeta", MiTarjeta); 
