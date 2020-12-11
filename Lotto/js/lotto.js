// 공을 그릴 부모태그를 가져오기
// const resultElem = document.querySelector('#win-balls');
// const bonusElem = document.querySelector('#bonus-ball');

// 공 자체를 가져오기
const winballElems = document.querySelectorAll('.winball');
const bonusballElem = document.querySelector('.bounsball');

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
const bonusBallNum = [shuffle[6]];

// 당첨 번호 오름차수 정렬하기
winNums.sort((prev, curr) => {
  // return하는 값이 0보다 크면 순서를 바꾼다
  return prev - curr;
});

// html에 공을 그려주는 함수
// 인자로 ballElement를 하나씩 받고
// 보너스번호, 당첨번호 array를 받고
// array index를 받는다
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

winballElems.forEach((ballElem, index) => {
  setTimeout(() => {
    paintBall(ballElem, winNums, index);
  }, 500 * (index + 1));
});

setTimeout(() => {
  paintBall(bonusballElem, bonusBallNum, 0);
}, 3500);
