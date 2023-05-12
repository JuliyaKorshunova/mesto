import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__figure-image');
    this._popupImageSignature = this._popup.querySelector('.popup__figure-signature')
  }

open = (cardData) => {
  this._popupImage.src = cardData.link;
  this._popupImage.alt = cardData.place;
  this._popupImageSignature.textContent = cardData.place;
  super.open()
  }
}