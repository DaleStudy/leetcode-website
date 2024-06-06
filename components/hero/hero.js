const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="./components/hero/hero.css">
  <p class="hero-description">
    <slot></slot>
  </p>
`;

class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('hero-component', Hero);
