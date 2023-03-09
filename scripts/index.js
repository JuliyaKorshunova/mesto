const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');

const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

const formInputName = document.querySelector('#name');
const formInputProfession = document.querySelector('#profession');
const formInput = document.querySelector('.form');


function openPopup() {
  popupElement.classList.add('popup_opened');
  formInputName.value = profileName.textContent;
  formInputProfession.value = profileProfession.textContent;
}
popupOpenButtonElement.addEventListener('click', openPopup);


function closePopup() {
  popupElement.classList.remove('popup_opened');
}
popupCloseButtonElement.addEventListener('click', closePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formInputName.value;
  profileProfession.textContent = formInputProfession.value;
  closePopup();
}
formInput.addEventListener('submit', handleFormSubmit);