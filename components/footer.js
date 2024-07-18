import { css, html } from "../html-css-utils.js";

class Footer extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  createCss() {
    return css`
      :host {
        display: block;
        height: 400px;
        color: var(--bg-100);
        background-color: var(--text-900);
        padding: 80px 27px;

        @media only screen and (min-width: 768px) {
          padding: 180px 151px 100px 144px;
        }

        @media only screen and (min-width: 1550px) {
          display: flex;
          justify-content: center;
        }
      }

      footer {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1550px;

        @media only screen and (min-width: 1550px) {
          flex: 1;
        }
      }

      section {
        display: flex;
        flex-direction: column;
        row-gap: 40px;

        margin-left: -15px;

        @media only screen and (min-width: 768px) {
          flex-direction: row;
          justify-content: space-between;
        }
      }

      p {
        border-top: 1px solid rgba(253, 253, 255, 0.75);
        font-size: 14px;
        color: var(--bg-100);
        opacity: 0.75;

        margin-top: 26px;
        padding-top: 20px;

        @media only screen and (min-width: 768px) {
          margin-top: 50px;
          padding-top: 20px;
        }

        @media only screen and (min-width: 1024px) {
          padding-top: 48px;
        }
      }
    `;
  }

  createHtml() {
    return html`<footer>
      <section>
        <slot name="footer-link-list"></slot>
        <slot name="icon-link-list"></slot>
      </section>

      <p>© 2024 Dale Study. All rights reserved.</p>
    </footer>`;
  }
}

customElements.define("ds-footer", Footer);
