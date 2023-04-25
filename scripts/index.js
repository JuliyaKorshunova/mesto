import initialCards from "./url-list.js";
import Card from './Card.js';
import FormValidator from './FormValidator.js';


//попап для ввода имени
//имя
const profileName = document.querySelector('.profile__title');
//профессия
const profileProfession = document.querySelector('.profile__subtitle');
//Карандаш - константа открытия редактирования профиля
const popupOpenButtonProfile = document.querySelector('.profile__button-edit');
const popupOpenEdit = document.querySelector('.popup_edit-profile');
const formAccioNameElement = document.forms.accioName
//имя
const formInputName = document.querySelector('.form__input_name');
//профессия
const formInputProfession = document.querySelector('.form__input_profession');
const formInput = document.querySelector('[name="accioName"]');
const formAddCardElement = document.forms.addCard
//название
const popupInputPlaceNameElement = formAddCardElement.querySelector('.form__input_place-name');
//url
const popupInputPlaceLinkElement = formAddCardElement.querySelector('.form__input_place-link');
const listsElement = document.querySelector('.element');
const selectorTemplate = '#element-template';

//объект для валидации
const validationConfig = {
  //inputList
    inputSelector: '.form__input',
  //button
    submitButtonSelector: '.popup__submit',
  //span шаблон
    errorSelectorTemplate: '.popup__error_type_',
  //button disabled
    disableButtonClass: 'popup__submit_disable',
  //input
    inputErrorClass: 'form__input_invalid',
  //span
    textErrorClass: 'popup__error_type'
  };

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formInputName.value;
  profileProfession.textContent = formInputProfession.value;
  closePopup(popupOpenEdit);
}

//Открытие попап редактирование профиля
function openPopup() {
  openPopupWindow(popupOpenEdit);
  const nameText = profileName.textContent;
  const professionText = profileProfession.textContent;
  formPersonalDataValidator.resetValidation()
  formInputName.value = profileName.textContent;
  formInputProfession.value = profileProfession.textContent;
}

//Универсальный обработчик крестиков закрытия
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup  =button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//Функция открытия попап
function openPopupWindow(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
}

//Функция закрытия попап
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupByEscape);
}

//Закрытие попапа при нажатии на esc
function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened)
  }
}

//Увеличим фото
  const figurePopup = document.querySelector('.popup_open-figure')
  const popupFigureImage = figurePopup.querySelector('.popup__figure-image')
  const popupFigureSignature = figurePopup.querySelector('.popup__figure-signature')

//Открытие попап для фото
function openFigurePopup(name, link) {
  openPopupWindow(figurePopup);
  popupFigureImage.src = link;
  popupFigureImage.alt = name;
  popupFigureSignature.textContent = name
}

//Функция отмены нажатия попап при нажатии не на оверлей
function closePopupClickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
};
//Добавим попап с полями название и ссылка
const formPlaceName = document.querySelector('.form__input_place-name')
const formPlaceLink = document.querySelector('.form__input_place-link')
const popupAddCard = document.querySelector('.popup_add-card')
const formAddPhoto = document.querySelector('.form_add-photo')
//кнопка +
const buttonOpenAddCard = document.querySelector('.profile__add-button')
// const gridCards = document.querySelector('.element');
//Лайк
function toggleLike (object) {
  object.classList.toggle('element__like-button_active')
}
//Удалить карточку
function deleteOnClick (event) {
  event.target.closest.remove()
}

//создаем экземпляр класса персональных данных
const formPersonalDataValidator = new FormValidator(validationConfig, formAccioNameElement);
formPersonalDataValidator.enableValidation()

//создаем экземпляр класса добавления контента
const formAddCardValidator = new FormValidator(validationConfig, formAddCardElement);
formAddCardValidator.enableValidation()

//функция создания разметки карточки
function createNewCard(element) {
  const card = new Card(element, selectorTemplate, openFigurePopup);
  const cardElement = card.createCard();
  return cardElement
}

//функция добавления карточки в нужный контейнер
function addCard(container, card) {
  container.prepend(card);
}

initialCards.forEach(element => {
  addCard(listsElement, createNewCard(element))
});

//добавляет карточку с названием и ссылкой
formAddPhoto.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardDatdNameLink = {name: popupInputPlaceNameElement.value, link: popupInputPlaceLinkElement.value};
  addCard(listsElement, createNewCard(cardDatdNameLink));
  closePopup(popupAddCard);
});

//открытие попап редактирования карточек
function openAddPopup() {
  openPopupWindow(popupAddCard);
  formAddCardElement.reset();
  formAddCardValidator.resetValidation()
}

//3 кнопки закрытия ппапов по Оверлей
popupOpenEdit.addEventListener('mousedown', (evt) => closePopupClickOverlay(evt))
popupAddCard.addEventListener('mousedown', (evt) => closePopupClickOverlay(evt))
figurePopup.addEventListener('mousedown', (evt) => closePopupClickOverlay(evt))
//Клик открытия попап добавления контенкта
buttonOpenAddCard.addEventListener('click', openAddPopup);
//Клик открытия попап редактирования профиля
popupOpenButtonProfile.addEventListener('click', openPopup);
//Кнопка Сохранить редактирования профиля
formInput.addEventListener('submit', handleFormSubmit)