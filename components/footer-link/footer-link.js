const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="./components/footer-link/footer-link.css">
  <ul class="footer-link">
    <li>
      <a id="link" href="#"><slot></slot></a>
    </li>
  </ul>
`;

class FooterLink extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["href"];
  }

  constructor() {  
    this.linkElement = shadow.getElementById("link");  
    this.updateLink(this.getAttribute("href"));  
  }  

  attributeChangedCallback(name, oldValue, newValue) {  
    if (name === "href") {  
        this.updateLinkHref(newValue);  
    }  
  }  

  updateLink(href) {  
    this.linkElement.setAttribute("href", href);  
  }  
}

window.customElements.define("footer-link", FooterLink);
