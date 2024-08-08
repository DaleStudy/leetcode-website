import { css, html } from "../html-css-utils.js";
import { DISCORD_URL } from "../data.js";

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
        background-color: var(--bg-200);
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
          <ds-image
            src="images/review.png"
            alt="review"
            width="100%"
            height="auto"
          ></ds-image>
        </aside>

        <div class="hero">
          <ds-hero> 코드리뷰를 통해 새로운 관점을 배울 수 있어요 </ds-hero>
          <ds-button-link size="big" variant="primary" href="${DISCORD_URL}">
            디스코드 참여하기
          </ds-button-link>
        </div>
      </section>
    `;
  }
}

customElements.define("ds-code-review-section", CodeReviewSection);
