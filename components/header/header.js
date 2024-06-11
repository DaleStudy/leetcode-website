const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="./components/header/header.css">
  <header>
    <div class="container">
    <a href="#">
      <img src="images/logo.png" alt="logo" />
      <span>달레 스터디</span>
    </a>
    </div>
    <div>
      
    </div>
  </header>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('header-component', HeaderComponent);
