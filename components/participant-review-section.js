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
        <ds-hero>참여자 후기</ds-hero>
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
          <ds-participant-review
            author-img-src="https://avatars.githubusercontent.com/u/98512859"
            content="어떤 주는 5일 동안 하루에 한 문제씩, 또 다른 주는 하루만에 몰아서 다섯 문제를. 그렇게 조금씩 알고리즘 문제를 푼지 벌써 15주나 지났다는게 믿기지 않습니다.
비슷한 목표를 가진 사람들과 함께이기에 꾸준히 문제풀이를 해낼 수 있었고, 다른 분들께 조금이라도 도움이 되었으면 좋겠다는 생각으로 풀이를 적다보니 코드도 좀 더 꼼꼼하게 쓸 수 있었습니다.
혼자 문제 푸는 것이 어려우신 분, 본인의 생각을 남들에게 전달하는게 익숙하지 않은 분, 성숙하게 피드백을 주고받는 연습이 필요하신 분들께 이 스터디를 강력 추천합니다."
            author="Dongyeong Chon"
            author-link="https://github.com/obzva"
          ></ds-participant-review>
          <ds-participant-review
            author-img-src="https://avatars.githubusercontent.com/u/81678439"
            content="15주가 정말 순식간에 지나갔네요. 직장 생활과 병행하면서 알고리즘 풀이를 하려니 정말 힘들긴 했지만 그만큼 보람찹니다!

제가 생각하는 이 스터디의 장점은 두가지 인데요,
첫째는 '자율적인 꾸준함'을 만들기 좋았다는 점입니다. 강제성이 있는것은 아니다보니 심적인 부담감이 덜하지만, 따라갈 수 있는 명확한 목표가 제시된다는 점이 바쁜 와중에도 따라갈 좋은 동기가 부여 되었습니다.
둘째로는, 단순히 번호순 혹은 난이도순 풀이가 아니라 비슷한 카테고리의 알고리즘을 순차적으로 접할 수 있도록 편성된 달레님의 문제 큐레이션이 굉장히 좋았습니다. 아마 함께하신 분들도 참여하는 과정에서 모두가 느끼셨을텐데, '어? 이거 지난 주 문제의 심화버전인것 같네?' 하면서 복습과 심화과정을 함께 다룰 수 있었습니다.

그리고 또하나의 특장점은, 상호 리뷰하고 풀이를 공유하는 과정에서 다른분들의 참여와 풀이를 보면서 또 자연스러운 동기부여가 되었습니다.
특히 몇몇 분들은 거의 기술 아티클 수준으로 뇌리에 박히는 풀이를 작성해주셔서 아마 후에 참여하시는 분들은 과거 풀이 기록들을 찾아보시는것도 도움이 많이 될 것 같네요.

다음에도 이런 기회가 또 있다면 꼭 다시 참여하고싶습니다. 알고리즘 문제 풀이의 꾸준함이 필요하신 분들, 꼭 해외 취업을 준비하시는 분들이 아니더라도 이 스터디를 추천드립니다."
            author="Heechan Kang"
            author-link="https://github.com/HC-kang"
          ></ds-participant-review>
          <ds-participant-review
            author-img-src="https://avatars.githubusercontent.com/u/58398099"
            content="다른 알고리즘 스터디와 달리 인터뷰를 가정하고 코드를 작성했던 점이 가장 달랐던 것 같습니다.

만약 내가 인터뷰어라면 어떤 점을 물어볼지, 내가 인터뷰이로서 어떤 식으로 대답을 해야할지 시뮬레이션을 해볼 수 있어 좋았습니다. 그러다보니 어떻게 변수와 로직을 구현해야 논리가 명확할지, 이 논리를 내가 이해하고 상대를 설득하려면 어떤 식으로 설명해야 할지를 15주 동안 고민한 경험을 할 수 있었다고 말씀드리고 싶습니다.

이전에도 알고리즘 문제들을 풀어보기는 했지만, 단순히 알고리즘 온라인 저지 시스템 사이트에서 Pass or Fail만 확인 했었는데, 시간복잡도와 공간복잡도를 문제마다 계산해보고 내가 구상한 알고리즘을 다른 사람이 볼 때 어떨지를 고려하며 문제를 푸는 경험을 통해 많이 배울 수 있었습니다. 또한 같은 문제를 가능한 여러 방법으로 풀어보고 제약 조건을 추가해보기도 하며 고민해보는 경험도 좋았습니다.

15주간의 스터디를 마치며, Blind 75라는 좋은 문제집을 각 문제별 연계와 확장을 고려해서 주차 별로 배치하여 여러 사람들과 함께 공부할 수 있는 자리를 마련해주신 Dale님께 감사를 표합니다."
            author="EGON"
            author-link="https://github.com/lymchgmk"
          ></ds-participant-review>
          <ds-participant-review
            author-img-src="https://avatars.githubusercontent.com/u/89735640"
            content="먼저 15주 간 스터디를 이끌어 주신 @DaleSeo 님과 @SamTheKorean 님 및 코치분들께 감사인사를 드립니다.
덕분에 혼자서 하기 어려웠던 꾸준한 알고리즘 스터디를 완주할 수 있었습니다.

혼자서 공부할때 느꼈던 막혔을 때의 어려움을 풀 수 있는 수단으로서 큰 도움이 됐습니다. 다른 스터디원들의 풀이 또는 달레님의 해설은 빠른 트러블 슈팅과 알고리즘 풀이 시야를 빠르게 넓히는데 효과적이었습니다.
또한, 매주 온라인 스터디를 진행하는데 이때 풀이를 설명하는 경험이 이해의 깊이를 늘리는데 효과적이었고, 실제 인터뷰 과정과도 유사해 추후 커리어 확장에도 긍정적인 영향을 기대할 수 있었습니다.
그리고 간간히 여러 나라와 근무 환경에 있는 스터디원들과의 경험/근황 공유 및 스몰 토크도 유익하고 즐거웠습니다.

앞으로도 이렇게 유익한 해외취업 알고리즘 스터디로 긍정적인 영향을 받은 분들이 더 많아지면 좋겠습니다.
감사합니다!"
            author="jaejeong1"
            author-link="https://github.com/jaejeong1"
          ></ds-participant-review>
          <ds-participant-review
            author-img-src="https://avatars.githubusercontent.com/u/63578094"
            content="저는 코딩테스트를 잘 알지는 못하지만 그렇다고 모르지 않는 수준의 개발자였어요. 매번 공부하다가 중간에 포기하고 매번 스택, 큐, bfs정도의 레벨까지만 풀고 dp같이 어려운 문제를 만나면 다음에 해야지 하는 날이 많았어요. 중간에 포기하는 사람 같아서 이번에 달레스터디를 통해 1문제씩이라도 15주 동안 완주해 보는 사람이 되고자 스터디에 참여했습니다.
달레스터디를 꾸준히 할 수 있었던 건 구성이 좋은 커리큘럼과 스터디원들과 소통하는 점이 제가 완주할 수 있었던 이유였어요. 매주 easy 난이도부터 medium 많게는 hard까지 풀 수 있었는데, 유형이 비슷한 문제가 다음 주에도 나오는 경우도 있어 다시 한번 회고하며 머릿속에 영구저장되는 경험을 했어요. 그리고 스터디원들과 대화를 하면서 내가 몰랐던 부분, 다른 사람의 접근 방식을 간접적으로 들으면서 문제에 대한 접근 방식을 알게 되어 문제 울렁증을 극복할 수 있었어요.
만약 달레스터디를 고민하시는 분이 계신다면 무조건 추천하며, 준비물은 스터디원들과 적극적으로 소통하는 마음가짐을 가지고 오는 것을 추천합니다!"
            author="이선재"
            author-link="https://github.com/Sunjae95"
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
