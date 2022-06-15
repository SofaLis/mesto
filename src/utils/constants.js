
export const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const popupUser = '.popup_user';
export const popupCard = '.popup_cards';
export const forms = '.popup';
export const popupImg = '.popup_image';
export const popupAvatar = '.popup_avatar';
export const popupDelete = '.popup_delete';
export const popupUserGuery = document.querySelector('.popup_user');
export const popupCardGuery = document.querySelector('.popup_cards');
export const popupImgGuery = document.querySelector('.popup_image');
export const popupAvatarGuery = document.querySelector('.popup_avatar');
// Элементы первой формы
export const nameInput = document.querySelector('.popup__item_name');
export const jobInput = document.querySelector('.popup__item_job');
export const userName = document.querySelector('.profile__name');
export const userJop = document.querySelector('.profile__status');
export const buttonCloseUser = popupUserGuery.querySelector('.popup__close-button');
export const buttonOpenedUser = document.querySelector('.profile__edit-button');
// Элементы второй формы
export const buttonAdd = document.querySelector('.profile__add-button');
export const nameInputCard = popupCardGuery.querySelector('.popup__item_card_name');
export const linkInputCard = popupCardGuery.querySelector('.popup__item_card_link');
// Элементы третьей формы
export const namePopup = popupImgGuery.querySelector('.popup__name');
export const formCard = popupCardGuery.querySelector('.popup__form_card');
export const imgBig = document.querySelector('.popup__image');
export const elements = document.querySelector('.elements');

export const avatar =  document.querySelector('.profile__avatar');
export const avatarOpened = document.querySelector('.profile__avatar_hover');




export const settingsObject = {
    template: '.template',
    like: '.element__button',
    delete: '.element__delete',
    img: '.element__image',
    title: '.element__name',
    element: '.element'
};

export const validationConfig = {
    //Класс самой формы
    formSelector: '.popup__form',
    //Класс поля формы
    inputSelector: '.popup__item',
    //Кнопка Сохранить
    submitButtonSelector: '.popup__submit-button',
    //Нерабочая кнопка сохранить
    inactiveButtonClass: 'popup__submit-button_disabled',
    //Неработающее поле формы
    inputErrorClass: 'popup__item_type_error',
    //Видимая ошибка
    errorClassActive: 'popup__input-error_active',
    //Ошибка
    errorClass: 'popup__input-error'
  };
