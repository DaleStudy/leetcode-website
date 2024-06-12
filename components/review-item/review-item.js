class ReviewItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // initial render in here to ensure the element is fully connected to the DOM.
  connectedCallback() {
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
        <div class="review-item">
          <div class="review-img-text-container">
            <div class="review-img">
              <img src="${this.img}" alt="Person">
            </div>
            <div class="review-text">${this.text}</div>
          </div>
          <div class="review-name">${this.name}</div>
        </div>
      `;
    } catch (error) {
      // log any rendering errors.
      console.error("Error during render:", error);
    }
  }
}

customElements.define("review-item", ReviewItem);
