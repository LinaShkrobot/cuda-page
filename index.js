const burgerSend = document.querySelector(".nav__burger-block");
const buttonClose = document.querySelector(".navigation-modal__close-button");
const modal = document.querySelector(".navigation-modal");
const body = document.querySelector("body");

burgerSend.onclick = function () {
  modal.classList.add("navigation-modal--show");
  body.classList.add("scroll-hide");
};

buttonClose.onclick = function () {
  modal.classList.remove("navigation-modal--show");
  body.classList.remove("scroll-hide");
};
