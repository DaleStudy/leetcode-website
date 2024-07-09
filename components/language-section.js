import { css, html } from "../html-css-utils.js";

class LanguageSection extends HTMLElement {
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
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      section {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        margin: 0px 27px 0px;
        max-width: 1550px;

        @media only screen and (min-width: 768px) {
          row-gap: 50px;
          margin: 0px 75px 0px 76px;
        }

        @media only screen and (min-width: 1024px) {
          position: relative;
          flex-direction: row;
          width: 80%;
          height: 52vh;
          margin: 0;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        row-gap: 20px;
        width: 65%;

        @media only screen and (min-width: 768px) {
          row-gap: 30px;
          width: 40%;
        }

        @media only screen and (min-width: 1024px) {
          justify-content: center;
          row-gap: 40px;
          width: 37%;
        }
      }

      aside {
        width: 100%;

        @media only screen and (min-width: 1024px) {
          width: 63%;
        }
      }

      ::slotted([slot="mobile-image"]) {
        display: block;
      }

      ::slotted([slot="tablet-image"]) {
        display: none;
      }

      ::slotted([slot="desktop-image"]) {
        display: none;
      }

      @media only screen and (min-width: 768px) {
        ::slotted([slot="mobile-image"]) {
          display: none;
        }

        ::slotted([slot="tablet-image"]) {
          display: block;
        }
      }

      @media only screen and (min-width: 1024px) {
        ::slotted([slot="tablet-image"]) {
          display: none;
        }

        ::slotted([slot="desktop-image"]) {
          display: block;
          width: auto;
          height: 100%;
          
        }
      }
    `;
  }

  createHtml() {
    return html`
      <section>
        <aside>
          <slot name="tablet-image"></slot>
          <slot name="desktop-image"></slot>
          <slot name="mobile-image"></slot>
        </aside>

        <div>
          <slot name="heading"></slot>
          <slot name="button"></slot>
        </div>
      </section>
    `;
  }
}

customElements.define("ds-language-section", LanguageSection);
