const css = /*css*/ `
<style>
  /* Default: Extra-small devices such as small phones (less than 640px) */
  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: max-content;
    text-align: center;
  }

  a.secondary {
    color: #000;
    background-color: #d9d9d9;
  }

  a.small {
    height: 35px;
    padding: 10px 20px;
    font-size: 13px;
    border-radius: 7px;
  }

  a.big {
    height: 45px;
    padding: 10px 25px;
    font-size: 14px;
    border-radius: 10px;
  }

  a.ghost {
    border: none;
    border-radius: 0;
    height: min-content;
  }

  a.small.ghost {
    padding: 0;
  }

  a.big.ghost {
    padding: auto;
    color: #000;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 10px;
  }

  /* Medium devices such as tablets (768px and up) */
  @media only screen and (min-width: 768px) {
    a.small {
      padding: 5px 25px;
      font-size: 14px;
    }

    a.big {
      padding: 16px 40px;
      font-size: 20px;
    }
  }

  /* Large devices such as laptops (1024px and up) */
  @media only screen and (min-width: 1024px) {
    a.small {
      padding: 5px 30px;
      font-size: 16px;
    }
  }
</style>
`;

const html = /*html*/ `
<link rel="stylesheet" href="./global-styles.css" />
<a>
  <slot></slot>
</a>
`;

class ButtonLink extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: "open",
    });
    this.shadowRoot.innerHTML = css + html;

    this.setDefaultAttributes();
    this.validateAttributes();
    this.updateAttributes();
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
      const validVariants = ["ghost", "secondary"];

      if (!validVariants.includes(variant)) {
        throw new Error(
          `The "variant" attribute must be one of ${validVariants.join(", ")}.`
        );
      }
    }
  }

  setDefaultAttributes() {
    if (!this.hasAttribute("size")) {
      this.setAttribute("size", "small");
    }

    if (!this.hasAttribute("variant")) {
      this.setAttribute("variant", "ghost");
    }
  }

  updateAttributes() {
    const link = this.shadowRoot.querySelector("a");
    link.setAttribute("href", this.getAttribute("href"));

    // Set target to "_blank" only for external links
    if (!this.getAttribute("href").startsWith("#")) {
      link.setAttribute("target", "_blank");
    }

    if (this.hasAttribute("size")) {
      link.classList.add(this.getAttribute("size"));
    }

    if (this.hasAttribute("variant")) {
      link.classList.add(this.getAttribute("variant"));
    }
  }
}

customElements.define("ds-button-link", ButtonLink);
