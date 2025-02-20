class CardRecipe extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('title') || 'Título';
        this.description = this.getAttribute('description') || 'Descripción';
        this.link = this.getAttribute('link') || '#';
        this.img = this.getAttribute('img') || './src/components/cardRecipe/img/receta1.jpg';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "./src/components/cardRecipe/cardRecipe.css";
            </style>
            <div class="receta-card">
                <img class="receta-img" src="${this.img}" alt="Imagen de receta">
                <h2 class="receta-title">${this.getAttribute('title')}</h2>
                <p class="receta-description">${this.getAttribute('description')}</p>
                <a href="${this.getAttribute('link')}" class="receta-button">Ver receta</a>
            </div>
        `;
    }
}

customElements.define('card-recipe', CardRecipe);