class LinkButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.validateAttributes();
    this.setDefaultAttributes();

    this.render();
  }



  validateAttributes() {
    // Validate required attributes
    if (!this.hasAttribute("href")) {
      throw new Error('The "href" attribute is required.');
    }

    // Validate allowed attributes
    const allowedAttributes = ["size", "variant", "href", "outline"];
    for (const attr of this.attributes) {
      if (!allowedAttributes.includes(attr.name)) {
        throw new Error(`The attribute "${attr.name}" is not allowed.`);
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

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="components/link-button/link-button.css">
    `;

    const href = this.getAttribute("href");
    const size = this.getAttribute("size");
    const variant = this.getAttribute("variant");
    const outline = this.hasAttribute("outline");

    const element = document.createElement("a");
    element.setAttribute("href", href);

    // Set target to "_blank" only for external links
    if (!href.startsWith("#")) {
      element.setAttribute("target", "_blank");
    }

    element.classList.add("button");

    if (size) {
      element.classList.add(size);
    }

    if (variant) {
      element.classList.add(variant);
    }

    if (outline) {
      element.classList.add("outline");
    }

    element.innerHTML = `<slot></slot>`;

    this.shadowRoot.appendChild(element);
  }
}

customElements.define("link-button", LinkButton);
