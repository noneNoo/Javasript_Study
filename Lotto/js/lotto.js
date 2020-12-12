// 배열을 담을 공간
let winNums = [];
let bonusBallNum = [];
let myNums = [];
let overlapNumber = [];

// 랜덤한 번호를 추출하는 함수
function createWinNums() {
  // 45개의 배열을 만들기
  const candidate = Array(45)
    // fill메서드로 배열들을 undefind 로 만든다
    .fill()
    // map메서드로 배열들에 index값을 부여한다
    .map((arr, index) => index + 1);

  const shuffle = [];

  // while문을 돌 때마다 candidate 에서 배열이 하나씩 빠지고
  // shuffle에 배열이 push된다
  while (candidate.length > 0) {
    // const value = candidate.splice(Math.floor(Math.random() * candidate.length),1);
    // 후보군 중 랜덤한 숫자 임의로 뽑기
    const random = Math.floor(Math.random() * candidate.length);
    // splice 메서드를 이용하여 배열에서 랜덤한 값을 1개 잘라온다
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
  }

  // 당첨 번호, 보너스 번호
  winNums = shuffle.slice(0, 6);
  bonusBallNum = [shuffle[6]];

  // 당첨 번호 오름차수 정렬하기
  winNums.sort((prev, curr) => {
    // return하는 값이 0보다 크면 순서를 바꾼다
    return prev - curr;
  });

  // 내 번호와 당첨번호의 교집합
  overlapNumber = myNums.filter((element) => !winNums.includes(element));
  console.log(overlapNumber);
}

// 결과 페이지의 html 뼈대를 만들어주는 함수
function PaintResultPage() {
  console.log(winNums);
  console.log(bonusBallNum);
  contentReset('당첨 결과');
  // 내 번호 오름차수 정렬하기
  myNums = userPickNumber.slice().sort((prev, curr) => {
    // return하는 값이 0보다 크면 순서를 바꾼다
    return prev - curr;
  });

  // result 태그의 생성
  const resultDiv = document.createElement('div');
  resultDiv.id = 'result';

  // 결과 볼 컨테이너 생성
  const winBallsDiv = document.createElement('div');
  winBallsDiv.id = 'win-balls';
  winBallsDiv.classList.add('balls');

  // result title 태그의 생성
  const resultTitle = document.createElement('h3');
  resultTitle.classList = 'result-title';
  resultTitle.innerHTML = '1등 번호';

  resultDiv.appendChild(resultTitle);

  // 물음표 모양의 article 6개 생성
  for (let i = 0; i < 6; i++) {
    const winBallArticle = document.createElement('article');
    winBallArticle.className = 'ball winball question';
    winBallArticle.innerHTML = '?';
    // 조립
    resultDiv.appendChild(winBallArticle);
  }

  // plus icon 생성
  const plusIconDiv = document.createElement('div');
  plusIconDiv.id = 'plus-icon';
  plusIconDiv.innerHTML = `
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-plus"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
  `;
  resultDiv.appendChild(plusIconDiv);

  // 보너스 번호 태그 생성
  const bonusBallContainerDiv = document.createElement('div');
  bonusBallContainerDiv.id = 'bonus-ball';
  const bonusBallArticle = document.createElement('article');
  bonusBallArticle.className = 'ball bounsball question';

  // 조립
  bonusBallContainerDiv.appendChild(bonusBallArticle);
  resultDiv.appendChild(bonusBallContainerDiv);
  contentContainer.appendChild(resultDiv);

  // -- 내 번호 화면에 출력

  const myResultDiv = document.createElement('div');
  myResultDiv.id = 'my-result';

  const myResultTitle = document.createElement('h3');
  myResultTitle.classList = 'result-title';
  myResultTitle.innerHTML = '내 번호';

  // 조립
  myResultDiv.appendChild(myResultTitle);

  // 리팩토링 필요 (동일부분 반복)
  // 유저가 고른 공6개 보여줄 div 만들기
  for (let i = 0; i < 6; i++) {
    const myResultArticle = document.createElement('article');
    myResultArticle.className = 'ball myball';
    // 조립
    myResultDiv.appendChild(myResultArticle);
  }

  const overlapContainer = document.createElement('h3');
  overlapContainer.classList.add('result-sub');
  overlapContainer.innerHTML = `${overlapNumber.length}개 일치!`;

  // 조립
  contentContainer.appendChild(myResultDiv);
  contentContainer.appendChild(overlapContainer);

  // 전부 조립한 후에 결과를 출력하는 함수 실행
  paintWinballResult();

  // 내 번호 색상 입히기
  // 위치 이상해
  document.querySelectorAll('.myball').forEach((ballElem, index) => {
    paintBall(ballElem, myNums, index);
  });
}

// html에 공을 그려주는 함수
// 인자로 공element를 하나씩 받고
// 보너스번호, 당첨번호 array를 받고
// array의 index를 받는다
function paintBall(ballElem, arrayName, index) {
  const ballNumber = arrayName[index];
  ballElem.classList.remove('question');
  ballElem.classList.add('ball');

  if (ballNumber <= 10) {
    ballElem.classList.add('yellow');
  } else if (ballNumber <= 20) {
    ballElem.classList.add('blue');
  } else if (ballNumber <= 30) {
    ballElem.classList.add('red');
  } else if (ballNumber <= 40) {
    ballElem.classList.add('black');
  } else {
    ballElem.classList.add('green');
  }

  ballElem.innerHTML = arrayName[index];
}

// winball의 값을 받아와 결과를 출력하는 함수
function paintWinballResult() {
  // 공 자체를 가져오기
  const winballElems = document.querySelectorAll('.winball');
  const bonusballElem = document.querySelector('.bounsball');

  // 화면에 0.5초에 한개씩 공 그려주기
  winballElems.forEach((ballElem, index) => {
    setTimeout(() => {
      paintBall(ballElem, winNums, index);
    }, 500 * (index + 1));
  });

  // 보너스 공은 3.5초째에 그려주기
  setTimeout(() => {
    paintBall(bonusballElem, bonusBallNum, 0);
  }, 3500);
}
