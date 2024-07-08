import { css, html } from "../html-css-utils.js";

class BaseStepElement extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  validateAttributes(requiredAttributes) {
    requiredAttributes.forEach((attr) => {
      if (!this.hasAttribute(attr)) {
        throw new Error(`The "${attr}" attribute is required.`);
      }
    });
  }
}

class StepList extends BaseStepElement {
  createCss() {
    return css`
      .step-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 10px;
        margin-top: 20px;

        @media only screen and (min-width: 1024px) {
          flex-direction: row;
          column-gap: 10px;
        }
      }
      .step-list ::slotted(ds-step) {
        flex: 1 1 100%;
      }
    `;
  }

  createHtml() {
    return html`
      <div class="step-list">
        <slot></slot>
      </div>
    `;
  }
}

class Step extends BaseStepElement {
  constructor() {
    super();
    this.validateAttributes(["step", "iconSrc"]);
  }

  createCss() {
    return css`
      h3,
      ::slotted(p) {
        margin: 0;
        padding: 0;
      }
      article {
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        text-align: center;
        border: 5px solid transparent;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        background-image: linear-gradient(white, white),
          linear-gradient(135deg, #24eaca, #846de9);
        padding: 75px 27px;

        @media only screen and (min-width: 768px) {
          height: 460px;
          padding: 67px 74px;
        }

        @media only screen and (min-width: 1024px) {
          height: 627px;
          padding: 106px 54px;
        }
      }
      .step-title h3 {
        font-size: 24px;
        font-weight: var(--font-weight-medium);
        @media only screen and (min-width: 768px) {
          font-size: 36px;
        }
      }
      .step-icon {
        width: auto;
        height: 40px;
        margin: 20px 0;
        @media only screen and (min-width: 768px) {
          width: 60px;
          height: 60px;
          margin: 50px 0;
        }
      }
      .step-content {
        font-size: 16px;
        font-weight: var(--font-weight-regular);
        word-break: keep-all;
        @media only screen and (min-width: 768px) {
          font-size: 24px;
        }
      }
    `;
  }

  createHtml() {
    const step = this.getAttribute("step");
    const iconSrc = this.getAttribute("iconSrc");

    return html`
      <article>
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
  constructor() {
    super();
    this.validateAttributes(["link"]);
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

customElements.define("ds-step-list", StepList);
customElements.define("ds-step", Step);
customElements.define("ds-step-text-link", StepTextLink);
