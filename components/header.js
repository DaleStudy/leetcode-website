const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      position: fixed;
      top: 0;
      left: 0;
      padding: 20px 0;
      width: 100%;
      border-bottom: 1px solid #D3D3D3;
      background-color: rgba(255, 255, 255, 0.8);
    }

    header {
      width: 80%;
      margin: 0 auto;
      justify-content: space-between;
      display: flex;
      align-items: center;
    }

    .buttons-container {
      display: flex;
      align-items: center;
      column-gap: 40px;
    }

    a {
      display: flex;
      gap: 10px;
      align-items: center;
      text-decoration: none;
    }

    a img {
      width: 45px;
      height: 22.5px;
    }

    a span {
      font-size: 20px;
      font-weight: 500;
      color: black;
    }
  </style>
  <header>
      <a href="/">
        <img src="images/logo.png" alt="logo" />
        <span>달레 스터디</span>
      </a>
    
      <div class="buttons-container">
        <ds-button-link href="#join-instruction-container" size="small" variant="ghost">참여방법 안내</ds-button-link>
        <ds-button-link href="https://discord.gg/43UkheRV" size="small" variant="primary">디스코드 참여하기</ds-button-link>
      </div>
  </header>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("header-component", HeaderComponent);
