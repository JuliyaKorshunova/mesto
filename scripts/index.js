const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenBattonElement = document.querySelector('.profile__button-edit');

const togglePopupVisibility = function () {
  popupElement.classList.toggle('popup_opened');
};

const popupOpenButtonElement.addEventListener('click', togglePopupVisibility);





//togglePopupVisibility();


/*const openPopup = function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = nameText.textContent;
  professionInput.value = profession.textContent;
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
*/