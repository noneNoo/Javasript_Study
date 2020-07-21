const openButton = document.querySelector('.modal-open-btn'),
  closeButton = document.querySelector('.modal-close-btn'),
  modal = document.querySelector('.modal'),
  modalOverlay = document.querySelector('.modal-overlay');

//오픈 버튼 클릭
function openButtonHandler() {
  modal.classList.remove('hidden');
}

//클로즈 버튼 클릭
function closeButtonHandler() {
  modal.classList.add('hidden');
}

openButton.addEventListener('click', openButtonHandler);

closeButton.addEventListener('click', closeButtonHandler);
modalOverlay.addEventListener('click', closeButtonHandler);
