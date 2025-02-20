class CustomHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.menuItems = [];
  }

  set items(data) {
    this.menuItems = data;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>
        header {
          display: flex;
          justify-content: space-around;
          background: #333;
          padding: 10px;
        }
        a {
          color: white;
          text-decoration: none;
          padding: 8px 16px;
        }
        a:hover {
          background: #555;
          border-radius: 4px;
        }
      </style>
      <header>
        ${this.menuItems
          .map((item) => `<a href="${item.link}" target="_blank">${item.texto}</a>`)
          .join(" ")}
      </header>
    `;
  }
}

customElements.define("custom-header", CustomHeader);