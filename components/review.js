import { css, html } from "../html-css-utils.js";

class BaseReviewElement extends HTMLElement {
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

class ReviewList extends BaseReviewElement {
  createCss() {
    return css`
      .review-list {
        width: 100%;
        display: grid;
        grid-template-columns: minmax(306px, 1fr);
        gap: 10px;
        padding-top: 40px;
        place-content: center;
        place-items: center;

        @media only screen and (min-width: 768px) {
          grid-template-columns: repeat(2, minmax(306px, 1fr));
        }

        @media only screen and (min-width: 1024px) {
          gap: 10px 9px;
        }
      }
    `;
  }

  createHtml() {
    return html`
      <div class="review-list">
        <slot></slot>
      </div>
    `;
  }
}

class Review extends BaseReviewElement {
  constructor() {
    super();
    this.validateAttributes(["authorImgSrc", "content", "author"]);
  }

  createCss() {
    return css`
      article {
        width: 100%;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        background-color: var(--bg-300);
        color: var(--text-900);
        padding: 39px 20px;

        @media only screen and (min-width: 768px) {
          min-height: 280px;
          padding: 37px 20px;
        }

        @media only screen and (min-width: 1024px) {
          min-height: 203px;
          padding: 41px 51px 31px;
          flex-direction: row;
          align-items: flex-start;
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
      .review-img {
        width: 104px;
        height: 104px;
        flex-shrink: 0;
        object-fit: cover;

        @media only screen and (min-width: 1024px) {
          margin-right: 31px;
        }
      }
      .review-img figure > img {
        width: 100%;
        height: 100%;
        padding-top: 7px;
        border-radius: 48%;
        background-color: #ffffff;
      }
      .review-content {
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
      .review-content blockquote {
        font-size: 14px;
        margin-top: 17px;
        word-break: keep-all;
        @media only screen and (min-width: 1024px) {
          margin-top: 0;
          margin-bottom: 14px;
          word-break: unset;
        }
      }
      .review-content figcaption {
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
    const authorImgSrc = this.getAttribute("authorImgSrc");
    const content = this.getAttribute("content");
    const author = this.getAttribute("author");

    return html`
      <article>
        <section class="review-img">
          <figure>
            <img src="${authorImgSrc}" alt="Author profile image" />
          </figure>
        </section>
        <section class="review-content">
          <blockquote>${content}</blockquote>
          <figcaption>${author}</figcaption>
        </section>
      </article>
    `;
  }
}

customElements.define("ds-review-list", ReviewList);
customElements.define("ds-review", Review);
