import { css, html } from "../html-css-utils.js";

class FooterIcon extends HTMLElement {
  constructor() {
    super();

    this.validateAttributes();
    this.render();
  }

  validateAttributes() {
    const attributes = ["href", "width", "height", "iconSrc", "iconAlt"];

    for (let i = 0; i < attributes.length; i++) {
      if (!this.hasAttribute(attributes[i])) {
        throw new Error(`The "${attributes[i]}" attribute is required.`);
      }
    }

    const iconSrc = this.getAttribute("iconSrc");
    const extension = iconSrc.slice(-4).toLowerCase();

    const validExtensions = [".svg", ".png", ".jpg", ".jpeg"];
    if (!validExtensions.includes(extension)) {
      throw new Error(
        'The "iconSrc" attribute must end with .svg, .png, .jpg, or .jpeg.'
      );
    }
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  createCss() {
    const width = this.getAttribute("width");
    const height = this.getAttribute("height");

    return css`
      a {
        display: block;
      }

      img {
        width: ${width};
        height: ${height};
      }
    `;
  }

  createHtml() {
    const href = this.getAttribute("href");
    const iconSrc = this.getAttribute("iconSrc");
    const iconAlt = this.getAttribute("iconAlt");

    return html`
      <a href="${href}" target="_blank">
        <img
          src="${iconSrc}"
          alt="${iconAlt}"
        />
      </a>
    `;
  }
}

customElements.define("ds-footer-icon", FooterIcon);
