  import '../pages/index.css';
  
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupDeleteCard from '../scripts/components/PopupDeleteCard.js';
import Api from '../scripts/components/Api.js';
import {
  popupOpenButtonProfile,
  buttonOpenAddCard,
  selectorTemplate,
  popupProfileSelector,
  popupAddCardSelector,
  popupImageSelector,
  listsElementSelector,
  popupAvatarSelector,
  popupDeleteSelector,
  formsValidator,
  sabmitInfo,
  validationConfig
} from "../scripts/utils/constants.js";

const userInfo = new UserInfo(sabmitInfo);
const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners()

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
      authorization: '6b284fd9-2112-4db5-ba62-219123f88ff3',
      'Content-Type': 'application/json'
    }
  });

//Сабмит удаление карточки с подтверждением
const deleteCardPopup = new PopupDeleteCard(popupDeleteSelector, ({ card, cardId }) => {
  api.deleteCard(cardId)
    .then(() => {
      card.removeCard()
      deleteCardPopup.close()
    })
  .catch((error) => console.error('Ошибка при удалении карточки ${error}'))
  .finally(() => deleteCardPopup.setupDefaultText())
})
deleteCardPopup.setEventListeners()

function createNewCard (element) {
  const card = new Card(element, selectorTemplate, popupImage.open, deleteCardPopup.open, (likeElement, cardId) => {
    if (likeElement.classList.contains('element__like-button_active')) {
      api.deleteLike(cardId)
        .then(res => {
          card.toggelLike(res.likes);
        })
        .catch((error) => console.error('Ошибка при снятии лайка ${error}'))
    } else  {
      api.addLike(cardId)
        .then(res => {
          card.toggelLike(res.likes);
        })
        .catch((error) => console.error('Ошибка при добавлении лайка ${error}'))
    }
  });
  return card.createCard();
}

//Экземпляр класса Section
const section = new Section((element) => {
    section.addItemAppend(createNewCard(element))
  }, listsElementSelector);

//Сабмит Экземпляр класса PopupWithForm для редактирования профиля
const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  api.setUserInfo(data)
    .then(res => {
      userInfo.setUserInfo({ username: res.name, profession: res.about, avatar: res.avatar });
      popupProfile.close()
    })
    .catch((error) => console.error(`Ошибка при редактировании профиля ${error}`))
    .finally(() => popupProfile.setupDefaultText())
})
popupProfile.setEventListeners();

//Сабмит Экземпляр класса PopupWithForm для добавления карточек
const popupAddCardInfo = new PopupWithForm(popupAddCardSelector, (data) => {
  Promise.all([api.getInfo(), api.addCard(data)])
    .then(([dataUser, dataCard]) => {
      dataCard.myid = dataUser._id;
      section.addItemPrepend(createNewCard(dataCard))
      popupAddCardInfo.close();
    })
    .catch((error) => console.error(`Ошибка при создании новой карточки ${error}`))
    .finally(() => popupAddCardInfo.setupDefaultText())
})
popupAddCardInfo.setEventListeners()

//Сабмит Экземпляр класса PopupWithForm для добавления карточек
const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  api.setNewAvatar(data)
    .then(res => {
      userInfo.setUserInfo({username: res.name, profession: res.about, avatar: res.avatar});
      popupEditAvatar.close()
    })
    .catch((error) => console.error(`Ошибка при обновлении аватвр ${error}`))
    .finally(() => popupEditAvatar.setupDefaultText())
})
popupEditAvatar.setEventListeners()

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

//Клик смены аватара
document.querySelector('.profile__button-avatar').addEventListener('click', () => {
  formsValidator.editAvatar.resetValidation()
  popupEditAvatar.open()
})

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach(element => element.myid = dataUser._id)
    userInfo.setUserInfo({ username: dataUser.name, profession: dataUser.about, avatar: dataUser.avatar })
    section.addCardArray(dataCard);
  })
  .catch((error) => console.error(`Ошибка при создании начальных данных страницы ${error}`))