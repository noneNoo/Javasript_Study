//  * - 변수 지정하기
let backToTop = document.getElementById('back-to-top'),
  // document 자체를 의미합니다
  docElem = document.documentElement,
  // document 길이의 4분의 1정도를 저장해줄 공간
  offset,
  // 스크롤된 양 저장공간
  scrollPos,
  //document의 높이 저장공간
  docHeight;

//  * - 문서의 높이를 계산하고 원하는 부분이 상단에서 얼마큼 떨어져 있는지 offset 값을 계산하기
//  * - 스크롤과 클릭 이벤트 작성하기
//  */

// 문서 높이 계산하기
//   docHeight = docElem.scrollHeight;
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

if (docHeight != 0) {
  offset = docHeight / 4;
}

function scrollHandler() {
  scrollPos = docElem.scrollTop;
  console.log(`전체 페이지의 4분의 1 길이는 ${offset}`);
  console.log(`스크롤 양은 ${scrollPos}`);

  backToTop.className = scrollPos > offset ? 'visible' : '';

  //  이 코드는 위와 같아요
  // if (scrollPos > offset) {
  //   backToTop.className = 'visable';
  // } else {
  //   backToTop.className = '';
  // }
}

window.addEventListener('scroll', scrollHandler);
// 스크롤 이벤트 추가

// 클릭 이벤트 추가

function clickHandler(ev) {
  ev.preventDefault(); //링크 본연의 기능 막기
  // docElem.scrollTop = 0;

  scrollToTop();
}

function scrollToTop() {
  //일정시간마다 할 일
  //let scrollInterval = setInterval (할일, 시간)
  // 0.001s = 15
  // 할일 = function(){ 실제로 할 일 }
  // 윈도우 스크롤 양 =! 0 ... window.scrollBy(0,-??)
  // 스크롤 양이 0이면 setinterval 멈추기 (clearInterval(이름))

  let scrollInterval = setInterval(function () {
    if (scrollPos != 0) {
      window.scrollBy(0, -55);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

backToTop.addEventListener('click', clickHandler);
