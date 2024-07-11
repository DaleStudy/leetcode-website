import { html, css } from "../html-css-utils.js";

class ParticipantReviewsSection extends HTMLElement {
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
        max-width: 1550px;
        margin: 0 27px;
        padding: 100px 0;

        @media only screen and (min-width: 1024px) {
          padding: 149px 0;
        }
      }
    `;
  }

  createHtml() {
    return html`
      <section>
        <slot></slot>
      </section>
    `;
  }
}

customElements.define(
  "ds-participant-reviews-section",
  ParticipantReviewsSection
);
