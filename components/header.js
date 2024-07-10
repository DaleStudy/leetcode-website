import { css, html } from "../html-css-utils.js";

class Header extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const menuButton = this.shadowRoot.querySelector("button");
    menuButton.addEventListener("click", this.toggleMenu.bind(this));
  }

  toggleMenu() {
    const buttonLinks = this.shadowRoot.querySelector(".buttons-container");
    const header = this.shadowRoot.querySelector("header");
    const menuIcon = this.shadowRoot.querySelector("#menuIcon");
    const closeIcon = this.shadowRoot.querySelector("#closeIcon");

    menuIcon.classList.toggle("hide");
    closeIcon.classList.toggle("hide");

    buttonLinks.classList.toggle("open");
    header.classList.toggle("vertical");
    this.classList.toggle("menu-open");
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
        font-weight: var(--font-weight-medium);
        width: 100%;
        border-bottom: 1px solid var(--bg-300);
        background-color: var(--bg-200);

        @media only screen and (min-width: 1024px) {          
          z-index: 1000;
        }
      }

      :host(.menu-open) {
        background-color: var(--bg-100);
      }

      *:focus {
        border: 1px solid black;
      }

      header {
        width: 80%;
        margin: 0 auto;
        justify-content: space-between;
        display: flex;
        align-items: center;

        @media only screen and (min-width: 768px) {
          flex-direction: row !important;
        }
      }

      header.vertical {
        flex-direction: column;
      }

      .buttons-container {
        display: none;
        align-items: center;
        column-gap: 40px;

        @media only screen and (min-width: 768px) {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          column-gap: 40px !important;
          margin-top: 0 !important;
        }
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

        span {
          display: none;
          
          @media only screen and (min-width: 768px) {
            display: inline;
            font-size: 16px;
          }

          @media only screen and (min-width: 1024px) {
            font-size: 20px;
          }
        }

        img {
          width: 41px;
          height: 20.5px;
          
          @media only screen and (min-width: 1024px) {
            width: 45px;
            height: 22.5px;
          }
        }
      }

      button {
        position: relative;
        background-color: var(--bg-200);
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0;
        width: 18px;
        height: 18px;

        @media only screen and (min-width: 768px) {
          display: none;
        }
      }

      button > img {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        transition: opacity 200ms ease-in-out;
      }

      button > img.hide {
        opacity: 0;
      }

      .header-content {
        display: flex;
        justify-content: space-between;
        width: 100%;
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
            <img
              width="100%"
              height="100%"
              id="menuIcon"
              src="images/menu.png"
              alt="menu open icon"
            />
            <img
              width="100%"
              height="100%"
              id="closeIcon"
              class="hide"
              src="images/cancel.png"
              alt="menu close icon"
            />
          </button>
        </div>

        <div class="buttons-container">
          <ds-button-link
            href="#steps-section"
            size="small"
            variant="ghost"
            >참여방법 안내</ds-button-link
          >
          <ds-button-link
            href="https://discord.gg/6TwzdnW6ze"
            size="small"
            variant="primary"
            >디스코드 참여하기</ds-button-link
          >
        </div>
      </header>
    `;
  }
}

customElements.define("ds-header", Header);
