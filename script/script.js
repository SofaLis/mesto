//Экспортируем данные
import {FormValidator} from './valid.js'; 
import {Card} from './card.js';
import {settingsObject, validationConfig, initialCards} from '../utils/constants.js';

// Объявляем формы
const popupUser = document.querySelector('.popup_user');
const popupCard = document.querySelector('.popup_cards');
const forms = document.querySelectorAll('.popup');
const popupImg = document.querySelector('.popup_image');
// Элементы первой формы
const nameInput = popupUser.querySelector('.popup__item_name');
const jobInput = popupUser.querySelector('.popup__item_job');
const username = document.querySelector('.profile__name');
const userJop = document.querySelector('.profile__status');
const buttonCloseUser = popupUser.querySelector('.popup__close-button');
const buttonOpenedUser = document.querySelector('.profile__edit-button');
// Элементы второй формы
const buttonAdd = document.querySelector('.profile__add-button');
const nameInputCard = popupCard.querySelector('.popup__item_card_name');
const linkInputCard = popupCard.querySelector('.popup__item_card_link');
// Элементы третьей формы
const namePopup = popupImg.querySelector('.popup__name');
const formCard = popupCard.querySelector('.popup__form_card');
const imgBig = document.querySelector('.popup__image');
//функция закрытия форм по нажатию на кнопочку и фон. 
function closeForm () {
  forms.forEach( (popup) => {
    popup.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('popup_opened')) {
          closePopup(popup);
        };
        if (event.target.classList.contains('popup__close-button')) {
          closePopup(popup);
        };
    });
  });
};
//закрытие при нажатии на esc
function clickEsc(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};
//функция открытия форм
function openPopup(popup) { 
  popup.classList.add('popup_opened');
  document.addEventListener("keyup", clickEsc);
};
//функция открытия формы для добавления карточек
function openCardPopup() { 
  formValidatorCard.resetValidation();
  formCard.reset();
  openPopup(popupCard);
};
//закрытие форм
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', clickEsc);
};

function closeUser() {
  closePopup(popupUser);
};

//открытие формы пользователя
function setProfileValues() {
  openPopup(popupUser);
  nameInput.value = username.textContent;
  jobInput.value = userJop.textContent;
  formValidatoruser.resetValidation();
};

//Функции отправки форм пользователя
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    username.textContent = nameInput.value;
    userJop.textContent = jobInput.value;
    closePopup(popupUser);
};

function createCards(name, link, settingsObject) {
  const card = new Card(name, link, settingsObject)
  const cardElement = card.getNewCard();
  return cardElement; 
};

const container = document.querySelector('.elements');
initialCards.forEach((i) => {
  container.prepend(createCards(i.name, i.link, settingsObject));
});



function handleCardFormSubmit (evt) {
  evt.preventDefault();
  container.prepend(createCards(nameInputCard.value, linkInputCard.value, settingsObject));  
  closePopup(popupCard);
  formCard.reset();
};
// обработчик событий
closeForm();
buttonAdd.addEventListener('click', openCardPopup); 
buttonOpenedUser.addEventListener('click', setProfileValues);
buttonCloseUser.addEventListener('click', closeUser);
popupUser.addEventListener('submit', handleProfileFormSubmit);
popupCard.addEventListener('submit', handleCardFormSubmit);

export function clickImage (name, link) {
  namePopup.textContent = name;
  imgBig.src = link;
  imgBig.alt = name;
  openPopup(popupImg);
};

const formValidatoruser = new FormValidator(validationConfig, popupUser);
formValidatoruser.setEventListeners();


const formValidatorCard = new FormValidator(validationConfig, popupCard);
formValidatorCard.setEventListeners();
