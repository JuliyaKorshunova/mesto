const initialCards = [
  {
    place: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    place: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    place: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    place: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    place: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    place: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
//Карандаш - константа открытия редактирования профиля
const popupOpenButtonProfile = document.querySelector('.profile__button-edit');
//кнопка +
const buttonOpenAddCard = document.querySelector('.profile__add-button');
const selectorTemplate = '#element-template';
const popupProfileSelector = '.popup_edit-profile';
const popupAddCardSelector = '.popup_add-card';
const popupImageSelector = '.popup_open-figure';
const listsElementSelector = '.element';

const formsValidator = {};

const sabmitInfo = {
  profileNameSelector: '.profile__title',
  profileProfessionSelector: '.profile__subtitle'
}
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

  export {
    initialCards,
    popupOpenButtonProfile,
    buttonOpenAddCard,
    selectorTemplate,
    popupProfileSelector,
    popupAddCardSelector,
    popupImageSelector,
    listsElementSelector,
    formsValidator,
    sabmitInfo,
    validationConfig
  };