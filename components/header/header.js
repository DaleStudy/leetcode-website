import '../link-button/link-button.js';

const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="./components/header/header.css">
  <header>
    <div class="container">
      <a href="#">
        <img src="images/logo.png" alt="logo" />
        <span>달레 스터디</span>
      </a>
      <div class="buttons-container">
        <link-button href="#join-instruction-container" size="large" variant="primary">참여방법 안내</link-button>
        <link-button href="https://discord.gg/43UkheRV" size="large" variant="secondary">디스코드 참여하기</link-button>
      </div>
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
