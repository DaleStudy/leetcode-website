import { css, html } from "../html-css-utils.js";

class ReviewItem extends HTMLElement {
  constructor() {
    super();

    this.validateAttributes();
    this.render();
  }

  validateAttributes() {
    if (!this.hasAttribute("img")) {
      throw new Error('The "img" attribute is required.');
    }

    if (!this.hasAttribute("text")) {
      throw new Error('The "text" attribute is required.');
    }

    if (!this.hasAttribute("name")) {
      throw new Error('The "name" attribute is required.');
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
        background-color: #efefef;
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

      /* Small devices such as large phones (640px and up) */
      @media only screen and (min-width: 640px) {
        /* TODO: Check if the media query guideline supports small screens or not. */
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

      /* Largest devices such as desktops (1280px and up) */
      @media only screen and (min-width: 1280px) {
        /* TODO: Add after checking the media query guideline. */
      }
    `;
  }

  createHtml() {
    const img = this.getAttribute("img");
    const text = this.getAttribute("text");
    const name = this.getAttribute("name");

    return html`
      <article class="review-item">
        <section class="review-img">
          <figure><img src="${img}" alt="Reviewer" /></figure>
        </section>
        <section class="review-content">
          <blockquote>${text}</blockquote>
          <figcaption>${name}</figcaption>
        </section>
      </article>
    `;
  }
}

customElements.define("ds-review-item", ReviewItem);
