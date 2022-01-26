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
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler () {
  NameInput.value = userName.textContent;
  JobInput.value = userJop.textContent;
}

ButtonOpened.addEventListener('click', function() {
    FormElement.classList.add('popup_opened');
    formSubmitHandler ();
  });

ButtonClose.addEventListener('click', function() {
    FormElement.classList.remove('popup_opened');
  });

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
FormElement.addEventListener('submit', formSubmitHandler); 