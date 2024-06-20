const html = `
  <style>
    :host {
      display: block;
      font-weight: 500;
      font-size: 30px;
    }

    h2 {
      font-weight: inherit;
      font-size: 30px; /* Default font-size for h2 */
      display: block; /* Ensure block display */
    }

    @media only screen and (min-width: 768px) {
      h2 {
        font-size: 40px;
      }
    }

    @media only screen and (min-width: 1024px) {
      h2 {
        font-size: 50px;
      }
    }
  </style>
  <h2>
    <slot></slot>
  </h2>
`;

class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('ds-hero', Hero);
