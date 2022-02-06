// Объявляем формы
const FormElement = document.querySelector('.popup');
const FormUser = document.querySelector('.popup_user');
const FormCard = document.querySelector('.popup_cards');
const FormImg = document.querySelector('.popup_image');
// Элементы первой формы
const NameInput = FormUser.querySelector('.popup__item_name');
const JobInput = FormUser.querySelector('.popup__item_job');
const userName = document.querySelector('.profile__name');
const userJop = document.querySelector('.profile__status');
const ButtonCloseUser = FormUser.querySelector('.popup__close-button');
const ButtonOpened = document.querySelector('.profile__edit-button');
const Button = document.querySelector('.popup__submit-button');
// Элементы второй формы
const ButtonAdd = document.querySelector('.profile__add-button');
const ButtonCloseCard = FormCard.querySelector('.popup__close-button');
const NameInputCard = FormCard.querySelector('.popup__card_name');
const LinkInputCard = FormCard.querySelector('.popup__card_link');
// Элементы третьей формы
const ButtonCloseImg = FormImg.querySelector('.popup__close-button');
const ImgPopup = FormImg.querySelector('.popup__image');
const NamePopup = FormImg.querySelector('.popup__name');
// Место для карточек
const Elements = document.querySelector('.elements');
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

function poputValue() {
  NameInput.value = userName.textContent;
  JobInput.value = userJop.textContent;
};
 
function openPopupUser() {
  openPopup(FormUser);
  poputValue();
};

function openPopupCard() {
  openPopup(FormCard);
};

function closePopup(popup) { 
  popup.classList.remove('popup_opened');
};

function closePopupUser() {
  closePopup(FormUser);
};

function closePopupImg() {
  closePopup(FormImg);
};

function closePopupCard() {
  closePopup(FormCard);
};
//Функции отправки форм
function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = NameInput.value;
    userJop.textContent = JobInput.value;
    closePopupUser();
  };

function FormCardSumit (evt) {
  evt.preventDefault();
    CreateCard({
      name: NameInputCard.value,
      link: LinkInputCard.value,
    })  
  closePopup(FormCard);
  FormCard.reset();
}
// обработчик событий форм
ButtonAdd.addEventListener('click', openPopupCard); 
ButtonOpened.addEventListener('click', openPopupUser);
ButtonCloseUser.addEventListener('click', closePopupUser);
ButtonCloseCard.addEventListener('click', closePopupCard);
ButtonCloseImg.addEventListener('click', closePopupImg);
FormUser.addEventListener('submit', formSubmitHandler);
FormCard.addEventListener('submit', FormCardSumit);
//функции создания новой карты
function NewCard(item) {
  const Template = document.querySelector('.template').content;
  const TemplateClone = Template.cloneNode(true);
  const Heart = TemplateClone.querySelector('.element__button');
  const Delete = TemplateClone.querySelector('.element__delete');
  const ImageCard = TemplateClone.querySelector('.element__image');
  const Name = TemplateClone.querySelector('.element__name');
  const ElementCard = TemplateClone.querySelector('.element');

  Name.textContent = item.name;
  ImageCard.src = item.link;
  ImageCard.alt = item.name;

  function clickHeart() {
    Heart.style = 'background: url(images/Black.png)';
  };

  function DeleteCard() {
    ElementCard.remove();
  };

  function ClickImage() {
    NamePopup.textContent = item.name;
    ImgPopup.src = item.link;
    ImgPopup.alt = item.name;
    openPopup(FormImg);
  };

  Heart.addEventListener('click', clickHeart);
  Delete.addEventListener('click', DeleteCard);
  ImageCard.addEventListener('click', ClickImage);
  return TemplateClone;
};

function CreateCard(card) {
  CardElement = NewCard(card);
  Elements.prepend(CardElement);
};

initialCards.forEach(CreateCard);
 