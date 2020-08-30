var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    navMain.classList.toggle('main-nav--hide');
    navToggle.classList.toggle('page-header__toggle--closed')
});
