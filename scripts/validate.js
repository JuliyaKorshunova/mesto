const validationConfig = {
//forms
  allforms: document.forms,
//inputList
  inputSelector: '.form__input',
//button
  submitButtonSelector: '.popup__submit',
//span шаблон
  errorSelectorTemplate: '.popup__error_type_',
//button disabled
  disableButtonClass: 'popup__submit_disable',
//input
  inputErrorClass: 'form__input_invalid',
//span
  textErrorClass: 'popup__error_type'
};
enableValidation(validationConfig);

function enableValidation(config) {
  const forms = Array.from(config.allforms);
  forms.forEach((form) => {
    const inputList = form.querySelectorAll(config.inputSelector);
    const button = form.querySelector(config.submitButtonSelector);
    hangEventListener(inputList, button, config.errorSelectorTemplate, config.disableButtonClass, config.inputErrorClass, config.textErrorClass);
  })
}

function hangEventListener(inputList, button, errorSelectorTemplate, disableButtonClass, inputErrorClass, textErrorClass) {
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(input, errorSelectorTemplate, inputErrorClass, textErrorClass);
      toggleButton(inputList, button, disableButtonClass);
    })
  })
}

//Проверка правильности ввода чеквалидити
function checkInputValidity(input, errorSelectorTemplate, inputErrorClass, textErrorClass) {
  const errorTextElement = document.querySelector(`${errorSelectorTemplate}${input.name}`)
  input.validity.valid ? hideInputError(input, errorTextElement, inputErrorClass, textErrorClass) : showInputError(input, errorTextElement, inputErrorClass, textErrorClass);
}
//Скрывает ошибку
function hideInputError(input, errorTextElement, inputErrorClass, textErrorClass) {
  input.classList.remove(inputErrorClass);
  errorTextElement.textContent = '';
  errorTextElement.classList.remove(textErrorClass);
}
//Показывает ошибку
function showInputError(input, errorTextElement, inputErrorClass, textErrorClass) {
  input.classList.add(inputErrorClass);
  errorTextElement.textContent = input.validationMessage;
  errorTextElement.classList.add(textErrorClass);
}

//toggleButton
function toggleButton(inputList, button, disableButtonClass) {
  hasInValidInput(inputList) ? disableButton(button, disableButtonClass) : enableButton(button, disableButtonClass);
}
function hasInValidInput(inputList) {
  return Array.from(inputList).some((input) => !input.validity.valid)
}
function enableButton(button, disableButtonClass) {
  button.classList.remove(disableButtonClass);
  button.disabled = false;
}
function disableButton(button, disableButtonClass) {
  button.classList.add(disableButtonClass);
  button.disabled = true;
}

//Сбросим ошибку при открытии формы
function resetErrorOpenForm(form) {
  form.querySelectorAll(validationConfig.inputSelector).forEach((input) => {
    const errorTextElement = document.querySelector(`${validationConfig.errorSelectorTemplate}${input.name}`)
    if(!input.validity.valid) {
      hideInputError(input, errorTextElement, validationConfig.inputErrorClass, validationConfig.textErrorClass)
    }
  })
}