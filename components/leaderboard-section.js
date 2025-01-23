import { LEADERBOARD_URL } from "../data.js";
import { css, html } from "../html-css-utils.js";

class LeaderboardSection extends HTMLElement {
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
        background-color: var(--bg-100);
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
          width: 70%;
        }
      }
    `;
  }

  createHtml() {
    return html`
      <section>
        <aside>
          <ds-image
            src="images/leaderboard.png"
            alt="languages"
            width="100%"
            height="auto"
          ></ds-image>
        </aside>

        <div class="gap"></div>

        <div class="hero">
          <ds-hero> 성장의 발자취를 리더보드에서 확인할 수 있어요 </ds-hero>
          <ds-button-link size="big" variant="ghost" href="${LEADERBOARD_URL}">
            리더보드 보기
          </ds-button-link>
        </div>
      </section>
    `;
  }
}

customElements.define("ds-leaderboard-section", LeaderboardSection);
