//попап для ввода имени
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');
const popupOpenButtonProfile = document.querySelector('.profile__button-edit');

const popupOpenEdit = document.querySelector('.popup_edit-profile');

const formInputName = document.querySelector('.form__input_name');
const formInputProfession = document.querySelector('.form__input_profession');
const formInput = document.querySelector('.form');

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formInputName.value;
  profileProfession.textContent = formInputProfession.value;
  closePopup(popupOpenEdit);
}

function openPopup() {
  openPopupWindow(popupOpenEdit);
  const nameText = profileName.textContent;
  const professionText = profileProfession.textContent;
  formInputName.value = nameText.trim();
  formInputProfession.value = professionText.trim();
}

function openPopupWindow(popupElement)  {
  popupElement.classList.add('popup_opened');
}    

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened')  
}

//Универсальный обработчик крестиков закрытия
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


//увеличим фото
const figurePopup = document.querySelector('.popup_open-figure')

const popupFigureImage = figurePopup.querySelector('.popup__figure-image')
const popupFigureSignature = figurePopup.querySelector('.popup__figure-signature')

function openFigurePopup(name, link) {
  openPopupWindow(figurePopup);
  popupFigureImage.src = link
  popupFigureImage.alt = name
  popupFigureSignature.textContent = name
}

//Добавим попап с фото и ссылкой
const formPlaceName = document.querySelector('.form__input_place-name')
const formPlaceLink = document.querySelector('.form__input_place-link')

const popupAddCard = document.querySelector('.popup_add-card')

const formAddPhoto = document.querySelector('.form_add-photo')
const elementTemplate = document.querySelector('#element-template').content;
const buttonOpenAddCard = document.querySelector('.profile__add-button')
const gridCards = document.querySelector('.element');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function toggleLike (object) {
  object.classList.toggle('element__like-button_active')
}

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

  firstCard.querySelector('.element__subtitle').textContent = name;
  cardImage.addEventListener('click',() => openFigurePopup(name, link)); 
  elementLikeButton.addEventListener('click', () => elementLikeButton.classList.toggle('element__like-button_active'));
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
}

popupOpenButtonProfile.addEventListener('click', openPopup);
buttonOpenAddCard.addEventListener('click', openAddPopup);

formInput.addEventListener('submit', handleFormSubmit)
formAddPhoto.addEventListener('submit', handleAddCardFormSubmit)