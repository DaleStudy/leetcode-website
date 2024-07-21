import { css, html } from "../html-css-utils.js";

class IconLinkList extends HTMLElement {
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
      section {
        display: flex;
        align-items: center;
        column-gap: 40px;
      }

      a {
        position: relative;
        display: block;
        padding: 13px 15px;
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

      a:hover > svg {
        transform: scale(1.1);
      }

      a:active {
        color: var(--primary);
      }

      a:active > svg {
        color: var(--primary);
      }
    `;
  }

  createHtml() {
    return html`<section>
      <a href="https://www.algodale.com/" target="_blank" aria-label="Visit the Algodale website">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fdfdff"
        >
          <path
            fill="currentColor"
            d="M16.3456 24C20.5301 24 23.9291 20.5912 23.9528 16.4296L24 10.3021L23.9291 9.9688L23.728 9.54933L23.388 9.2864C22.9467 8.94 20.7091 9.30987 20.1067 8.76267C19.6792 8.37227 19.6125 7.66693 19.4832 6.71093C19.2429 4.85947 19.0909 4.76293 18.8008 4.1352C17.748 1.9064 14.8893 0.231467 12.9256 0H7.60613C3.42133 0 0 3.41387 0 7.58347V16.4296C0 20.5912 3.42133 24 7.60613 24H16.3456ZM7.70293 6.19547H11.9203C12.7256 6.19547 13.3776 6.84907 13.3776 7.64347C13.3776 8.43467 12.7256 9.0936 11.9203 9.0936H7.70293C6.8976 9.0936 6.24693 8.4344 6.24693 7.64347C6.24693 6.84907 6.8976 6.19547 7.70293 6.19547ZM6.24693 16.3176C6.24693 15.5235 6.8976 14.8747 7.70293 14.8747H16.2723C17.0723 14.8747 17.7219 15.5235 17.7219 16.3176C17.7219 17.1011 17.0723 17.7603 16.2723 17.7603H7.70293C6.8976 17.7603 6.24693 17.1013 6.24693 16.3176Z"
          />
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/daleseo/" target="_blank" aria-label="Visit Dale's LinkedIn profile">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fdfdff"
        >
          <path
            fill="currentColor"
            d="M21.3333 0C22.0406 0 22.7189 0.280951 23.219 0.781048C23.719 1.28115 24 1.95942 24 2.66667V21.3333C24 22.0406 23.719 22.7189 23.219 23.219C22.7189 23.719 22.0406 24 21.3333 24H2.66667C1.95942 24 1.28115 23.719 0.781048 23.219C0.280951 22.7189 0 22.0406 0 21.3333V2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0H21.3333ZM20.6667 20.6667V13.6C20.6667 12.4472 20.2087 11.3416 19.3936 10.5264C18.5784 9.71128 17.4728 9.25333 16.32 9.25333C15.1867 9.25333 13.8667 9.94667 13.2267 10.9867V9.50667H9.50667V20.6667H13.2267V14.0933C13.2267 13.0667 14.0533 12.2267 15.08 12.2267C15.5751 12.2267 16.0499 12.4233 16.3999 12.7734C16.75 13.1235 16.9467 13.5983 16.9467 14.0933V20.6667H20.6667ZM5.17333 7.41333C5.76742 7.41333 6.33717 7.17733 6.75725 6.75725C7.17733 6.33717 7.41333 5.76742 7.41333 5.17333C7.41333 3.93333 6.41333 2.92 5.17333 2.92C4.57571 2.92 4.00257 3.1574 3.57999 3.57999C3.1574 4.00257 2.92 4.57571 2.92 5.17333C2.92 6.41333 3.93333 7.41333 5.17333 7.41333ZM7.02667 20.6667V9.50667H3.33333V20.6667H7.02667Z"
          />
        </svg>
      </a>

      <a href="https://github.com/DaleStudy/leetcode-study" target="_blank" aria-label="Visit the Algorithm study group's GitHub repository">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fdfdff"
        >
          <path
            fill="currentColor"
            d="M12.2979 0C10.6829 0 9.08376 0.318095 7.59171 0.936124C6.09966 1.55415 4.74395 2.46001 3.60198 3.60198C1.29567 5.90829 0 9.03631 0 12.2979C0 17.7336 3.5295 22.3453 8.41178 23.981C9.02668 24.0793 9.22344 23.6981 9.22344 23.3661C9.22344 23.0832 9.22344 22.3084 9.22344 21.2877C5.81692 22.0256 5.09134 19.6398 5.09134 19.6398C4.52564 18.2132 3.72627 17.832 3.72627 17.832C2.60716 17.0695 3.81236 17.0941 3.81236 17.0941C5.04215 17.1802 5.69394 18.3608 5.69394 18.3608C6.76386 20.2301 8.57165 19.6767 9.27263 19.3815C9.38332 18.5822 9.70306 18.0411 10.0474 17.7336C7.31726 17.4262 4.45185 16.3685 4.45185 11.683C4.45185 10.318 4.91917 9.22344 5.71853 8.35029C5.59556 8.04284 5.16513 6.76386 5.84151 5.10364C5.84151 5.10364 6.87454 4.77159 9.22344 6.35803C10.195 6.08747 11.2526 5.9522 12.2979 5.9522C13.3432 5.9522 14.4009 6.08747 15.3724 6.35803C17.7213 4.77159 18.7543 5.10364 18.7543 5.10364C19.4307 6.76386 19.0003 8.04284 18.8773 8.35029C19.6767 9.22344 20.144 10.318 20.144 11.683C20.144 16.3808 17.2663 17.4139 14.5238 17.7213C14.9666 18.1025 15.3724 18.8527 15.3724 19.9964C15.3724 21.6443 15.3724 22.9725 15.3724 23.3661C15.3724 23.6981 15.5692 24.0916 16.1964 23.981C21.0786 22.333 24.5958 17.7336 24.5958 12.2979C24.5958 10.6829 24.2778 9.08376 23.6597 7.59171C23.0417 6.09966 22.1358 4.74395 20.9939 3.60198C19.8519 2.46001 18.4962 1.55415 17.0041 0.936124C15.5121 0.318095 13.9129 0 12.2979 0Z"
          />
        </svg>
      </a>

      <a href="https://www.youtube.com/@DaleSeo" target="_blank" aria-label="Visit Dale's YouTube channel">
        <svg
          width="25"
          height="18"
          viewBox="0 0 25 18"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fdfdff"
        >
          <path
            fill="currentColor"
            d="M23.4017 1.76818C24.121 2.5016 24.3557 4.16708 24.3557 4.16708C24.3557 4.16708 24.5957 6.12336 24.5957 8.07889V9.9128C24.5957 11.8691 24.3557 13.8246 24.3557 13.8246C24.3557 13.8246 24.121 15.4901 23.4017 16.2235C22.5794 17.0911 21.6676 17.1808 21.1522 17.2314C21.0955 17.237 21.0436 17.2421 20.9972 17.2477C17.6387 17.4924 12.5957 17.5 12.5957 17.5C12.5957 17.5 6.3557 17.4426 4.4357 17.2568C4.34473 17.2397 4.23446 17.2264 4.10958 17.2113C3.5014 17.1378 2.54683 17.0225 1.78895 16.2235C1.0697 15.4901 0.835703 13.8246 0.835703 13.8246C0.835703 13.8246 0.595703 11.8691 0.595703 9.9128V8.07889C0.595703 6.12336 0.835703 4.16708 0.835703 4.16708C0.835703 4.16708 1.0697 2.5016 1.78895 1.76818C2.6131 0.899349 3.52576 0.810675 4.04118 0.760597C4.09707 0.755167 4.14828 0.750191 4.1942 0.744724C7.5527 0.5 12.5905 0.5 12.5905 0.5H12.601C12.601 0.5 17.6387 0.5 20.9972 0.744724C21.0431 0.750199 21.0944 0.755182 21.1503 0.760621C21.6653 0.810704 22.5784 0.89949 23.4017 1.76818ZM10.117 5.34387L10.1177 12.135L16.6015 8.75112L10.117 5.34387Z"
          />
        </svg>
      </a>
    </section>`;
  }
}

customElements.define("ds-icon-link-list", IconLinkList);
