import { html, css } from "../html-css-utils.js";

class ParticipantReviewsSection extends HTMLElement {
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
        <ds-hero>참가자 후기</ds-hero>
        <ds-participant-review-list>
          <ds-participant-review
            author-img-src="images/participant_1.jpeg"
            content="우연히 링크드인에서 모집 공고를 보았습니다. 저는 '언젠가는 외국에서 일을 해보고 싶다'는 생각을 가지고 있는 사람 중 한명이였기 때문에 기대되는 마음으로 신청하여 참여하고 있습니다. <br/>
          이 스터디에는 이미 해외에 계신분들도 있으시고, 현재 해외에 계신 분들도 있으셔서 해외 취업과 관련된 많은 정보를 듣고 이야기 나눌 수 있어서 좋았습니다. <br/>
          다른 사람들과 함께 스터디 하기 때문에 혼자서 할 때보다 알고리즘을 꾸준히 풀어나갈 수 있도록 동기 부여가 되는 부분이 좋았고, 서로의 작성한 코드를 확인하며 피드백 할 수 있다는 점이 좋았습니다. <br/>
          해외 취업을 준비하시는 분들께 좋은 기회가 될 것 이라고 생각합니다."
            author="Jonghoon Park"
            author-link="https://www.linkedin.com/in/dev-jonghoonpark"
          ></ds-participant-review>
          <ds-participant-review
            author-img-src="images/human_2.png"
            content="미국에서 취업을 생각하는 중, 어떻게 코딩 인터뷰를 준비해야 할지 몰라 참 막막했습니다. <br />
          그렇게 혼자 공부를 하던 중 링크드인 공고를 보게 되었고, 고민도 없이 스터디 신청을 했습니다. <br />
          기대했던 대로 다양한 배경의 개발자분들을 만나게 되었고, 함께 즐거운 마음으로 스터디를 진행하고 있습니다. <br />
          좋은 동료들과 함께하니 그 어느 때보다 확실한 동기부여가 되어 공부하게 되었을 뿐 아니라, 혼자 풀었다면 지나쳤을 법한 내용들까지 알차게 챙겨가고 있습니다. 또한 단순히 리트코드 문제풀이뿐 아니라, 영어 면접 연습도 병행하며 꾸준히 앞으로 나아가고 있습니다. <br />
          한 주 한 주 함께 공부하는 요즘 참 감사하고 즐겁습니다."
            author="Byunghyun Kim"
          ></ds-participant-review>
          <ds-participant-review
            author-img-src="images/human_4.png"
            content="세달 전 쯤 조금은 무모하지만 무계획으로 새로운 도전을 위해 캐나다행 비행기표를 산 뒤 막막한 마음에 정보를 얻기 위해 링크드인을 시작했습니다. <br />
          그러던 중 우연히 달레님이 올려주신 글을 보았고 디스코드 커뮤니티까지 찾아들어오게 되었습니다. <br />
          커뮤니티에 들어가보니 저와 비슷하게 해외취업을 준비하시는 분들이 계셔서 같이 준비하면 좋을 것 같아 여러 스터디를 생각하던 중 리트코드 스터디를 건의드려 참가자들을 모집하고 blind 75 일주일에 다섯 문제 풀기 도전을 시작했습니다. <br />
          지금까지 개인적으로 꾸준히 풀기에 여러 번 실패했지만, 이번엔 여러 인원들과 함께하니 책임감이 생겨서 제일 멀리왔습니다. <br />
          몰랐던 자료구조들을 공부하고 선배 개발자분들께 코드 리뷰도 받는 등 주니어 개발자로서 하기 어려운 값진 경험을 하고 있습니다. 이제 절반이나 온 만큼 남아계신 분들은 끝까지 완주했으면 좋겠습니다!ㅎㅎ"
            author="Sam Lee"
          ></ds-participant-review>
          <ds-participant-review
            author-img-src="images/participant_2.jpeg"
            content="‘언젠가는 해외에서 일을 해봐야지!’ 라는 생각을 하던 시점에 운좋게도 링크드인에서 달레님의 스터디원 모집 글을 접하였습니다. 해외 취업을 위해 리트코드 문제 풀기는 필수라고 느꼈지만 당시 어떤 문제를, 얼마나 풀어야할지 몰랐기에 모든 게 막연했습니다. 리트코드 스터디는 그런 점에서 입문자에게 방향과 전략을 잡아준 고마운 곳입니다. <br />
          한주 한주 문제를 풀어나가는 게 점점 어려워졌지만 이곳에서는 걱정할 게 많지 않았습니다. 실력과 경험에 상관없이 서로를 응원하고 모두 즐겁게 대화에 참여할 수 있었기 때문입니다. 또한 모든 문제마다 달레님의 친절한 풀이를 참고할 수 있어 부담이 덜하기도 했습니다. <br />
          지금 돌아보니 정말 성실하고, 다재다능한 분들의 이야기를 듣고 나눌 수 있어 즐겁고 유익한 시간이었습니다. <br />
          참가자 분들 어디에서든 모두 좋은 결과를 이루어내시리라 믿습니다 화이팅!"
            author="Borahm Lee"
            author-link="https://www.linkedin.com/in/borahm-lee-4ba97a170"
          ></ds-participant-review>
          <ds-participant-review
            author-img-src="images/human_1.png"
            content="두번째 인턴을 준비하면서 Blind 75를 다시 시작했지만 동기부여를 얻지 못하고 있었습니다. 때마침 달레님의 디스코드 채널포스팅을 보게됐고, 한국에 계시는 분들은 DSA 공부를 어떻게 하고 계시는지 궁금해졌습니다. 채널에서 같은 목표를 가지신 분들과 함께 스터디를 시작했고, 매주 각자 책임감을 가지고 빈칸을 채워가고 있습니다. <br />
          LeetCode 자체에 대한 평가는 차치하더라도, 개발자 취업에서 DSA 문제풀이는 꾸준히 안고가야하는 숙제같습니다. 매번 풀어도 다시보면 또 새로운 기분이 들기에, 완벽함보다는 꾸준함이 더 요구되는 부분이라 생각합니다. 이러한 부분을 채워가며 함께 공부하는 스터디에 많은 분들이 참여해서 좋은 결과를 얻어가셨으면 좋겠습니다 😃"
            author="UBC 재학생"
          ></ds-participant-review>
          <ds-participant-review
            author-img-src="images/participant_3.jpeg"
            content="아직 스터디가 마무리되지 않았지만, 현재까지의 후기를 작성해봅니다. 이 스터디 덕분에 정기적으로 알고리즘 문제를 풀 수 있었는데요. 혼자서 매주 알고리즘 문제를 5개씩 풀기는 어렵지만, 스터디 그룹과 함께 하니 지속할 수 있었습니다. 이는 스터디 그룹의 기본적인 장점으로, 이 알고리즘 스터디는 그 기능을 완벽하게 수행했다고 생각해요. <br />
          이 스터디는 자유와 책임의 균형이 잘 맞춰져 있습니다. 매주 깃허브 레포지토리에 할당된 문제의 소스 코드를 올리면 되고, 정기적으로 온라인 모임을 통해 그 주 문제에 대해 이야기할 수도 있습니다. 물론, 이는 필수는 아니어서 부담 없이 참여할 수 있었습니다. <br />
          스터디에 모인 사람들도 중요했습니다. 운이 좋게도 스터디에 적극적인 멤버들과 함께할 수 있었고, 스터디 기간 중후반까지 높은 참여율을 유지할 수 있었습니다. 이는 달레님의 커뮤니티에 대한 지속적인 관심과 노력 덕분이라 생각합니다. 달레님의 정성과 노력에 저를 포함한 스터디 멤버들이 잘 응답했다고 생각해요. 저희 스터디 멤버들에게 감사하고 여러분들이 자랑스러워요!"
            author="Evan Suhyeong Lee"
            author-link="https://github.com/sounmind"
          ></ds-participant-review>
          <ds-participant-review
            author-img-src="images/human_3.png"
            content="LeetCode Blind 75 완주를 목표로 매주 5문제씩 꾸준히 풀고 있습니다. 서로의 코드를 리뷰하고 피드백을 주고받으며 많은 것을 배웠어요. 해외 취업을 목표로 하는 분들에게 유익한 정보와 동기부여가 되며, 함께 공부하는 멤버들과 알차게 매주를 채워나가고 있습니다. <br /> 
        자기주도적으로 배움과 동기를 얻고 싶은 분들께 강력히 추천합니다."
            author="Helena Park"
            author-link="https://www.linkedin.com/in/yolophg"
          ></ds-participant-review>
        </ds-participant-review-list>
      </section>
    `;
  }
}

customElements.define(
  "ds-participant-reviews-section",
  ParticipantReviewsSection
);
