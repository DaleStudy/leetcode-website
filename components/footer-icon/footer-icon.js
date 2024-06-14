const template = document.createElement("template");
template.innerHTML = `
  <a href="#" class="footer-link">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width=""
      height=""
      viewBox=""
      class="icon"
    >
      <g>
        <path d="" />
      </g>
    </svg>
  </a>
  `;

class FooterIcon extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
    this.updateAttributes();
  }

  static get observedAttributes() {
    return ["href", "width", "height", "viewBox", "d"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.updateAttributes();
    }
  }

  updateAttributes() {
    const svg = this.shadowRoot.querySelector("svg");
    const g = svg.querySelector("g");
    const path = g.querySelector("path");
    const link = this.shadowRoot.querySelector("a");

    link.setAttribute("href", this.getAttribute("href") || "#");
    svg.setAttribute("width", this.getAttribute("width") || "1.3em");
    svg.setAttribute("height", this.getAttribute("height") || "1.3em");
    svg.setAttribute("viewBox", this.getAttribute("viewBox") || "0 0 128 128");
    path.setAttribute("d", this.getAttribute("d") || "");
  }
}

customElements.define("footer-icon", FooterIcon);
