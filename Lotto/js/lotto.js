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

const winBalls = shuffle.slice(0, 6);
const bonusBall = shuffle[6];
