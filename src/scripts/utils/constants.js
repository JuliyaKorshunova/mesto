//Карандаш - константа открытия редактирования профиля
const popupOpenButtonProfile = document.querySelector('.profile__button-edit');
//кнопка +
const buttonOpenAddCard = document.querySelector('.profile__add-button');
const selectorTemplate = '#element-template';
const popupProfileSelector = '.popup_edit-profile';
const popupAddCardSelector = '.popup_add-card';
const popupImageSelector = '.popup_open-figure';
const listsElementSelector = '.element';
const popupAvatarSelector = '.popup-avatar-edit';
const popupDeleteSelector = '.popup-delete';

const formsValidator = {};

const sabmitInfo = {
  profileNameSelector: '.profile__title',
  profileProfessionSelector: '.profile__subtitle',
  profileAvatar: '.profile__avatar'
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
    popupOpenButtonProfile,
    buttonOpenAddCard,
    selectorTemplate,
    popupProfileSelector,
    popupAddCardSelector,
    popupImageSelector,
    listsElementSelector,
    popupAvatarSelector,
    popupDeleteSelector,
    formsValidator,
    sabmitInfo,
    validationConfig
  };