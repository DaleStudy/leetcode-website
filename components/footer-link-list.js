import { css, html } from "../html-css-utils.js";

class FooterLinks extends HTMLElement {
  constructor() {
    super();

    this.render();
    this.validateAttributes();
  }

  validateAttributes() {
    const slot = this.shadowRoot.querySelector("slot");
    const nodes = slot.assignedElements();

    nodes.forEach((node) => {
      if (
        node.nodeType === Node.ELEMENT_NODE &&
        node.tagName.toLowerCase() !== "ds-footer-link"
      ) {
        throw new Error("All children must be <ds-footer-link> elements.");
      }
    });
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  createCss() {
    return css`
      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }

      ul {
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        font-size: 16px;
        color: var(--bg-100);
      }

      @media only screen and (min-width: 768px) {
        ul {
          flex-direction: row;
          align-items: center;
          column-gap: 20px;
        }
      }

      @media only screen and (min-width: 1024px) {
        ul {
          column-gap: 80px;
        }
      }
    `;
  }

  createHtml() {
    return html`<ul>
      <slot></slot>
    </ul>`;
  }
}

class FooterLink extends HTMLElement {
  constructor() {
    super();

    this.validateAttributes();
    this.render();
  }

  validateAttributes() {
    if (!this.hasAttribute("href")) {
      throw new Error('The "href" attribute is required.');
    }
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  createCss() {
    return css`
      li {
        padding: 0;
        margin: 0;
        list-style-type: none;
        color: var(--bg-100);
        font-size: 16px;
      }
    `;
  }

  createHtml() {
    const href = this.getAttribute("href");

    return html`<li>
      <a href=${href} target="_blank">
        <slot></slot>
      </a>
    </li>`;
  }
}

customElements.define("ds-footer-link-list", FooterLinks);
customElements.define("ds-footer-link", FooterLink);
