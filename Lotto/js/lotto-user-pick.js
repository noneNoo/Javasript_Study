const checkboxForm = document.getElementById('form');
const contentContainer = document.querySelector('#content');

// 45개의 빈 배열(유저 후보군) 만들기
const userCandidate = Array(45)
  .fill()
  .map((arr, index) => index + 1);

// 컨텐츠 컨테이너를 초기화시키고 새 타이틀을 띄워주는 함수
function contentReset(newTitleName) {
  contentContainer.innerHTML = '';
  const title = document.createElement('h2');
  title.className = 'title';
  title.innerHTML = newTitleName;
  contentContainer.appendChild(title);
}

// 로또 구매 페이지를 띄워주는 함수
function paintBuyPage() {
  contentReset('구매하기');

  // 폼 태그의 생성과 추가
  const form = document.createElement('form');
  form.id = 'form';
  contentContainer.appendChild(form);

  // 유저가 살 수 있는 번호들을 화면에 그려줌
  userCandidate.forEach((number) => {
    // input태그의 생성
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.className = 'number-check-input';
    inputCheckbox.name = number;
    inputCheckbox.id = number;

    // label태그의 생성
    const label = document.createElement('label');
    label.htmlFor = number;
    label.innerHTML = number;

    // form태그에 추가
    form.appendChild(inputCheckbox);
    form.appendChild(label);
  });

  // 버튼들 부모태그 만들어주기
  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'button-box';

  // 취소버튼 생성
  const removeBtn = document.createElement('input');
  removeBtn.type = 'button';
  removeBtn.id = 'remove-check-btn';
  removeBtn.value = '선택취소';

  // 자동버튼 생성
  const autoBtn = document.createElement('input');
  autoBtn.type = 'button';
  autoBtn.id = 'auto-check-btn';
  autoBtn.value = '자동선택';

  // 구매버튼 생성
  const buyBtn = document.createElement('input');
  buyBtn.type = 'button';
  buyBtn.id = 'check-buy-btn';
  buyBtn.value = '구매하기';

  // 버튼 html 조립
  buttonDiv.appendChild(removeBtn);
  buttonDiv.appendChild(autoBtn);

  form.appendChild(buttonDiv);
  form.appendChild(buyBtn);
}

function init() {
  paintBuyPage();
}
init();
