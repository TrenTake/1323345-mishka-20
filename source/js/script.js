var navMain = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    navMain.classList.toggle('main-nav--closed');
});
