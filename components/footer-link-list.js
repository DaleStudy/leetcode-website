import { css, html } from "../html-css-utils.js";

class FooterLinkList extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.createCss() + this.createHtml();
  }

  createCss() {
    return css`
      ul {
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        height: 100%;
        font-size: 16px;
        color: var(--bg-100);

        @media only screen and (min-width: 768px) {
          flex-direction: row;
          align-items: center;
          column-gap: 20px;
        }

        @media only screen and (min-width: 1024px) {
          column-gap: 80px;
        }
      }

      li {
        color: var(--bg-100);
        font-size: 16px;
      }

      a {
        padding: 15px;
      }

      a:focus {
        outline: 3px solid var(--primary);
        outline-offset: 2px;
        border-radius: 10px;
      }

      a:focus-visible {
        outline: 3px solid var(--secondary);
        outline-offset: 2px;
        border-radius: 10px;
      }

      a:hover {
        font-weight: bold;
      }

      a:active {
        color: var(--primary);
      }
    `;
  }

  createHtml() {
    return html`<ul>
      <li>
        <a
          href="https://github.com/DaleStudy/leetcode-study/discussions/54"
          target="_blank"
        >
          FAQ
        </a>
      </li>

      <li>
        <a
          href="https://github.com/DaleStudy/leetcode-study/discussions/52"
          target="_blank"
        >
          Apply
        </a>
      </li>

      <li>
        <a
          href="https://github.com/DaleStudy/leetcode-study/blob/main/CONTRIBUTING.md"
          target="_blank"
        >
          Guide
        </a>
      </li>
    </ul>`;
  }
}

customElements.define("ds-footer-link-list", FooterLinkList);
