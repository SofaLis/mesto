//Экспортируем данные
import {validationConfig, FormValidator} from './valid.js'; 
import {Card, settingsObject, createCard} from './card.js';

// Объявляем формы
const popupUser = document.querySelector('.popup_user');
const popupCard = document.querySelector('.popup_cards');
const forms = document.querySelectorAll('.popup');
const popupImg = document.querySelector('.popup_image');
const form = document.querySelector('.popup');
const submitForm = form.querySelector('.popup__submit-button');
const inputs =  Array.from(form.querySelectorAll('.popup__item'));
// Элементы первой формы
const nameInput = popupUser.querySelector('.popup__item_name');
const jobInput = popupUser.querySelector('.popup__item_job');
const username = document.querySelector('.profile__name');
const userJop = document.querySelector('.profile__status');
const buttonCloseUser = popupUser.querySelector('.popup__close-button');
const buttonOpenedUser = document.querySelector('.profile__edit-button');
const formUser = popupUser.querySelector('.popup__form_user');
// Элементы второй формы
const buttonAdd = document.querySelector('.profile__add-button');
const buttonCloseCard = popupCard.querySelector('.popup__close-button');
const nameInputCard = popupCard.querySelector('.popup__item_card_name');
const linkInputCard = popupCard.querySelector('.popup__item_card_link');
const inputsCard =  Array.from(popupCard.querySelectorAll('.popup__item'));
const submitCard = popupCard.querySelector('.popup__submit-button');
// Элементы третьей формы
const buttonCloseImg = popupImg.querySelector('.popup__close-button');
const namePopup = popupImg.querySelector('.popup__name');
const formCard = popupCard.querySelector('.popup__form_card');
// Первоначальный набор значений
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

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
  formValidatoruser.resetValidation();
  openPopup(popupUser);
  nameInput.value = username.textContent;
  jobInput.value = userJop.textContent;
};

//Функции отправки форм пользователя
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    username.textContent = nameInput.value;
    userJop.textContent = jobInput.value;
    closePopup(popupUser);
};
//Функция отравки формы для добавления карточек
function handleCardFormSubmit (evt) {
  evt.preventDefault();
    createCard({
      name: nameInputCard.value,
      link: linkInputCard.value,
    });  
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

export function clickImage() {
  imgPopup = popup.querySelector('.popup__image');
  namePopup = popup.querySelector('.popup__name');
  namePopup.textContent = initialCards.name;
  imgPopup.src = initialCards.link;
  imgPopup.alt =initialCards.name;
  openPopup(popup);
};

createCard(initialCards.name, initialCards.link, settingsObject);

const cardClass = new Card(popupImg, elements);
initialCards.forEach(cardClass.createCard);

const formValidatoruser = new FormValidator(validationConfig, popupUser);
formValidatoruser.enableValidation();


const formValidatorCard = new FormValidator(validationConfig, popupCard);
formValidatorCard.enableValidation();
