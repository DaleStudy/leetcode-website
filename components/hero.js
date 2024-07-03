import { css, html } from "../html-css-utils.js";

class Hero extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  createCss() {
    return css`
        :host {
          font-weight: 500;
        }

        h2 {
          font-weight: inherit;
          font-size: 30px;
          word-break: keep-all;
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
    `;
  }

  createHtml() {
    return html`
      <h2>
        <slot></slot>
      </h2>
    `;
  }
}

customElements.define('ds-hero', Hero);
