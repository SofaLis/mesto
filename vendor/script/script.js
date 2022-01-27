// Находим форму в DOM
let FormElement = document.querySelector('.popup');
let NameInput = FormElement.querySelector('.popup__item_name');
let JobInput = FormElement.querySelector('.popup__item_job');
let userName = document.querySelector('.profile__name');
let userJop = document.querySelector('.profile__status');
let ButtonAdd = document.querySelector('.profile__add-button');
let ButtonClose = document.querySelector('.popup__icon-button');
let ButtonOpened = document.querySelector('.profile__edit-button');
let Button = document.querySelector('.popup__button');
let Heart = document.querySelector('.element__button');

ButtonOpened.addEventListener ('click', function OpenPopup() {
    FormElement.classList.add('popup_opened');
  });

ButtonClose.addEventListener('click', function ClosePopup() {
    FormElement.classList.remove('popup_opened');
  });

  function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = NameInput.value;
    userJop.textContent = JobInput.value;
    ClosePopup();
  };
  
  function poputValue() {
    NameInput.value = userName.textContent;
    JobInput.value = userJop.textContent;
    OpenPopup()
  }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
FormElement.addEventListener('submit', formSubmitHandler);