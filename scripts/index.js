const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.menu__open-popup');

const togglePopupVisibility = function () {
  popupElement.classList.toggle('popup_is-opened');
};

popupOpenButtonElement.addEventListener('click', function () {
  popupElement.classList.toggle('popup_is-opened');
});