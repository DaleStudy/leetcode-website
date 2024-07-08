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
