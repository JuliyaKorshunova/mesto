

// editpopup vars
  const nameObj = document.querySelector('.profile__name');
  const descriptonObj = document.querySelector('.profile__description');
  const buttonOpenEditProfile = document.querySelector('.profile__edit-button')

  const popupOpenEditProfile = document.querySelector('.popup_purpouse_edit-profile')
  const buttonCloseEditPopup = popupOpenEditProfile.querySelector('.popup__close-button')
  const formNameObj = document.querySelector('.popup__form-text-input_purpouse_profile-name')
  const formDescriptionObj = document.querySelector('.popup__form-text-input_purpouse_profile-description')
  const formEditObj = document.querySelector('.popup__form_purpouse_edit-profile')

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  nameObj.textContent = formNameObj.value;
  descriptonObj.textContent = formDescriptionObj.value;
  closePopup(popupOpenEditProfile);
}

function openEditPopup() {
  openPopupOverlay(popupOpenEditProfile);
  const nameText = nameObj.textContent;
  const descriptonText = descriptonObj.textContent;
  formNameObj.value = nameText.trim();
  formDescriptionObj.value = descriptonText.trim();
}

// figurePopup vars
const figurePopup = document.querySelector('.popup_purpouse_figure')
const closeFigurePopupButton = figurePopup.querySelector('.popup__close-button')
const figurePopupImage = figurePopup.querySelector('.popup__figure-popup-image')
const figurePopupCaption = figurePopup.querySelector('.popup__figure-popup-caption')

function openFigurePopup(name, link) {
  openPopupOverlay(figurePopup);
  figurePopupImage.src = link
  figurePopupImage.alt = name
  figurePopupCaption.textContent = name
}

function openPopupOverlay(popupObj)  {
  popupObj.classList.add('popup_opened');
}    

function closePopup(popupObj) {
  popupObj.classList.remove('popup_opened')  
}




// addcard vars
  const formPlaceNameObj = document.querySelector('.popup__form-text-input_purpouse_place-name')
  const formPlaceLinkObj = document.querySelector('.popup__form-text-input_purpouse_place-link')
  const popupAddCard = document.querySelector('.popup_purpouse_add-card')
  const closeAddPopupButton = popupAddCard.querySelector('.popup__close-button')
  const formAddCard = document.querySelector('.popup__form_purpouse_add-card')
  const cardTemplate = document.querySelector('#card-template').content;
  const buttonOpenAddCardPopup = document.querySelector('.profile__add-button')
  const gridCards = document.querySelector('.grid-cards')
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
  object.classList.toggle('grid-cards__like-button_active')
}    


function deleteParentOnClick (event) {
  event.target.parentNode.remove()
}    

function createCard(link, name) {
    const firstCard = cardTemplate.querySelector('.grid-cards__item').cloneNode(true);
    const cardImage = firstCard.querySelector('.grid-cards__item-image');
    cardImage.src = link;
    cardImage.alt = name;
    firstCard.querySelector('.grid-cards__caption').textContent = name;
    const deleteCardButton = firstCard.querySelector('.grid-cards__delete-btn')
    const likeButton = firstCard.querySelector('.grid-cards__like-button')
    cardImage.addEventListener('click',() => openFigurePopup(name, link)); 
    likeButton.addEventListener('click',() => toggleLike(likeButton));
    deleteCardButton.addEventListener('click', event => deleteParentOnClick(event) )

  return firstCard
}    

initialCards.forEach(element => gridCards.prepend(createCard(element.link, element.name)));

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  gridCards.prepend(createCard(formPlaceLinkObj.value, formPlaceNameObj.value));
  closePopup(popupAddCard);
}      

function openAddPopup() {
  formPlaceLinkObj.value = '';
  formPlaceNameObj.value = '';
  openPopupOverlay(popupAddCard);
}    




buttonOpenEditProfile.addEventListener('click', openEditPopup)
buttonOpenAddCardPopup.addEventListener('click', openAddPopup)

buttonCloseEditPopup.addEventListener('click', () => closePopup(popupOpenEditProfile))
closeAddPopupButton.addEventListener('click', () => closePopup(popupAddCard))
closeFigurePopupButton.addEventListener('click', () => closePopup(figurePopup))

formEditObj.addEventListener('submit', handleEditFormSubmit)
formAddCard.addEventListener('submit', handleAddCardFormSubmit)

