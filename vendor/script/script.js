// Находим форму в DOM
let formElement = document.querySelector('.popup');
let nameInput = popup.querySelector('.popup__item_name');
let jobInput = popup.querySelector('.popup__item_job');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__status');
let button = document.querySelector('.profile__add-button');
let Buttonclose = document.querySelector('.popup__icon-button');
let Opened = document.querySelector('.profile__edit-button');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
Opened.onclick = function open() {
    popup.classList.add('popup_opened');
}

Opened.addEventListener('click', function() {
    popup.style = 'display: flex;';
  });

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    userName.textContent = nameInput.value;
    userJop.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 