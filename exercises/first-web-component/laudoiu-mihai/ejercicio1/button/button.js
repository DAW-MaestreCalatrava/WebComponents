class ButtonComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.label = this.getAttribute('label') || 'Botón';
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('button').addEventListener('click', () => this.handleClick());
    }

    handleClick() {
        if (this.hasAttribute('onclick')) {
            this.getAttribute('onclick')();
        }
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "/button/button.css";
            </style>
            <button>${this.label}</button>
        `;
    }
}

customElements.define('button-component', ButtonComponent);