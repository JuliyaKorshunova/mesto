export default class Card {
  constructor(cardData, selectorTemplate, openPopupWindow, deleteCardPopup, isLiked) {
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._myId = cardData.myid;
    this._likes = cardData.likes;
    this._likesLength = cardData.likes.length;
    this._ownerId = cardData.owner._id;
    this._cardId = cardData._id;
    this._selectorTemplate = selectorTemplate;
    this._openPopupWindow = openPopupWindow;
    this._deleteCardPopup = deleteCardPopup;
    this._isLiked = isLiked;
  }

  _getTemplateClone() {
    return document.querySelector(this._selectorTemplate).content.querySelector('.element__item').cloneNode(true);
  }
  _handleLike = () => {
    this._isLiked(this._likeElementButton, this._cardId)
  }

  _handleDelete = () => {
    this._deleteCardPopup({ card: this, cardId: this._cardId });
  }
  _handleOpenImagePopupImage = () => {
    this._openPopupWindow(this._cardData);
  }
  _setEventListener() {
    this._likeElementButton.addEventListener('click', this._handleLike);
    this._deleteCardButton.addEventListener('click', this._handleDelete);
    this._cardImage.addEventListener('click', this._handleOpenImagePopupImage);
  }

  _serviceMethodForDelete() {
    this._myId === this._ownerId ? this._deleteCardButton.style.display = 'block' : this._deleteCardButton.style.display = 'none'
  }

  _likesStatus() {
    this._likes.forEach(item => {
      if (item._id === this._myId) {
        this._likeElementButton.classList.add('element__like-button_active');
        return
      }
    })
    this._counter.textContent = this._likesLength
  }

  toggelLike(likes) {
    this._likeElementButton.classList.toggle('element__like-button_active');
    this._counter.textContent = likes.length
  }

  removeCard() {
    this._cloneElement.remove();
    this._cloneElement = null;
  }

  createCard() {
    this._cloneElement = this._getTemplateClone();
    this._cardImage = this._cloneElement.querySelector('.element__grid-foto');
    this._likeElementButton = this._cloneElement.querySelector('.element__like-button');
    this._deleteCardButton = this._cloneElement.querySelector('.element__delete-button');
    this._subtitleElement = this._cloneElement.querySelector('.element__subtitle');
    this._counter = this._cloneElement.querySelector('.element__counter');
    this._cardImage.src = this._link;
    this._cardImage.alt = `Изображение ${this._name}`;
    this._subtitleElement.textContent = this._name;
    this._likesStatus();
    this._serviceMethodForDelete();
    this._setEventListener();
    return this._cloneElement
  }
}