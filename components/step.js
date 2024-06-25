import { css, html } from "../html-css-utils.js";

class Step extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.validateAttributes();
    this.render();
  }

  connectedCallback() {
    this.updateLink();
  }

  validateAttributes() {
    const status = this.getAttribute("status");
    const validStatuses = ["1", "2", "3"];
    if (status && !validStatuses.includes(status)) {
      throw new Error(
        `The "status" attribute must be one of ${validStatuses.join(", ")}.`
      );
    }
  }

  updateLink() {
    const slot = this.shadowRoot.querySelector("slot");
    const nodes = slot.assignedNodes({ flatten: true });
    const linkText = this.getAttribute("linkText");
    const link = this.getAttribute("link");
    const linkHtml = `<a href="${link}" target="_blank" style="text-decoration: underline;">${linkText}</a>`;

    nodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = node.textContent.split(linkText).join(linkHtml);
        while (tempDiv.firstChild) {
          node.parentNode.insertBefore(tempDiv.firstChild, node);
        }
        node.remove();
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        node.innerHTML = node.innerHTML.split(linkText).join(linkHtml);
      }
    });
  }

  createCss() {
    return css`
      .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white;
        border: 1px solid #000000;
        border-radius: 10px;
        padding: 106px 53px;
        text-align: center;
        max-width: 375px;
        max-height: 627px;
      }
      .step-title h3 {
        font-size: 36px;
        margin-bottom: 50px;
      }

      .step-icon {
        width: 60px;
        height: 60px;
        margin-bottom: 50px;
      }

      .step-content {
        font-size: 24px;
        word-break: keep-all;
      }
    `;
  }

  createHtml() {
    const status = this.getAttribute("status") ?? "1";
    const iconSrc = this.getAttribute("iconSrc");

    return html`
      <article class="step ${status}">
        <header class="step-title">
          <h3>Step ${status}</h3>
        </header>
        <img class="step-icon" src="${iconSrc}" alt="step ${status} icon" />
        <section class="step-content">
          <slot></slot>
        </section>
      </article>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }
}

customElements.define("ds-step", Step);
