 
        class MiComponente extends HTMLElement {
            static get observedAttributes() {
                return ["titulo"];
            }

            constructor() {
                super();
                this.attachShadow({ mode: "open" });
                this.contador = 0;
                this.titulo = this.getAttribute("titulo") || "";
            }

            render() {
                this.shadowRoot.innerHTML = /* html */ `
                    <style>
                        @import "/webComponent/webComponent.css";
                    </style>
                    <div class="tarjeta">
                        <h2>${this.titulo}</h2>
                        <slot></slot>
                        <button id="boton">✌️ Pulsame</button>
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
            }

            incrementar() {
                this.contador++; 
            }
        }

        customElements.define("mi-boton", MiComponente); 
