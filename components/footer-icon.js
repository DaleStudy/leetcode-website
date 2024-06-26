import { css, html } from "../html-css-utils.js";

class FooterIcon extends HTMLElement {
  constructor() {
    super();

    this.validateAttributes();
    this.render();
  }

  validateAttributes() {
    if (!this.hasAttribute("href")) {
      throw new Error('The "href" attribute is required.');
    }

    if (!this.hasAttribute("type")) {
      throw new Error('The "type" attribute is required.');
    }
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
    this.updateIcon();
  }

  createCss() {
    return css`
      .footer-icon {
        display: inline-block;
      }
      slot {
      display: none;
    }
    `;
  }

  createHtml() {
    const type = this.getAttribute("type");
    const href = this.getAttribute("href");

    if (type == "svg") {
      const viewBox = this.getAttribute("viewBox");

      return html`
        <a href="${href}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="${viewBox}"
          >
            <path></path>
          </svg>
        </a>
        <slot></slot>
      `;
    } else if (type == "img") {
      return html`
        <a href="${href}">
          <img 
           alt="icon"
           width="24px"
           height="24px"
          >
          </img>
        </a>
        <slot></slot>
      `;
    } else {
      throw new Error('The "type" attribute must be either "svg" or "img".');
    }
  }

  updateIcon() {
    const type = this.getAttribute("type");

    if (type == "svg") {
      this.updateSvgPath();
    } else if (type == "img") {
      this.updateImgPath();
    }
  }

  updateSvgPath() {
    const path = this.shadowRoot.querySelector("path");
    const slot = this.shadowRoot.querySelector("slot");
    const d = slot.assignedNodes()[0].textContent.trim();

    path.setAttribute("d", d);
  }

  updateImgPath() {
    const img = this.shadowRoot.querySelector("img");
    const slot = this.shadowRoot.querySelector("slot");
    const src = slot.assignedNodes()[0].textContent.trim();

    img.setAttribute("src", src);
  }
}

customElements.define("ds-footer-icon", FooterIcon);
