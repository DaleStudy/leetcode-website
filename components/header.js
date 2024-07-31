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

      header {
        display: flex;
        margin: 0 27px;
        justify-content: space-between;
        align-items: center;

        @media only screen and (min-width: 768px) {
          width: 80%;
          margin: 0 auto;
        }
      }

      header.vertical {
        flex-direction: column;

        @media only screen and (min-width: 768px) {
          flex-direction: row;
        }
      }

      .buttons-container {
        display: none;

        @media only screen and (min-width: 768px) {
          display: flex;
          flex-direction: row;
          align-items: center;
          column-gap: 30px;
          margin-top: 0;
        }
      }

      .buttons-container.open {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 18px;
        margin-top: 30px;

        @media only screen and (min-width: 768px) {
          display: flex;
          flex-direction: row;
          align-items: center;
          column-gap: 40px;
          margin-top: 0;
        }
      }

      a {
        display: flex;
        gap: 10px;
        align-items: center;
        text-decoration: none;
        padding: 10px 5px;

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

        svg {
          width: 41px;
          height: 20.5px;

          @media only screen and (min-width: 1024px) {
            width: 45px;
            height: 22.5px;
          }
        }

        &:focus {
          outline: 3px solid var(--primary);
          outline-offset: 2px;
          border-radius: 10px;
        }

        &:focus-visible {
          outline: 3px solid var(--secondary);
          outline-offset: 2px;
          border-radius: 10px;
        }

        &:hover {
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        }

        &:active svg path {
          fill: var(--text-900);
        }

        &:active span {
          color: var(--primary);
        }

        @media only screen and (min-width: 768px) {
          &:hover {
            box-shadow: none;
            font-weight: var(--font-weight-bold);
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
        width: 48px;
        height: 40px;

        &:focus {
          outline: 3px solid var(--primary);
          outline-offset: 2px;
          border-radius: 10px;
        }

        &:focus-visible {
          outline: 3px solid var(--secondary);
          outline-offset: 2px;
          border-radius: 10px;
        }

        &:hover {
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        }

        &:active svg path {
          fill: var(--primary);
        }

        @media only screen and (min-width: 768px) {
          display: none;
        }
      }

      button > svg {
        width: 18px;
        height: 17px;
        top: 12px;
        left: 14px;
        position: absolute;
        opacity: 1;
        transition: opacity 200ms ease-in-out;
      }

      button > svg.hide {
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
          <a href="/" aria-label="Go to the homepage of DaleStudy">
            <svg
              id="logo"
              width="45"
              height="22"
              viewBox="0 0 45 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.84 19.03L0.29 12.61V10.51L14.84 3.25V6.76L4.82 11.41L14.84 15.52V19.03ZM28.408 0.579999L20.428 22H16.378L24.358 0.579999H28.408ZM29.8505 15.52L39.8705 11.41L29.8505 6.76V3.25L44.4005 10.51V12.61L29.8505 19.03V15.52Z"
                fill="url(#paint0_linear_278_133)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_278_133"
                  x1="-1"
                  y1="9.51219"
                  x2="46"
                  y2="9.51219"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="var(--secondary)" />
                  <stop offset="1" stop-color="var(--primary)" />
                </linearGradient>
              </defs>
            </svg>
            <span>달레 스터디</span>
          </a>
          <button aria-label="menu button">
            <svg
              id="menuIcon"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H18V2.83333H0V0ZM0 7.08333H18V9.91667H0V7.08333ZM0 14.1667H18V17H0V14.1667Z"
                fill="var(--text-900)"
              />
            </svg>
            <svg
              id="closeIcon"
              class="hide"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.46 7.54208L14 13.0821V14.5421H12.54L7 9.00208L1.46 14.5421H0V13.0821L5.54 7.54208L0 2.00208V0.542084H1.46L7 6.08208L12.54 0.542084H14V2.00208L8.46 7.54208Z"
                fill="var(--text-900)"
              />
            </svg>
          </button>
        </div>

        <div class="buttons-container">
          <ds-button-link href="#steps-section" size="small" variant="ghost"
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
