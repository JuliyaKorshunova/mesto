import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.form__input');
    this._submitButton = this._form.querySelector('.popup__submit');
    this._defaultButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._values = {};
    this._inputList.forEach(input => {
      this._values[input.name] = input.value
    })
    return this._values
  }

  setInputValues(dataName) {
    this._inputList.forEach(input => {
      input.value = dataName[input.name];
    })
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `${this._submitButton.textContent}...`
      this._submitFunction(this._getInputValues());
    })
  }

  setupDefaultText() {
    this._submitButton.textContent = this._defaultButtonText
  }

  close() {
    super.close();
    this._form.reset();
  }
}