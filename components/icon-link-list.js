import { css, html } from "../html-css-utils.js";

class IconLink extends HTMLElement {
  constructor() {
    super();

    this.validateAttributes();
    this.render();
  }

  validateAttributes() {
    const attributes = ["href", "icon-src", "icon-alt"];

    for (let i = 0; i < attributes.length; i++) {
      if (!this.hasAttribute(attributes[i])) {
        throw new Error(`The "${attributes[i]}" attribute is required.`);
      }
    }

    const iconSrc = this.getAttribute("icon-src");
    const validExtensions = [".svg", ".png", ".jpg", ".jpeg"];
    const extension = iconSrc.slice(iconSrc.lastIndexOf(".")).toLowerCase();

    if (!validExtensions.includes(extension)) {
      throw new Error(
        `The "icon-src" attribute must end with one of the following extensions: ${validExtensions.join(
          ", "
        )}.`
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
        ${width ? `width: ${width};` : ""}
        ${height ? `height: ${height};` : ""}
      }
    `;
  }

  createHtml() {
    const href = this.getAttribute("href");
    const iconSrc = this.getAttribute("icon-src");
    const iconAlt = this.getAttribute("icon-alt");

    return html`
      <a href="${href}" target="_blank">
        <img src="${iconSrc}" alt="${iconAlt}" />
      </a>
    `;
  }
}

class IconLinkList extends HTMLElement {
  constructor() {
    super();

    this.render();
    this.validateAttributes();
  }

  validateAttributes() {
    const slot = this.shadowRoot.querySelector("slot");
    const nodes = slot.assignedNodes();

    nodes.forEach((node) => {
      if (
        node.nodeType === Node.ELEMENT_NODE &&
        node.tagName.toLowerCase() !== "ds-icon-link"
      ) {
        throw new Error(
          "The children of ds-icon-link-list must be ds-icon-link."
        );
      }
    });
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  createCss() {
    return css`
      section {
        display: flex;
        align-items: center;
        gap: 40px;
      }
    `;
  }

  createHtml() {
    return html`<section>
      <slot></slot>
    </section>`;
  }
}

customElements.define("ds-icon-link", IconLink);
customElements.define("ds-icon-link-list", IconLinkList);
