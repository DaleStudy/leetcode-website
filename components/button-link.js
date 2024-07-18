import { css, html } from "../html-css-utils.js";

class ButtonLink extends HTMLElement {
  constructor() {
    super();

    this.validateAttributes();
    this.render();
  }

  validateAttributes() {
    if (!this.hasAttribute("href")) {
      throw new Error('The "href" attribute is required.');
    }

    if (this.hasAttribute("size")) {
      const size = this.getAttribute("size");
      const validSizes = ["big", "small"];

      if (!validSizes.includes(size)) {
        throw new Error(
          `The "size" attribute must be one of ${validSizes.join(", ")}.`
        );
      }
    }

    if (this.hasAttribute("variant")) {
      const variant = this.getAttribute("variant");
      const validVariants = ["ghost", "primary"];

      if (!validVariants.includes(variant)) {
        throw new Error(
          `The "variant" attribute must be one of ${validVariants.join(", ")}.`
        );
      }
    }
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  createCss() {
    return css`
      a {
        display: flex;
        justify-content: center;
        align-items: center;

        width: max-content;
        text-align: center;
      }

      a.small {
        padding: 10px 20px;
        font-size: 13px;
        border-radius: 7px;
      }

      a.big {
        padding: 10px 25px;
        font-size: 14px;
        border-radius: 7px;
      }

      a.primary {
        color: white;
        font-weight: 500;
        background-color: var(--bg-400);
      }

      a.primary:focus {
        outline: 3px solid var(--primary);
        outline-offset: 2px;
        border-radius: 10px;
      }

      a.primary:focus-visible {
        outline: 3px solid var(--secondary);
        outline-offset: 2px;
        border-radius: 10px;
      }

      a.primary:hover {
        background-color: #5536de;
        font-weight: var(--font-weight-bold);
      }

      a.primary:active {
        background-color: #160b46;
        color: white;
      }

      a.ghost {
        border: none;
        border-radius: 0;
      }

      a.small.ghost {
        padding: 10px 20px;
      }

      a.small.ghost:focus {
        outline: 3px solid var(--primary);
        outline-offset: 2px;
        border-radius: 10px;
      }

      a.small.ghost:focus-visible {
        outline: 3px solid var(--secondary);
        outline-offset: 2px;
        border-radius: 10px;
      }

      a.small.ghost:hover {
        font-weight: var(--font-weight-bold);
      }

      a.small.ghost:active {
        color: #846de9;
      }

      a.big.ghost {
        padding: auto;
        color: black;
        font-weight: normal;
        border-radius: 10px;
        background: white;
        border: 3px solid transparent;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        background-image: linear-gradient(white, white),
          linear-gradient(135deg, var(--secondary), var(--primary));

        @media only screen and (min-width: 768px) {
          border-width: 5px;
        }
      }

      a.big.ghost:focus {
        outline: 3px solid var(--primary);
        outline-offset: 2px;
        border-radius: 10px;
      }

      a.big.ghost:focus-visible {
        outline: 3px solid var(--secondary);
        outline-offset: 2px;
        border-radius: 10px;
      }

      a.big.ghost:hover {
        font-weight: var(--font-weight-bold);
      }

      a.big.ghost:active {
        color: var(--primary);
      }

      @media only screen and (min-width: 768px) {
        a.small {
          padding: 7px 25px;
          font-size: 14px;
        }

        a.big {
          padding: 16px 40px;
          font-size: 20px;
        }
      }

      @media only screen and (min-width: 1024px) {
        a.small {
          padding: 10px 30px;
          font-size: 16px;
        }
      }
    `;
  }

  createHtml() {
    const href = this.getAttribute("href");
    const variant = this.getAttribute("variant") ?? "ghost";
    const size = this.getAttribute("size") ?? "small";

    return html`
      <a
        href="${href}"
        class="${size} ${variant}"
        target=${href.startsWith("#") ? "_self" : "_blank"}
      >
        <slot></slot>
      </a>
    `;
  }
}

customElements.define("ds-button-link", ButtonLink);
