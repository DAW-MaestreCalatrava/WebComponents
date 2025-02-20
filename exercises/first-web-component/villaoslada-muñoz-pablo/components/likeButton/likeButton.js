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
        this.button.textContent = `${this.count} 👍`;
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                .like-button {
                    font-size: 1rem;
                    padding: 5px 10px;
                    background-color: ${this.color};
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>
            <button class="like-button">${this.count} 👍</button>
        `;
    }
}

customElements.define('like-button', LikeButton);