var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');
const modal = document.querySelector(".modal");
const button = document.querySelector(".products__order");
const productButtons = document.querySelectorAll(".item__button");
const closeButton = document.querySelector(".modal__button");

const showModal = (element, className) => {
  element.classList.add(className);
};

const hideModal = (element, className) => {
  element.classList.remove(className);
};

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    navMain.classList.toggle('main-nav--hide');
    navToggle.classList.toggle('page-header__toggle--closed')
});

if (button) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    showModal(modal, "modal--show");
  });
}

if (productButtons) {
  productButtons.forEach((element) => {
    element.addEventListener("click", () => {
      showModal(modal, "modal--show");
    });
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && modal.classList.contains("modal--show")) {
    hideModal(modal, "modal--show");
  }
});

closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  hideModal(modal, "modal--show");
})

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938635, 30.323118],
          zoom: 15
      }, {
          searchControlProvider: 'yandex#search'
      }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/icon-map-pin.svg',
          iconImageSize: [80, 102],
          iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([59.938635, 30.323118], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12'
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'images/ball.png',
          iconImageSize: [48, 48],
          iconImageOffset: [-24, -24],
          iconContentOffset: [15, 15],
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
});
