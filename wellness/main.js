const card = document.querySelectorAll('.clubs');
const header = document.querySelector('.hd-box');
const topBtn = document.querySelector('.topbtn');

let docScroll;

//스크롤 이벤트
function scrollHandelr() {
  docScroll = window.pageYOffset;

  let cardScroll1 = card[0].offsetTop;
  let cardScroll2 = card[1].offsetTop;

  //상단바 색상변경
  if (docScroll != 0) {
    header.classList.add('scroll');
    topBtn.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
    topBtn.classList.remove('scroll');
  }

  //첫 번째 카드 슬라이드
  if (docScroll > cardScroll1 - cardScroll1 / 2) {
    card[0].classList.add('scroll');
  }

  //두 번째 카드 슬라이드
  if (docScroll > cardScroll2 - cardScroll2 / 3) {
    card[1].classList.add('scroll');
  }
}

window.addEventListener('scroll', scrollHandelr);

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

header.addEventListener('click', hamClickHandelr);

function topBtnClickHandler() {
  scrollToTop();
}

function scrollToTop() {
  let scrollInterval = setInterval(function () {
    if (docScroll != 0) {
      window.scrollBy(0, -55);
    } else {
      clearInterval(scrollInterval);
    }
  }, 8);
}

topBtn.addEventListener('click', topBtnClickHandler);
