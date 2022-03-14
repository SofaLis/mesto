import {clickImage} from '../script/script.js'; 
export const settingsObject = {
    template: '.template',
    like: '.element__button',
    delete: '.element__delete',
    img: '.element__image',
    title: '.element__name',
    element: '.element',
    clickImg: clickImage
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

export const initialCards = [
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