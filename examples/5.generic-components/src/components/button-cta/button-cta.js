class ButtonCta extends HTMLElement {
    static get observedAttributes() {
        return ["label", "type"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.label = this.getAttribute("label") || "label";
        this.type = this.getAttribute("type") || "button";

        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "src/components/button-cta/button-cta.css";
            </style>
            <button type="${this.type}">
                ${this.label}
            </button>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("button-cta", ButtonCta);