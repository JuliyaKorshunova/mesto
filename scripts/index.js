//попап для ввода имени
//const popupElement = document.querySelector('.popup');
  
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');
const popupOpenButtonProfile = document.querySelector('.profile__button-edit');

const popupOpenEdit = document.querySelector('.popup_edit-profile');
const popupCloseButton = popupOpenEdit.querySelector('.popup__close');
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


//увеличим фото
const figurePopup = document.querySelector('.popup_open-figure')
const closeFigurePopup = figurePopup.querySelector('.popup__close')
const popupFigureImage = figurePopup.querySelector('.popup__figure-image')
const popupFigureSignature = figurePopup.querySelector('.popup__figure-signature')

function openFigurePopup(name, link) {
  openPopupWindow(figurePopup);
  popupFigureImage.src = link
  popupFigureImage.alt = name
  popupFigureSignature.textContent = name
}

function openPopupWindow(popupElement)  {
  popupElement.classList.add('popup_opened');
}    

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened')  
}


//Добавим попап с фото и ссылкой
const formPlaceName = document.querySelector('.form__input_place-name')
const formPlaceLink = document.querySelector('.form__input_place-link')
const popupAddCard = document.querySelector('.popup_add-card')
const closeAddPopup = popupAddCard.querySelector('.popup__close')
const formAddPhoto = document.querySelector('.form__new_add-photo')
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
  event.target.parentNode.remove()
}

function createCard(link, name) {
  const firstCard = elementTemplate.querySelector('.element__item').cloneNode(true);
  const cardImage = firstCard.querySelector('.element__grid-foto');
  cardImage.src = link;
  cardImage.alt = name;
  firstCard.querySelector('.element__subtitle').textContent = name;
  const deleteCardButton = firstCard.querySelector('.element__delete-button');
  const likeButton = firstCard.querySelector('.element__like-button');
  cardImage.addEventListener('click',() => openFigurePopup(name, link)); 
  likeButton.addEventListener('click',() => toggleLike(likeButton));
  deleteCardButton.addEventListener('click', event => deleteOnClick(event));
  return firstCard;
}

initialCards.forEach(element => gridCards.prepend(createCard(element.link, element.name)));

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  gridCards.prepend(createCard(formPlaceLink.value, formPlaceName.value));
  closePopup(popupAddCard);
}

function openAddPopup() {
  formPlaceLink.value = ' ';
  formPlaceName.value = ' ';
  openPopupWindow(popupAddCard);
}


popupOpenButtonProfile.addEventListener('click', openPopup);
buttonOpenAddCard.addEventListener('click', openAddPopup);

popupCloseButton.addEventListener('click', () => closePopup(popupOpenEdit));
closeAddPopup.addEventListener('click', () => closePopup(popupAddCard));
closeFigurePopup.addEventListener('click', () => closePopup(figurePopup));

formInput.addEventListener('submit', handleFormSubmit)
formAddPhoto.addEventListener('submit', handleAddCardFormSubmit)
