
// Объявляем формы
const popupUser = document.querySelector('.popup_user');
const popupCard = document.querySelector('.popup_cards');
const formCard = popupCard.querySelector('.popup__form');
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
//функция закрытия форм по нажатию на кнопочку и фон. 
function click () {
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
  resetValidation(inputs, submitForm, form, validationConfig);
};
//функция открытия формы для добавления карточек
function openCardPoput() { 
  openPopup(popupCard);
};
//закрытие форм
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', clickEsc);
};

//открытие формы пользователя
function setProfileValues() {
  nameInput.value = username.textContent;
  jobInput.value = userJop.textContent;
  openPopup(popupUser);
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
click();
buttonAdd.addEventListener('click', openCardPoput); 
buttonOpenedUser.addEventListener('click', setProfileValues);
buttonCloseUser.addEventListener('click',handleProfileFormSubmit);
popupUser.addEventListener('submit', handleProfileFormSubmit);
popupCard.addEventListener('submit', handleCardFormSubmit);
//функции создания новой карточки
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
 