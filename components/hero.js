const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      font-weight: 500;
      font-size: 50px; /* Default font size */
    }

    @media (max-width: 1024px) {
      :host {
        font-size: 40px; /* Tablet font size */
      }
    }

    @media (max-width: 480px) {
      :host {
        font-size: 30px; /* Mobile font size */
      }
    }
  </style>
  <p>
    <slot></slot>
  </p>
`;

class HeroComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('hero-component', HeroComponent);
