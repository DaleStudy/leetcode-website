import { css, html } from "../html-css-utils.js";

class BaseStepElement extends HTMLElement {
  constructor() {
    super();
    this.validateAttributes();
    this.render();
  }

  validateAttributes() {
    this.requiredAttributes.forEach((attr) => {
      if (!this.hasAttribute(attr)) {
        throw new Error(`The "${attr}" attribute is required.`);
      }
    });
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }
}

class Step extends BaseStepElement {
  get requiredAttributes() {
    return ["step", "iconSrc"];
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
        border: 5px solid transparent;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        background-image: linear-gradient(white, white),
          linear-gradient(135deg, #24eaca, #846de9);
      }
      .step-title h3 {
        font-size: 24px;
        font-weight: var(--font-weight-medium);
      }
      .step-icon {
        width: 40px;
        height: 40px;
        margin: 20px 0;
      }
      .step-content {
        font-size: 16px;
        font-weight: var(--font-weight-regular);
        word-break: keep-all;
      }

      /* Medium devices such as tablets (768px and up) */
      @media only screen and (min-width: 768px) {
        .step-title h3 {
          font-size: 36px;
        }
        .step-icon {
          width: 60px;
          height: 60px;
          margin: 50px 0;
        }
        .step-content {
          font-size: 24px;
        }
      }

      /* Large devices such as desktops and laptops (1024px and up) */
      @media only screen and (min-width: 1024px) {
        .step {
          min-height: 627px;
        }
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
}

class StepTextLink extends BaseStepElement {
  get requiredAttributes() {
    return ["link"];
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

    return html`<a class="step-text-link" target="_blank" href="${link}">
      <slot></slot>
    </a>`;
  }
}

customElements.define("ds-step", Step);
customElements.define("ds-step-text-link", StepTextLink);
