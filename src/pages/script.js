//Экспортируем данные
import {FormValidator} from '../components/FormValidator.js'; 
import {initialCards, settingsObject, validationConfig, popupUser, 
  popupCard, userName, userJop, popupImg, buttonOpenedUser, 
  buttonAdd, nameInputCard, linkInputCard, nameInput, jobInput, popupUserGuery, 
  popupCardGuery, elements, popupAvatarGuery, avatar, popupAvatar, avatarOpened, popupDelete} from '../utils/constants.js';
import {PopupWithImage} from '../components/PopupWithImage';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import {Card} from '../components/Card.js';
import {Api} from '../components/Api.js'
import {PopupWithFormDelete} from '../components/popupWithFormDelete.js'

import './index.css'

let userId;
//Валидация
const formValidatorUser = new FormValidator(validationConfig, popupUserGuery);
formValidatorUser.setEventListeners();
const formValidatorCard = new FormValidator(validationConfig, popupCardGuery);
formValidatorCard.setEventListeners();
const formValidatorAvatar = new FormValidator(validationConfig, popupAvatarGuery);
formValidatorAvatar.setEventListeners();

//Вызываем класс Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: "716a14ac-2e8b-4ac9-86a9-ffe832dc7936",
    'Content-Type': 'application/json',
  }
});

//User info//
const userInfo = new UserInfo(userName, userJop, avatar, userId);
//Форма изменения ника и описания
const popupWithFormUser = new PopupWithForm(popupUser, callbackFormUser)
popupWithFormUser.setEventListeners();

function callbackFormUser (data) {
  popupWithFormUser.renderLoading(true);
  api.editProfile({
    name: data.name,
    about: data.about
  })
  .then((data) => {
    userInfo.setUserInfo(data);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })
  .finally(() => {
    popupWithFormUser.renderLoading(false);
  })
};

//вызов функции
buttonOpenedUser.addEventListener('click', function () {
  const item = userInfo.getUserInfo()
  nameInput.value = item.name;
  jobInput.value = item.job;
  formValidatorUser.resetValidation();
  popupWithFormUser.open();
});

//Avatar
const popupWithFormAvatar = new PopupWithForm(popupAvatar, callbackFormAvatar)
popupWithFormAvatar.setEventListeners();

function callbackFormAvatar (data) {
  popupWithFormAvatar.renderLoading(true);
  api.editAvatar({
    avatar: data.avatar
  })
  .then((data) => {
    userInfo.addAvatar(data);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })
  .finally(() => {
    popupWithFormAvatar.renderLoading(false);
  })
};

//Обработчик для открытия 
avatarOpened.addEventListener ('click', function () {
  formValidatorAvatar.resetValidation();
  popupWithFormAvatar.open();
});

//Окно с увеличинной картинкой//
const popupWithImage = new PopupWithImage(popupImg);
popupWithImage.setEventListeners();

//Удаления карточки
const popupWithFormDelete = new PopupWithFormDelete(popupDelete);
popupWithFormDelete.setEventListeners();

//Форма добавления карты
const popupWithFormCard = new PopupWithForm(popupCard, callbackFormCard);
popupWithFormCard.setEventListeners();

function clickImg(item) {
  popupWithImage.open(item);
};

function handleLikeClick (card) {
  if (card.isLiked()) {
    api.dltLike(card.returnId())
    .then((res) => {
      card.deletelike()
      card.countLike(res.likes)
    })
    .catch((err) => {
      console.log(`ошибка удаления лайка ${err}`)
    })
  } else {
    api.like(card.returnId())
    .then((res) => {
      card.addlike()
      card.countLike(res.likes)
    })
    .catch((err) => {
      console.log(`ошибка добавления лайка ${err}`)
    })
  }
};

//Функция создания карты
function createCard (item) {
  const card = new Card({
    item: item, 
    handleCardClick:() => clickImg(item),
    handleLikeClick: () => handleLikeClick(card),
    handleDeleteIconClick: (cardId) => {
      popupWithFormDelete.open()
      popupWithFormDelete.setFormSubmit(() => {
        popupWithFormDelete.renderLoading(true);
        api.deleteCard(cardId)
        .then((res) => {
          popupWithFormDelete.close()
          card.deleteCard(res)
        })
        .catch((err) => {
          console.log(`Упс...Проблемы с удалением карточки ${err}`)
        })
        .finally(() => {
          popupWithFormDelete.renderLoading(false);
        })
      })
    }
    },
    userId,
    ".template");
    console.log(userId)
    console.log(item.owner._id)
  return card.getNewCard();
};

//Прорисовка карточек из нашего списка
const section = new Section ({
  items: [],
  renderer: (item) => {
    const element = createCard(item)
    section.addItem(element)
  }}, '.elements')

 
function callbackFormCard (data) {
  popupWithFormCard.renderLoading(true)
  api.addCard({
    name: data.name,
    link: data.link,
  })
  .then((data) => {
    const item = createCard(data)
    section.addItemServer(item)
  })
  .catch((err) => {
    console.log(`ошибка добавления карточки ${err}`)
  })
  .finally(() => {
    popupWithFormCard.renderLoading(false)
  })
  console.log("I work")
};

buttonAdd.addEventListener ('click', function () {
  formValidatorCard.resetValidation();
  popupWithFormCard.open();
})

Promise.all([
  api.getUserInfo(), 
  api.getInitialCards()])
  .then(([user, item]) => {
    userId = user._id;
    userInfo.setUserInfo(user);
    userInfo.addAvatar(user);
    section.rendererOne(item);
  })
  .catch((err) => {
    console.log(`${err}`);
  })

  