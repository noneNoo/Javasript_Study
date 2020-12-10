// 45개의 배열을 만들기
const candidate = Array(45)
  // fill메서드로 배열들을 undefind 로 만든다
  .fill()
  .map((arr, index) => index + 1);

console.log(candidate);
