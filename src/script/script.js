//Экспортируем данные
import {FormValidator} from './valid.js'; 
import {initialCards, settingsObject, validationConfig, popupUser, 
  popupCard, userName, userJop, popupImg, buttonOpenedUser, 
  buttonAdd, nameInputCard, linkInputCard, nameInput, jobInput, popupUserGuery, popupCardGuery, elements} from '../utils/constants.js';
import {PopupWithImage} from './popupWithImage.js';
import {PopupWithForm} from './popupWithForm.js';
import {UserInfo} from './userInfo.js';
import { Section } from './section.js';
import {Card} from './card.js';

import '../pages/index.css'
//Валидация
const formValidatorUser = new FormValidator(validationConfig, popupUserGuery);
formValidatorUser.setEventListeners();
const formValidatorCard = new FormValidator(validationConfig, popupCardGuery);
formValidatorCard.setEventListeners();

//User info//
const userInfo = new UserInfo(userName, userJop);
//Форма изменения ника и описания
const popupWithFormUser = new PopupWithForm(popupUser, callbackFormUser)
function callbackFormUser() {
  userInfo.setUserInfo(nameInput.value, jobInput.value);
};
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

function callbackFormCard() {
  const item = {
    title: nameInputCard.value,
    link: linkInputCard.value
  };
  const newCard = createCard(item);
  elements.prepend(newCard);
};

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
