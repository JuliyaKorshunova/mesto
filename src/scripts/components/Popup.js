export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closePopup = this._popup.querySelector('.popup__close')
  }
//Закрытие по крестику
  _handleButtonClose = () => {
    this.close()
  }
//Закрытие по оверлей
  _handleOverlayClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close()
    }
  }
  //Закрытие по esc
  _handleEscapeClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close()
    }
  }
//метод (закрытия)
  setEventListeners() {
    this._closePopup.addEventListener('mousedown', this._handleButtonClose);
    this._popup.addEventListener('mousedown', this._handleOverlayClose)
  }
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscapeClose);
  }
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscapeClose);
  }
}