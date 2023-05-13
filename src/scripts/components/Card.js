export default class Card {
  constructor(cardData, selectorTemplate, openPopupWindow) {
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.place;
    this._selectorTemplate = selectorTemplate;
    this._openPopupWindow = openPopupWindow;
  }
  _getTemplateClone() {
    return document.querySelector(this._selectorTemplate).content.querySelector('.element__item').cloneNode(true);
  }
  _handleLike = () => {
    this._likeElementButton.classList.toggle('element__like-button_active');
  }
  _handleDelete = () => {
    this._cloneElement.remove();
    this._cloneElement = null;
  }
  _handleOpenImagePopupImage = () => {
    this._openPopupWindow(this._cardData);
  }
  _setEventListener() {
    this._likeElementButton.addEventListener('click', this._handleLike);
    this._deleteCardButton.addEventListener('click', this._handleDelete);
    this._cardImage.addEventListener('click', this._handleOpenImagePopupImage);
  }
  createCard() {
    this._cloneElement = this._getTemplateClone();
    this._cardImage = this._cloneElement.querySelector('.element__grid-foto');
    this._likeElementButton = this._cloneElement.querySelector('.element__like-button');
    this._deleteCardButton = this._cloneElement.querySelector('.element__delete-button');
    this.subtitleElement = this._cloneElement.querySelector('.element__subtitle');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this.subtitleElement.textContent = this._name;
    this._setEventListener()
    return this._cloneElement
  }
}