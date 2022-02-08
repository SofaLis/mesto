// Объявляем формы
const popupUser = document.querySelector('.popup_user');
const popupCard = document.querySelector('.popup_cards');
const formCard = popupCard.querySelector('.popup__form');
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
const buttonCloseCard = popupCard.querySelector('.popup__close-button');
const nameInputCard = popupCard.querySelector('.popup__item_card_name');
const linkInputCard = popupCard.querySelector('.popup__item_card_link');
// Элементы третьей формы
const buttonCloseImg = popupImg.querySelector('.popup__close-button');
const imgPopup = popupImg.querySelector('.popup__image');
const namePopup = popupImg.querySelector('.popup__name');
// Место для карточек
const elements = document.querySelector('.elements');
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
//Функции открытия и закрытия форм
function openPopup(popup) { 
  popup.classList.add('popup_opened');
};

function setProfileValues() {
  nameInput.value = username.textContent;
  jobInput.value = userJop.textContent;
};
 
function openPopupUser() {
  openPopup(popupUser);
  setProfileValues();
};

function openPopupCard() {
  openPopup(popupCard);
};

function closePopup(popup) { 
  popup.classList.remove('popup_opened');
};

function closePopupUser() {
  closePopup(popupUser);
};

function closePopupImg() {
  closePopup(popupImg);
};

function closePopupCard() {
  closePopup(popupCard);
};
//Функции отправки форм
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    username.textContent = nameInput.value;
    userJop.textContent = jobInput.value;
    closePopupUser();
  };

function handleCardFormSubmit (evt) {
  evt.preventDefault();
    createCard({
      name: nameInputCard.value,
      link: linkInputCard.value,
    })  
  closePopup(popupCard);
  formCard.reset();
}
// обработчик событий форм
buttonAdd.addEventListener('click', openPopupCard); 
buttonOpenedUser.addEventListener('click', openPopupUser);
buttonCloseUser.addEventListener('click', closePopupUser);
buttonCloseCard.addEventListener('click', closePopupCard);
buttonCloseImg.addEventListener('click', closePopupImg);
popupUser.addEventListener('submit', handleProfileFormSubmit);
popupCard.addEventListener('submit', handleCardFormSubmit);
//функции создания новой карты
function getNewCard(item) {
  const template = document.querySelector('.template').content;
  const templateClone = template.cloneNode(true);
  const heart = templateClone.querySelector('.element__button');
  const deleteButton = templateClone.querySelector('.element__delete');
  const imageCard = templateClone.querySelector('.element__image');
  const name = templateClone.querySelector('.element__name');
  const elementCard = templateClone.querySelector('.element');

  name.textContent = item.name;
  imageCard.src = item.link;
  imageCard.alt = item.name;

  function clickheart() {
    heart.classList.toggle('element__button_active');
  };

  function deleteCard() {
    elementCard.remove();
  };

  function clickImage() {
    namePopup.textContent = item.name;
    imgPopup.src = item.link;
    imgPopup.alt = item.name;
    openPopup(popupImg);
  };

  heart.addEventListener('click', clickheart);
  deleteButton.addEventListener('click', deleteCard);
  imageCard.addEventListener('click', clickImage);
  return templateClone;
};

function createCard(card) {
  const cardElement = getNewCard(card);
  elements.prepend(cardElement);
};

initialCards.forEach(createCard);
 