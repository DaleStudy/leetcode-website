import { css, html } from "../html-css-utils.js";

class Step extends HTMLElement {
  constructor() {
    super();
    this.validateAttributes();
    this.render();
  }

  validateAttributes() {
    if (!this.hasAttribute("step")) {
      throw new Error('The "step" attribute is required.');
    }
    if (!this.hasAttribute("iconSrc")) {
      throw new Error('The "iconSrc" attribute is required.');
    }
  }

  createCss() {
    return css`
      h3,
      ::slotted(p) {
        margin: 0;
        padding: 0;
      }
      .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: white;
        border-radius: 10px;
        padding: 106px 53px;
        text-align: center;
        width: 375px;
        height: 627px;
        border: 5px solid transparent;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        background-image: linear-gradient(white, white),
          linear-gradient(135deg, #24eaca, #846de9);
      }
      .step-title h3 {
        font-size: 36px;
        font-weight: var(--font-weight-medium);
      }
      .step-icon {
        width: 60px;
        height: 60px;
        margin: 50px 0;
      }
      .step-content {
        font-size: 24px;
        font-weight: var(--font-weight-regular);
        word-break: keep-all;
      }
    `;
  }

  createHtml() {
    const step = this.getAttribute("step");
    const iconSrc = this.getAttribute("iconSrc");

    return html`
      <article class="step">
        <section class="step-title">
          <h3>Step ${step}</h3>
        </section>
        <img class="step-icon" src="${iconSrc}" alt="Step icon" />
        <section class="step-content">
          <slot name="content"></slot>
        </section>
      </article>
    `;
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }
}

class StepTextLink extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  validateAttributes() {
    if (!this.hasAttribute("link")) {
      throw new Error('The "link" attribute is required.');
    }
  }

  createCss() {
    return css`
      .step-text-link,
      .step-text-link:hover {
        text-decoration: underline;
      }
    `;
  }
  createHtml() {
    const link = this.getAttribute("link");

    return html`<a class="step-text-link" target="_blank" href="${link}"
      ><slot></slot
    ></a>`;
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }
}

customElements.define("ds-step", Step);
customElements.define("ds-step-text-link", StepTextLink);
