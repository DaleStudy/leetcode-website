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
      section {
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

      .inner-container {
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        /* NOTE: Requires accurate policy settings */
        margin: 0 7.5%;
      }

      @media only screen and (min-width: 768px) {
        /* NOTE: Requires accurate policy settings */
        .inner-container {
          row-gap: 50px;
          margin: 0 9%;
        }
      }

      @media only screen and (min-width: 1024px) {
        .inner-container {
          position: relative;
          flex-direction: row-reverse;
          row-gap: unset;
          /* NOTE: Requires accurate policy settings */
          margin: 0;
          width: 80%;
        }
      }

      article {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        /* NOTE: Requires accurate policy settings */
        row-gap: -4.9px;

        width: 70%;
      }

      @media only screen and (min-width: 768px) {
        article {
          /* NOTE: Requires accurate policy settings */
          row-gap: -3.2px;
        }
      }

      @media only screen and (min-width: 1024px) {
        article {
          row-gap: unset;
          width: 40%;
        }
      }

      @media only screen and (min-width: 1024px) {
        aside {
          width: 60%;
        }
      }
    `;
  }

  createHtml() {
    return html`
      <section>
        <div class="inner-container">
          <aside>
            <slot name="image"></slot>
          </aside>

          <article>
            <slot name="heading"></slot>
            <slot name="button"></slot>
          </article>
        </div>
      </section>
    `;
  }
}

customElements.define("ds-intro-section", IntroSection);
