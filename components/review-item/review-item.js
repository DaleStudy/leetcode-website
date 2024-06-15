class ReviewItem extends HTMLElement {
  constructor() {
    super();
  }

  // initial render in here to ensure the element is fully connected to the DOM.
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.render();
  }

  // getter to make it clean to access the attribute value and ensure a default empty string if the attribute is missing.
  get text() {
    return this.getAttribute("text") || "";
  }

  get name() {
    return this.getAttribute("name") || "";
  }

  get img() {
    return this.getAttribute("img") || "";
  }

  render() {
    try {
      this.shadowRoot.innerHTML = `
        .review-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 10px;
          padding: 41px 51px 31px;
          background-color: #efefef;
          max-width: 568px;
        }
        .review-item blockquote,
          figure {
          margin: 0;
        }
        .review-content {
          display: flex;
          align-items: center;
        }
        .review-content figure {
          width: 104px;
          height: 104px;
          flex-shrink: 0;
          object-fit: cover;
          margin-right: 31px;
        }
        .review-content figure > img {
          width: 100%;
          height: 100%;
          padding-top: 7px;
          border-radius: 48%;
          background-color: #ffffff;
        }
        .review-content blockquote {
          font-size: 14px;
        }
        .review-footer {
          width: 100%;
          margin-top: 14px;
        }
        .review-footer figcaption {
          font-size: 16px;
          text-align: right;
        }
        <article class="review-item">
          <section class="review-content">
            <figure>
              <img src="${this.img}" alt="Reviewer">
            </figure>
            <blockquote>${this.text}</blockquote>
          </section>
          <footer class="review-footer">
            <figcaption>${this.name}</figcaption>
          </footer>
        </article>
      `;
    } catch (error) {
      // log any rendering errors.
      console.error("Error during render:", error);
    }
  }
}

customElements.define("review-item", ReviewItem);
