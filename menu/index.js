let hamburgerB = document.querySelector('#hamburger-button');

//숨겨짐 당할 애
let menuList = document.querySelector('.ham-menu');
let header = document.querySelector('header');
let currentMenu;
let currentMenu2;

//숨겨짐 당할 애
let moreview = document.querySelector('.moreview');

let mainMenu = document.querySelectorAll('.main-menu');
let moreviewB = document.querySelectorAll('.moreviewB');

function hambergerClickHandler() {
  if (currentMenu) {
    menuList.classList.add('displaynone');
    header.style.background = 'transparent';
    header.style.paddingBottom = '15px';
    currentMenu = null;
  } else {
    menuList.classList.remove('displaynone');
    header.style.background = '#232323';
    header.style.paddingBottom = '0';
    menuList.css;
    currentMenu = this;
  }
}

hamburgerB.addEventListener('click', hambergerClickHandler);

// ---------

function menuClickHandler() {
  if (currentMenu2) {
    this.childNodes[3].classList.add('displaynone');
    currentMenu2 = null;
  } else {
    this.childNodes[3].classList.remove('displaynone');
    currentMenu2 = this;
  }
}

mainMenu[2].addEventListener('click', menuClickHandler);
mainMenu[3].addEventListener('click', menuClickHandler);
