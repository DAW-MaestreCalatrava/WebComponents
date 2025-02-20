class LikeButton extends HTMLElement {
    static get observedAttributes() {
        return ["color"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.count = 0;
        this.color = this.getAttribute("color") || "blue";
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "/like-button/like-button.css";
                button {
                    background-color: ${this.color};
                }
            </style>
            <button>❤️ 0</button>
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
        this.button.textContent = `❤️ ${this.count}`;
    }
}

customElements.define("like-button", LikeButton);