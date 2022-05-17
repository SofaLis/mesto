//Экспортируем данные
import {FormValidator} from '../components/FormValidator.js'; 
import {initialCards, settingsObject, validationConfig, popupUser, 
  popupCard, userName, userJop, popupImg, buttonOpenedUser, 
  buttonAdd, nameInputCard, linkInputCard, nameInput, jobInput, popupUserGuery, popupCardGuery, elements, popupAvatarGuery, avatar, popupAvatar, avatarOpened} from '../utils/constants.js';
import {PopupWithImage} from '../components/PopupWithImage';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import {Card} from '../components/Card.js';

import './index.css'
//Валидация
const formValidatorUser = new FormValidator(validationConfig, popupUserGuery);
formValidatorUser.setEventListeners();
const formValidatorCard = new FormValidator(validationConfig, popupCardGuery);
formValidatorCard.setEventListeners();
const formValidatorAvatar = new FormValidator(validationConfig, popupAvatarGuery);
formValidatorAvatar.setEventListeners();

//User info//
const userInfo = new UserInfo(userName, userJop, avatar);
//Форма изменения ника и описания
const popupWithFormUser = new PopupWithForm(popupUser, callbackFormUser)
popupWithFormUser.setEventListeners();
//Форма добавления карты
const popupWithFormCard = new PopupWithForm(popupCard, callbackFormCard)
popupWithFormCard.setEventListeners();

//Окно с увеличинной картинкой//
const popupWithImage = new PopupWithImage(popupImg);
popupWithImage.setEventListeners();

function clickImg(item) {
  popupWithImage.open(item);
} 
//Функция создания карты
function createCard (item) {
  const card = new Card({item: item, handleCardClick:() => clickImg(item)}, ".template");
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


function callbackFormUser (data) {
  userInfo.setUserInfo(data)
}
 
function callbackFormCard (data) {
  const obj = {};
  obj.title = data.heading;
  obj.link = data.subheading;
  const cardElement = createCard(obj);
  elements.prepend(cardElement);
}

function callbackFormAvatar (data) {
  userInfo.addAvatar(data);
  popupWithFormAvatar.close();
}

//вызов функции
buttonOpenedUser.addEventListener('click', function () {
  const item = userInfo.getUserInfo()
  nameInput.value = item.name;
  jobInput.value = item.job;
  formValidatorUser.resetValidation();
  popupWithFormUser.open();
});

buttonAdd.addEventListener ('click', function () {
  formValidatorCard.resetValidation();
  popupWithFormCard.open();
})

avatarOpened.addEventListener ('click', function () {
  formValidatorAvatar.resetValidation();
  popupWithFormAvatar.open();
})

//Avatar
const popupWithFormAvatar = new PopupWithForm(popupAvatar, callbackFormAvatar)
popupWithFormAvatar.setEventListeners();
