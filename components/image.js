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

    const allowedAttributes = ["src", "alt", "width", "height"];
    for (const attr of this.attributes) {
      if (!allowedAttributes.includes(attr.name)) {
        throw new Error(`The attribute "${attr.name}" is not allowed.`);
      }
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
    const src = this.getAttribute("src") ?? "";
    const alt = this.getAttribute("alt") ?? "";

    let imgHtml = `<img src="${src}" alt="${alt}"`;

    if (this.hasAttribute("width")) {
      const width = this.getAttribute("width");
      imgHtml += ` width="${width}"`;
    }

    if (this.hasAttribute("height")) {
      const height = this.getAttribute("height");
      imgHtml += ` height="${height}"`;
    }

    imgHtml += `>`;

    return `
      ${imgHtml}
    `;
  }
}

customElements.define("ds-image", Image);
