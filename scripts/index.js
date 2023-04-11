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
//сброс ошибок
const buttonSubmitFormAccioNameElement = formAccioNameElement.querySelector('.popup__submit');
const inputListFormAccioNameElement = formAccioNameElement.querySelectorAll('.form__input');
const buttonSubmitFormAddCardElement = formAddCardElement.querySelector('.popup__submit');
const inputListFormAddCardElement = formAddCardElement.querySelectorAll('.form__input');

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
  //formAccioNameElement.reset();
  resetErrorOpenForm(formAccioNameElement);
  formInputName.value = profileName.textContent;
  formInputProfession.value = profileProfession.textContent;
  toggleButton(inputListFormAccioNameElement, buttonSubmitFormAccioNameElement, validationConfig.disableButtonClass);
}

//Универсальный обработчик крестиков закрытия
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
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
  popupFigureImage.src = link
  popupFigureImage.alt = name
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
const elementTemplate = document.querySelector('#element-template').content;
//кнопка +
const buttonOpenAddCard = document.querySelector('.profile__add-button')
const gridCards = document.querySelector('.element');

//Лайк
function toggleLike (object) {
  object.classList.toggle('element__like-button_active')
}

//Удалить карточку
function deleteOnClick (event) {
  event.target.closest.remove()
}

function createCard(link, name) {
  const firstCard = elementTemplate.querySelector('.element__item').cloneNode(true);
  const cardImage = firstCard.querySelector('.element__grid-foto');
  const deleteCardButton = firstCard.querySelector('.element__delete-button');
  const elementLikeButton = firstCard.querySelector('.element__like-button');

cardImage.src = link;
cardImage.alt = name;

//Название
firstCard.querySelector('.element__subtitle').textContent = name;
//Клик открытия попап галереи мест
cardImage.addEventListener('click',() => openFigurePopup(name, link)); 
//Лайк
elementLikeButton.addEventListener('click', () => elementLikeButton.classList.toggle('element__like-button_active'));
//Удаление фото по клику
deleteCardButton.addEventListener('click', (evt) => evt.target.closest('.element__item').remove());
return firstCard;
}

initialCards.forEach(element => gridCards.append(createCard(element.link, element.name)));

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  gridCards.prepend(createCard(formPlaceLink.value, formPlaceName.value));
  closePopup(popupAddCard);
  evt.target.reset();
}
function openAddPopup() {
  openPopupWindow(popupAddCard);
  formAddCardElement.reset();
  resetErrorOpenForm(formAddCardElement);
  toggleButton(inputListFormAddCardElement, buttonSubmitFormAddCardElement, validationConfig.disableButtonClass);

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
//Кнопка Добавить контент
formAddPhoto.addEventListener('submit', handleAddCardFormSubmit)

enableValidation(validationConfig) 