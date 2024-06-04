const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="./components/card/card.css">
  <div class="card">
    <h2 class="title"></h2>
    <h3 class="subtitle"></h3>
    <div class="content">
      <slot>
        Content
      </slot>
    </div>
  </div>
`;

class Card extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["title", "subtitle"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "title") {
      this.shadowRoot.querySelector(".title").innerText = newValue;
    } else if (name === "subtitle") {
      this.shadowRoot.querySelector(".subtitle").innerText = newValue;
    }
  }
}

customElements.define("card-component", Card);
