const modal = document.querySelector(".modal");
const button = document.querySelector(".products__order");
const productButtons = document.querySelectorAll(".item__icon");
const closeButton = document.querySelector(".modal__button");

const showModal = (element, className) => {
  element.classList.toggle(className);
};

button.addEventListener("click", () => {
  showModal(modal, "modal--show");
});

productButtons.forEach((element) => {
  element.addEventListener("click", () => {
    showModal(modal, "modal--show");
  });
});
