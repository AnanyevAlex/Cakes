var popup = document.querySelector(".main-nav__list");
var btnOpen = document.querySelector(".main-nav__btn--open");

btnOpen.addEventListener('click', function () {
  popup.classList.add("main-nav__list--open");
  btnOpen.classList.remove("main-nav__btn--open");
  btnOpen.classList.add("main-nav__btn--close");
});

var btnClose = document.querySelector(".main-nav__btn--close");

btnClose.addEventListener('click', function () {
  console.log("Был клик по кнопке закрыть");
});
