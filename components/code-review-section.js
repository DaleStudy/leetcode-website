import { css, html } from "../html-css-utils.js";

class CodeReviewSection extends HTMLElement {
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
        margin: 0 27px 0;
        max-width: 1550px;

        @media only screen and (min-width: 768px) {
          row-gap: 50px;
          margin: 0 76px 0 77px;
        }

        @media only screen and (min-width: 1024px) {
          position: relative;
          flex-direction: row-reverse;
          width: 80%;
          height: 53vh;
          margin: 0;
        }
      }

      .hero {
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
          width: 40%;
        }
      }

      aside {
        width: 100%;

        @media only screen and (min-width: 1024px) {
          width: 60%;
        }
      }
    `;
    }
  

  createHtml() {
    return html`
      <section>
        <aside>
          <slot name="image"></slot>
        </aside>

        <div class="hero">
          <slot name="heading"></slot>
          <slot name="button"></slot>
        </div>
      </section>
    `;
  }
}

customElements.define("ds-code-review-section", CodeReviewSection);
