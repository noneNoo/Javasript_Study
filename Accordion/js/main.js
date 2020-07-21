//헤더 가져오기
const panelHeading = document.getElementsByClassName('panel-heading');
//전체컨테이너 가쟈오기
const panel = document.getElementsByClassName('panel');
//바디 가져오기
const panelInfo = document.getElementsByClassName('panel-body');

const panelCount = panel.length;

for (let i = 0; i < panelCount; i++) {
  function headingClickHandler(e) {
    let currentTarget = e.target;

    if (currentTarget.parentNode.classList.contains('active')) {
      currentTarget.parentNode.classList.remove('active');
    } else {
      for (let i = 0; i < panelCount; i++) {
        panel[i].classList.remove('active');
        currentTarget.parentNode.classList.add('active');
      }
    }
  }

  panelHeading[i].addEventListener('click', headingClickHandler);
}
//클릭했을시 모든 컨테이너에 액티브를 빼주고 마지막에 선택한 컨테이너에만 active를 추가하는 형식
