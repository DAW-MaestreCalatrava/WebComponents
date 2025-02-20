class LikeButton extends HTMLElement {

    static get observedAttributes() {
        return ['color'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.count = 0;
        this.color = this.getAttribute('color') || 'blue';

        this.render();
    }

    // Función predefinida de los Web Components

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'color') {
            this.color = newValue;
        }

        this.render();
    }

    connectedCallback() {
        this.button = this.shadowRoot.querySelector('button');
        this.button.addEventListener('click', () => this.increment());
    }

    increment() {
        this.count++;
        this.button.innerHTML = /* html */ `${this.count} <slot></slot>`;
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import './components/like-button/style.css';

                button {
                    background-color: ${this.color};
                }
            </style>
            <button>${this.count} <slot></slot></button>
        `;
    }
}

customElements.define('like-button', LikeButton);