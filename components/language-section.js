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
          width: 37%;
        }
      }

      .gap {
        @media only screen and (min-width: 1024px) {
          justify-content: center;
          width: 16%;
        }
      }

      aside {
        width: 100%;

        @media only screen and (min-width: 1024px) {
          width: 47%;
        }
      }

      #mobile-image {
        display: block;

        @media only screen and (min-width: 768px) {
          display: none;
        }
      }

      #tablet-image {
        display: none;

        @media only screen and (min-width: 768px) {
          display: block;
        }

        @media only screen and (min-width: 1024px) {
          display: none;
        }
      }

      #desktop-image {
        display: none;

        @media only screen and (min-width: 1024px) {
          display: block;
        }
      }
    `;
  }

  createHtml() {
    return html`
      <section>
        <aside>
          <ds-image
            id="mobile-image"
            src="images/vertical-language.png"
            alt="languages"
            width="100%"
            height="auto"
          ></ds-image>
          <ds-image
            id="tablet-image"
            src="images/horizontal-language.png"
            alt="languages"
            width="100%"
            height="auto"
          ></ds-image>
          <ds-image
            id="desktop-image"
            src="images/vertical-language.png"
            alt="languages"
            width="100%"
            height="auto"
          ></ds-image>
        </aside>

        <div class="gap"></div>

        <div class="hero">
          <ds-hero> 지역에 관계없이 다양한 언어로 참여할 수 있어요. </ds-hero>
          <ds-button-link size="big" variant="ghost" href="#steps-section">
            참여방법 안내
          </ds-button-link>
        </div>
      </section>
    `;
  }
}

customElements.define("ds-language-section", LanguageSection);
