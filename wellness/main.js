(function () {
  const cards = document.querySelectorAll('.club');
  const header = document.querySelector('.hd-box');
  const topBtn = document.querySelector('.topbtn');

  //스크롤양
  let docScroll;

  // header색상 변경 함수
  function headerpaint() {
    if (docScroll != 0) {
      header.classList.add('scroll');
      topBtn.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
      topBtn.classList.remove('scroll');
    }
  }

  // 슬라이더가 한 줄씩 나타나게 하는 함수
  function cardShow() {
    let winBottom = window.innerHeight + docScroll;
    for (let i = 0; i < cards.length; i++) {
      let cardHalfPosition = cards[i].offsetTop + cards[i].clientHeight / 2;

      if (cardHalfPosition < winBottom) {
        cards[i].classList.add('showed');
      }
    }
  }

  // 스크롤 이벤트 함수
  function scrollHandelr() {
    docScroll = window.pageYOffset;

    headerpaint();
    cardShow();
  }

  // 탑버튼 클릭 이벤트 함수
  function scrollToTop() {
    let scrollInterval = setInterval(function () {
      if (docScroll != 0) {
        window.scrollBy(0, -55);
      } else {
        clearInterval(scrollInterval);
      }
    }, 8);
  }

  //햄버거버튼 클릭 이벤트 함수
  function hamClickHandelr(e) {
    let targetElem = e.target;
    while (!targetElem.classList.contains('ham-btn')) {
      targetElem = targetElem.parentNode;

      if (targetElem.nodeName == 'BODY') {
        targetElem = null;
        return;
      }
    }
    header.classList.toggle('active');
  }

  function topBtnClickHandler() {
    scrollToTop();
  }

  //탑버튼 클릭 이벤트
  topBtn.addEventListener('click', topBtnClickHandler);

  //햄버거버튼 클릭 이벤트
  header.addEventListener('click', hamClickHandelr);

  //스크롤 이벤트
  window.addEventListener('scroll', scrollHandelr);
})();
