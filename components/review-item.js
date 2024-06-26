import { css, html } from "../html-css-utils.js";

class ReviewItem extends HTMLElement {
  constructor() {
    super();

    this.validateAttributes();
    this.render();
  }

  validateAttributes() {
    if (!this.hasAttribute("authorImgSrc")) {
      throw new Error('The "authorImgSrc" attribute is required.');
    }

    if (!this.hasAttribute("content")) {
      throw new Error('The "content" attribute is required.');
    }

    if (!this.hasAttribute("author")) {
      throw new Error('The "author" attribute is required.');
    }
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  createCss() {
    return css`
      .review-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        padding: 39px 20px;
        background-color: var(--bg-300);
        color: var(--text-900);
      }
      .review-item blockquote,
      figure {
        margin: 0;
      }
      .review-img {
        width: 104px;
        height: 104px;
        flex-shrink: 0;
        object-fit: cover;
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
      }
      .review-content blockquote {
        font-size: 14px;
        margin-top: 17px;
        word-break: keep-all;
      }
      .review-content figcaption {
        width: 100%;
        font-size: 16px;
        text-align: center;
      }

      /* Medium devices such as tablets (768px and up) */
      @media only screen and (min-width: 768px) {
        .review-item {
          padding: 37px 20px;
        }
        .review-content blockquote {
          margin-top: 16px;
        }
      }

      /* Large devices such as laptops (1024px and up) */
      @media only screen and (min-width: 1024px) {
        .review-item {
          padding: 41px 51px 31px;
          flex-direction: row;
          align-items: flex-start;
        }
        .review-img {
          margin-right: 31px;
        }
        .review-content {
          flex-direction: column;
          margin-top: 0;
          text-align: left;
        }
        .review-content blockquote {
          margin-top: 0;
          margin-bottom: 14px;
          word-break: unset;
        }
        .review-content figcaption {
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
      <article class="review-item">
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

customElements.define("ds-review-item", ReviewItem);
