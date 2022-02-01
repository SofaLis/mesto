// Находим форму в DOM
let FormElement = document.querySelector('.popup');
let NameInput = FormElement.querySelector('.popup__item_name');
let JobInput = FormElement.querySelector('.popup__item_job');
let userName = document.querySelector('.profile__name');
let userJop = document.querySelector('.profile__status');
let ButtonAdd = document.querySelector('.profile__add-button');
let ButtonClose = document.querySelector('.popup__close-button');
let ButtonOpened = document.querySelector('.profile__edit-button');
let Button = document.querySelector('.popup__submit-button');
let Heart = document.querySelector('.element__button');

function poputValue() {
  NameInput.value = userName.textContent;
  JobInput.value = userJop.textContent;
};

function openPopup() { 
    FormElement.classList.add('popup_opened');
    poputValue()
  }; 

function closePopup() { 
    FormElement.classList.remove('popup_opened');
  };


function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = NameInput.value;
    userJop.textContent = JobInput.value;
    closePopup();
  };

ButtonOpened.addEventListener('click', openPopup);
ButtonClose.addEventListener('click', closePopup);
FormElement.addEventListener('submit', formSubmitHandler);