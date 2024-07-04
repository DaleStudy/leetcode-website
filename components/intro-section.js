import { css, html } from "../html-css-utils.js";

class IntroSection extends HTMLElement {
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
        background: linear-gradient(
            0deg,
            rgba(251, 250, 255, 0) -10%,
            rgba(251, 250, 255, 1) 25%
          ),
          linear-gradient(
            90deg,
            rgba(36, 234, 202, 0.8) 0%,
            rgba(132, 109, 233, 0.8) 100%
          );
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
          height: 40vh;
          margin: 0;
        }
      }

      article {
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

        <article>
          <slot name="heading"></slot>
          <slot name="button"></slot>
        </article>
      </section>
    `;
  }
}

customElements.define("ds-intro-section", IntroSection);
