import { css, html } from "../html-css-utils.js";

class Image extends HTMLElement {
  constructor() {
    super();

    this.validateAttributes();
    this.render();
  }

  validateAttributes() {
    if (!this.hasAttribute("alt")) {
      throw new Error('The "alt" attribute is required.');
    }
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  createCss() {
    return css`
      img {
        display: block;
        max-width: 100%;
      }
    `;
  }

  createHtml() {
    const src = this.getAttribute("src") || "";
    const alt = this.getAttribute("alt") || "";
    const width = this.getAttribute("width");
    const height = this.getAttribute("height");

    let imgHtml = `<img src="${src}" alt="${alt}"`;

    if (width) {
      imgHtml += ` width="${width}"`;
    }

    if (height) {
      imgHtml += ` height="${height}"`;
    }

    imgHtml += `>`;

    return imgHtml;
  }
}

customElements.define("ds-image", Image);
