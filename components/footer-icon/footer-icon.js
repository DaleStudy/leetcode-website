const template = document.createElement("template");
template.innerHTML = `
  <a href="#" class="footer-link">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.6em"
      height="1.6em"
      viewBox="0 0 128 128"
      class="icon"
    >
      <g>
        <path></path>
      </g>
    </svg>
  </a>
  <slot style="display:none;"></slot>
`;

class FooterIcon extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));

    this.linkElement = shadow.querySelector("a");
    this.pathElement = shadow.querySelector("path");

    this.updateLink(this.getAttribute("href"));
    this.updatePath(this.shadowRoot.querySelector("slot"));
  }

  static get observedAttributes() {
    return ["href", "slot"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "href") {
      this.updateLink(newValue);
    }
  }

  updateLink(href) {
    this.linkElement.setAttribute("href", href);
  }

  updatePath(d) {
    this.pathElement.setAttribute("d", d.assignedNodes()[0].textContent);
  }
}

customElements.define("footer-icon", FooterIcon);
