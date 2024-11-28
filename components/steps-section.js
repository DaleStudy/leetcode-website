import { html, css } from "../html-css-utils.js";
import { APPLICATION_URL, DISCORD_URL, PROJECT_URL } from "../data.js";

class StepsSection extends HTMLElement {
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
      :host {
        display: block;
        background-color: var(--bg-200);
      }

      section {
        max-width: 1550px;
        margin: 0 27px;
        padding: 100px 0;

        @media only screen and (min-width: 768px) {
          width: 80%;
          margin: 0 auto;
        }

        @media only screen and (min-width: 1024px) {
          padding: 149px 0;
        }
      }
    `;
  }

  createHtml() {
    return html`
      <section>
        <ds-hero>스터디 참여방법</ds-hero>
        <ds-step-list>
          <ds-step step="1" icon-src="images/icon_step1.png">
            <p slot="content">
              현재 스터디 2기(2024년 8/11~11/23)가 진행중이에요. 11/30에
              시작하는 다음 기수 스터디 참여를 원한다면
              <ds-step-text-link link="${APPLICATION_URL}">
                여기
              </ds-step-text-link>
              에서 신청할 수 있어요.
            </p>
          </ds-step>
          <ds-step step="2" icon-src="images/icon_step2.png">
            <p slot="content">
              답안 제출과 확인은 깃허브를 통해 이루어져요. 스터디 전체
              진행상황을 알고 싶다면
              <ds-step-text-link link="${PROJECT_URL}">
                프로젝트 보드
              </ds-step-text-link>
              를 통해 파악할 수 있어요.
            </p>
          </ds-step>
          <ds-step step="3" icon-src="images/icon_step3.png">
            <p slot="content">
              스터디 멤버 간에 친밀감을 쌓기 위해
              <ds-step-text-link link="${DISCORD_URL}">
                디스코드
              </ds-step-text-link>
              에서 자율적인 대화와 모임을 가져요. 함께 코딩 시험/면접 준비를
              하고 해외 취업 관련한 유용한 정보도 공유하고 있어요.
            </p>
          </ds-step>
        </ds-step-list>
      </section>
    `;
  }
}

customElements.define("ds-steps-section", StepsSection);
