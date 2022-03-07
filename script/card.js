
export class Card {
    constructor(popup, cardNew){
        this._template = document.querySelector('.template').content;
        this._templateClone = this._template.cloneNode(true);
        this._heartButton = this._templateClone.querySelector('.element__button');
        this._deleteElement = this._templateClone.querySelector('.element__delete');
        this._imgPopup = popup.querySelector('.popup__image');
        this._namePopup = popup.querySelector('.popup__name');
        this._imageCard = this._templateClone.querySelector('.element__image');
        this._name = this._templateClone.querySelector('.element__name');
        this._elementCard = this._templateClone.querySelector('.element');
        this._cardNew = cardNew;

    }
    _clickheart() {
        this._heartButton.classList.toggle('element__button_active');
    };
    //удаления карты
    _deleteCard() {
        this._deleteElement.remove();
    };
    //Функция увеличения картинки по клику
    _clickImage() {
        this._namePopup.textContent = this._cardNew.name;
        this._imgPopup.src = this._cardNew.link;
        this._imgPopup.alt = this._cardNew.name;
        openPopup(popup);
    };
      //функции создания новой карточки
    _getNewCard() {
        this._name.textContent = this._cardNew.name;
        this._imageCard.src = this._cardNew.link;
        this._imageCard.alt = this._cardNew.name;
  
        this._heartButton.addEventListener('click', () => {this._clickheart()});
        this._deleteElement.addEventListener('click', () => {this._deleteCard()});
        this._imageCard.addEventListener('click', () => {this._clickImage()});
        return this._templateClone;
    };
    createCard() {
        const cardElement = this._getNewCard();
        this._cardNew.prepend(cardElement);
    };
}
