export default class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._errorSelectorTemplate = config.errorSelectorTemplate;
    this._disableButtonClass = config.disableButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._form = form;
    this._button = form.querySelector(this._submitButtonSelector);
    this._inputList = form.querySelectorAll(this._inputSelector)
  }
_showInputError(errorTextElement, input) {
  input.classList.add(this._inputErrorClass);
  errorTextElement.textContent = input.validationMessage;
}
_hideInputError(errorTextElement, input) {
  input.classList.remove(this._inputErrorClass);
  errorTextElement.textContent = '';
}
_enableButton() {
  this._button.classList.remove(this._disableButtonClass);
  this._button.disabled = false;
}
_disableButton() {
  this._button.classList.add(this._disableButtonClass);
  this._button.disabled = true;
}
_hasInValidInput() {
  return Array.from(this._inputList).some((input) => !input.validity.valid)
}
_toggleButton() {
  this._hasInValidInput() ? this._disableButton(this._button) : this._enableButton();
}
//Проверка правильности ввода чеквалидити
_checkInputValidity(input) {
  const errorTextElement = this._form.querySelector(`${this._errorSelectorTemplate}${input.name}`);
  input.validity.valid ? this._hideInputError(errorTextElement, input) : this._showInputError(errorTextElement, input);
}
_hangEventListener() {
  this._inputList.forEach(input => {
    input.addEventListener('input', () => {
      this._checkInputValidity(input)
      this._toggleButton()
    })
  })
}
enableValidation() {
  this._hangEventListener()
}
resetErrorOpenForm() {
  this._inputList.forEach(input => {
    const errorTextElement = this._form.querySelector(`${this._errorSelectorTemplate}${input.name}`);
    if(!input.validity.valid) {
      this._hideInputError(errorTextElement, input);
    }
  })
  this._disableButton()
  }
}