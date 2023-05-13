import '../pages/index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import {
  initialCards,
  popupOpenButtonProfile,
  buttonOpenAddCard,
  selectorTemplate,
  popupProfileSelector,
  popupAddCardSelector,
  popupImageSelector,
  listsElementSelector,
  formsValidator,
  sabmitInfo,
  validationConfig
} from "../scripts/utils/constants.js";

const userInfo = new UserInfo(sabmitInfo);

const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners()

//Добавляем начальные карточки на страницу
const section = new Section({
  items: initialCards,
  renderer: (element) => {
    const card = new Card(element, selectorTemplate, popupImage.open);
    return card.createCard();
  }
}, listsElementSelector)
section.addCardArray()

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues())
  popupProfile.close();
})
popupProfile.setEventListeners();

const popupAddCardInfo = new PopupWithForm(popupAddCardSelector, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupAddCardInfo.getInputValues()));
  popupAddCardInfo.close();
})
popupAddCardInfo.setEventListeners()

Array.from(document.forms).forEach(item => {
  const form = new FormValidator(validationConfig, item)
  const name = item.name;
  formsValidator[name] = form;
  form.enableValidation()
})
//Открытие попап редактирование профиля
popupOpenButtonProfile.addEventListener('click', () => {
formsValidator.accioName.resetValidation();
popupProfile.setInputValues(userInfo.getUserInfo())
popupProfile.open()
})
//открытие попап редактирования карточек
function openAddPopup() {
  formsValidator.addCard.resetValidation();
  popupAddCardInfo.open()
}
//Клик открытия попап добавления контенкта
buttonOpenAddCard.addEventListener('click', openAddPopup);
