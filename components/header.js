import { css, html } from "../html-css-utils.js";

class Header extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.setupEventListeners();
    this.handleResize(); // Ensure the menu is closed initially if needed
  }

  setupEventListeners() {
    const menuButton = this.shadowRoot.querySelector('button');
    menuButton.addEventListener('click', this.toggleMenu.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  toggleMenu() {
    const buttonLinks = this.shadowRoot.querySelector('.buttons-container');
    const menuIcon = this.shadowRoot.querySelector('button img');
    const header = this.shadowRoot.querySelector('header');

    buttonLinks.classList.toggle('open');
    header.classList.toggle('vertical');
    this.classList.toggle('menu-open');

    if (menuIcon.src.includes('menu.png')) {
      menuIcon.src = 'images/cancel.png';
    } else {
      menuIcon.src = 'images/menu.png';
    }
  }

  handleResize() {
    const buttonLinks = this.shadowRoot.querySelector('.buttons-container');
    const header = this.shadowRoot.querySelector('header');
    const menuIcon = this.shadowRoot.querySelector('button img');

    if (window.innerWidth >= 768) {
      // Ensure menu is closed in tablet and desktop view
      buttonLinks.classList.remove('open');
      header.classList.remove('vertical');
      this.classList.remove('menu-open');
      menuIcon.src = 'images/menu.png';
    }
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  createCss() {
    return css`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        color: var(--text-900);
        padding: 20px 0;
        font-weight: 500;
        width: 100%;
        border-bottom: 1px solid var(--bg-300);
        background-color: var(--bg-200);
      }

      :host(.menu-open) {
        background-color: var(--bg-100);
      }

      header {
        width: 80%;
        margin: 0 auto;
        justify-content: space-between;
        display: flex;
        align-items: center;
      }

      header.vertical {
        flex-direction: column;
      }

      .buttons-container {
        display: none;
        align-items: center;
        column-gap: 40px;
      }

      .buttons-container.open {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 18px;
        margin-top: 30px;
      }

      a {
        display: flex;
        gap: 10px;
        align-items: center;
        text-decoration: none;
      }

      a img {
        width: 41px;
        height: 20.5px;
      }

      a span {
        display: none;
      }

      button {
        background-color: var(--bg-200);
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0;
      }

      .header-content {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      @media only screen and (min-width: 768px) {
        header {
          flex-direction: row;
        }

        a span {
          display: inline;
          font-size: 16px;
        }

        a img {
          width: 41px;
          height: 20.5px;
        }

        .buttons-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          column-gap: 40px;
        }

        button {
          display: none;
        }
      }

      @media only screen and (min-width: 1024px) {
        a span {
          font-size: 20px;
        }

        a img {
          width: 45px;
          height: 22.5px;
        }
      }
    `;
  }

  createHtml() {
    return html`
      <header>
        <div class="header-content">
          <a href="/">
            <img src="images/logo.png" alt="logo" />
            <span>달레 스터디</span>
          </a>
          <button>
            <img src="images/menu.png" alt="menu icon" />
          </button>
        </div>

        <div class="buttons-container">
          <ds-button-link href="#join-instruction-container" size="small" variant="ghost">참여방법 안내</ds-button-link>
          <ds-button-link href="https://discord.gg/43UkheRV" size="small" variant="primary">디스코드 참여하기</ds-button-link>
        </div>
      </header>
    `;
  }
}

customElements.define("ds-header", Header);
