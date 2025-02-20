class FireworksText extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.count = 0;
    }
  
    connectedCallback() {
      this.render();
      this.animateText();
      this.addClickListener();
    }
  
    render() {
      
      const theme = this.getAttribute('theme') || 'warm';
      const warmColors = `
        from { text-shadow: 0 0 5px #ff0, 0 0 10px #ff0, 0 0 15px #ff0; }
        to { text-shadow: 0 0 10px #ff4500, 0 0 20px #ff4500, 0 0 30px #ff4500; }
      `;
      const coolColors = `
        from { text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff; }
        to { text-shadow: 0 0 10px #0045ff, 0 0 20px #0045ff, 0 0 30px #0045ff; }
      `;
      const greenColors = `
        from { text-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 15px #0f0; }
        to { text-shadow: 0 0 10px #00ff77, 0 0 20px #0045ff, 0 0 30px #3f7208; }
      `;
  
      const colors = theme === 'warm' ? warmColors : theme === 'cool' ? coolColors : greenColors;
  
      this.shadowRoot.innerHTML = `
        <style>
          .text, .counter {
            font-family: sans-serif;
            font-size: 24px;
            font-weight: bold;
            display: inline-block;
            position: relative;
            color: white;
            text-shadow: 0 0 5px #ff0, 0 0 10px #ff0, 0 0 15px #ff0;
            animation: glow 1.5s infinite alternate;
            cursor: pointer;
          }
  
          @keyframes glow {
            ${colors}
          }
        </style>
        <span class="text"></span> <span class="counter">0</span>
      `;
    }
  
    animateText() {
      const text = this.getAttribute('text') || '¡Boom!';
      const span = this.shadowRoot.querySelector('.text');
      span.textContent = text;
  
      setTimeout(() => {
        span.style.animation = 'none';
        span.style.opacity = '0';
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.animation = 'glow 1.5s infinite alternate';
        }, 500);
      }, 2000);
    }
  
    addClickListener() {
      this.shadowRoot.querySelector('.text').addEventListener('click', () => {
        this.count++;
        this.shadowRoot.querySelector('.counter').textContent = this.count;
      });
    }
  }
  
  customElements.define('fireworks-text', FireworksText);
  