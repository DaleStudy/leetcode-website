import { css, html } from "../html-css-utils.js";

class Image extends HTMLElement {
  constructor() {
    super();

    this.validateAttributes();
    this.render();
  }

  validateAttributes() {
    const requiredAttributes = ["src", "alt"];

    requiredAttributes.forEach((attribute) => {
      if (!this.hasAttribute(attribute)) {
        throw new Error(`The "${attribute}" attribute is required.`);
      }
    });
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  createCss() {
    return css`
      img {
        display: block;
      }
    `;
  }

  createHtml() {
    const src = this.getAttribute("src");
    const alt = this.getAttribute("alt");
    const width = this.getAttribute("width");
    const height = this.getAttribute("height");

    return html`<img
      src="${src}"
      alt="${alt}"
      ${width ? `width="${width}"` : ""}
      ${height ? `height="${height}"` : ""}
    />`;
  }
}

customElements.define("ds-image", Image);
