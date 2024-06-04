const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="./components/divider/divider.css">
  <div class="divider">
    <hr>
  </div>
`;

class DividerComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("divider-component", DividerComponent);
