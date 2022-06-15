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

import './index.css'
//Валидация
const formValidatorUser = new FormValidator(validationConfig, popupUserGuery);
formValidatorUser.setEventListeners();
const formValidatorCard = new FormValidator(validationConfig, popupCardGuery);
formValidatorCard.setEventListeners();
const formValidatorAvatar = new FormValidator(validationConfig, popupAvatarGuery);
formValidatorAvatar.setEventListeners();

//Вызываем класс Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: 'e18d6733-db7e-49ed-9171-9d988e951e01',
    'Content-Type': 'application/json'
  }
});

//User info//
const userInfo = new UserInfo(userName, userJop, avatar);
//Форма изменения ника и описания
const popupWithFormUser = new PopupWithForm(popupUser, callbackFormUser)
popupWithFormUser.setEventListeners();

function callbackFormUser (data) {
  popupWithFormUser.renderLoading(true);
  api.editProfile({
    name: data.nameInput,
    about: data.jobInput
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
    avatar: data.avatarInput
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
const popupWithFormDelete = new popupWithFormDelete(popupDelete);
popupWithFormDelete.setEventListeners();

//Форма добавления карты
const popupWithFormCard = new PopupWithForm(popupCard, callbackFormCard)
popupWithFormCard.setEventListeners();

function clickImg(item) {
  popupWithImage.open(item);
};

function handleLikeClick (card) {
  if (card.isLiked()) {
    api.dltLike(card._cardId)
    .then((res) => {
      card.like(res)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  } else {
    api.like(card._cardId)
    .then((res) => {
      card.like(res)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  }
};

function handleDeleteIconClick (card) {
  popupWithFormDelete.open()
  popupWithFormDelete.setFormSubmit(() => {
    popupWithFormDelete.renderLoading(true);
    api.deleteCard(card._cardId)
    .then((res) => {
      popupWithFormDelete.close()
      card.deleteCard(res)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      PopupWithFormDelet.renderLoading(false);
    })
  })
}
//Функция создания карты
function createCard (item) {
  const card = new Card({
    item: item, 
    handleCardClick:() => clickImg(item),
    handleLikeClick: handleLikeClick,
    handleDeleteIconClick: handleDeleteIconClick
  }, 
    ".template");
  return card.getNewCard();
};

//Прорисовка карточек из нашего списка
const section = new Section ({
  items: initialCards,
  renderer: (item) => {
    const element = createCard(item)
    section.addItem(element)
  }}, '.elements')
section.rendererOne()

 
function callbackFormCard (data) {
  const obj = {};
  obj.title = data.heading;
  obj.link = data.subheading;
  const cardElement = createCard(obj);
  elements.prepend(cardElement);
}

buttonAdd.addEventListener ('click', function () {
  formValidatorCard.resetValidation();
  popupWithFormCard.open();
})

let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, item]) => {
    userId = user._id;
    userInfo.setUserInfo(user);
    userInfo.addAvatar(user);
    section.rendererOne(item);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })