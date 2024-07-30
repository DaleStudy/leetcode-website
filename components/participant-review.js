import { css, html } from "../html-css-utils.js";

class BaseParticipantReviewElement extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  validateAttributes(requiredAttributes) {
    requiredAttributes.forEach((attr) => {
      if (!this.hasAttribute(attr)) {
        throw new Error(`The "${attr}" attribute is required.`);
      }
    });
  }
}

class ParticipantReviewList extends BaseParticipantReviewElement {
  createCss() {
    return css`
      .participant-review-list {
        width: 100%;
        display: grid;
        grid-template-columns: minmax(306px, 1fr);
        gap: 10px;
        place-content: center;
        place-items: stretch;
        margin-top: 20px;

        @media only screen and (min-width: 768px) {
          grid-template-columns: repeat(2, minmax(306px, 1fr));
          margin-top: 30px;
        }

        @media only screen and (min-width: 1024px) {
          gap: 10px 9px;
          margin-top: 40px;
        }
      }
    `;
  }

  createHtml() {
    return html`
      <div class="participant-review-list">
        <slot></slot>
      </div>
    `;
  }
}

class ParticipantReview extends BaseParticipantReviewElement {
  constructor() {
    super();
    this.validateAttributes(["author-img-src", "content", "author"]);
  }

  createCss() {
    return css`
      article {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        background-color: var(--bg-300);
        color: var(--text-900);
        padding: 39px 20px;

        @media only screen and (min-width: 768px) {
          padding: 37px 20px;
        }

        @media only screen and (min-width: 1024px) {
          padding: 41px 51px 31px;
          flex-direction: row;
          align-items: center;
        }
      }
      article blockquote,
      figure {
        margin: 0;
      }
      article blockquote {
        @media only screen and (min-width: 768px) {
          margin-top: 16px;
        }
      }
      .participant-review-img {
        width: 104px;
        height: 104px;
        flex-shrink: 0;
        object-fit: cover;

        @media only screen and (min-width: 1024px) {
          margin-right: 31px;
        }
      }
      .participant-review-img figure img {
        width: 100%;
        height: 100%;
        border-radius: 48%;
        background-color: #ffffff;

        @media only screen and (min-width: 1024px) {
          padding-top: -5px;
        }
      }
      .participant-review-content {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;
        margin-top: 10px;

        @media only screen and (min-width: 1024px) {
          flex-direction: column;
          margin-top: 0;
          text-align: left;
        }
      }
      .participant-review-content blockquote {
        font-size: 14px;
        margin-top: 17px;
        word-break: keep-all;

        @media only screen and (min-width: 1024px) {
          margin-top: 0;
          margin-bottom: 14px;
          word-break: unset;
        }
      }
      .participant-review-content figcaption {
        width: 100%;
        font-size: 16px;
        text-align: center;

        @media only screen and (min-width: 1024px) {
          text-align: right;
        }
      }
    `;
  }

  createHtml() {
    const authorImgSrc = this.getAttribute("author-img-src");
    const content = this.getAttribute("content");
    const author = this.getAttribute("author");

    return html`
      <article>
        <section class="participant-review-img">
          <figure>
            <img src="${authorImgSrc}" alt="Author profile image" />
          </figure>
        </section>
        <section class="participant-review-content">
          <blockquote>${content}</blockquote>
          <figcaption>${author}</figcaption>
        </section>
      </article>
    `;
  }
}

customElements.define("ds-participant-review-list", ParticipantReviewList);
customElements.define("ds-participant-review", ParticipantReview);
