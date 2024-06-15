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
        <link rel="stylesheet" href="components/review-item/review-item.css">
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
