class Button extends HTMLElement {
    static get observedAttributes() {
        return ["label", "link"];
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.label = this.getAttribute("label") || "label";
        this.link = this.getAttribute("link") || "/";
        console.log({loc: window.location.pathname, link: this.link})
        this.isActive = this.link === window.location.pathname;
        this.render();
    }

    
    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                a {
                    color: #000;
                    border: none;
                    padding: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    background-color: transparent;
                    text-decoration: none;

                    font-family: "Open Sans";
                    font-size: 16px;
                    line-height: 28px;
                }

                a:hover {
                    background-color: rgb(240, 240, 240);
                }

                .active {
                    color: #fff;
                    background-color: #080808;
                    border-radius: 15px 0px 15px 0px;
                }

                .active:hover {
                    background-color: #080808;
                    opacity: 0.8;
                }
            </style>
            <a class="${this.isActive && 'active'}" href="${this.link}">
                ${this.label}
            </a>
        `;
    }
}

customElements.define("my-button", Button);