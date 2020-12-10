// 공을 그릴 부모태그를 가져오기
const resultElem = document.querySelector('#result');
const bonusElem = document.querySelector('#bonus');

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
const winNums = shuffle.slice(0, 6);
const bonusBallNum = shuffle[6];

// 당첨 번호 오름차수 정렬하기
winNums.sort((prev, curr) => {
  // return하는 값이 0보다 크면 순서를 바꾼다
  return prev - curr;
});
console.log(winNums);

// html에 공을 그려주는 함수
function paintBall(number, elem) {
  const ballElem = document.createElement('article');
  // 공 기본 스타일링
  ballElem.classList.add('ball');

  // 크기에 따라 색상 스타일링
  if (number <= 10) {
    ballElem.classList.add('yellow');
  } else if (number <= 20) {
    ballElem.classList.add('blue');
  } else if (number <= 30) {
    ballElem.classList.add('red');
  } else if (number <= 40) {
    ballElem.classList.add('black');
  } else {
    ballElem.classList.add('green');
  }

  ballElem.innerText = number;
  elem.appendChild(ballElem);
}

// html에 공 생성해주기
winNums.forEach((number) => {
  paintBall(number, resultElem);
});

paintBall(bonusBallNum, bonusElem);
