
export class Card {
    constructor({item, handleCardClick}, cardSelector){
        this._link = item.link;
        this._title = item.title;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }
    _clickheart(like) {
        like.classList.toggle('element__button_active');
    };
    //удаления карты
    _deleteCard(deleteElement) {
        deleteElement.remove();
        this._element = null;
    };
    _getTemplate() {
        const templateContent  = document.querySelector(this._cardSelector).content;
        return templateContent.querySelector('.element').cloneNode(true);
    }

    getNewCard() {
        this._elementCard = this._getTemplate();
        this._imgCard =  this._elementCard.querySelector('.element__image');
        this._titleCard = this._elementCard.querySelector('.element__name');
        this._setEventListeners();
        this._imgCard.src = this._link;
        this._imgCard.alt = this._title;
        this._titleCard.textContent =  this._title;
        return this._elementCard;
    };

    _setEventListeners() {
        this._imgCard =  this._elementCard.querySelector('.element__image');
        this._likebtn = this._elementCard.querySelector('.element__button');
        this._deletbtn = this._elementCard.querySelector('.element__delete');
        this._element = this._elementCard.querySelector('.element');
        this._likebtn.addEventListener('click', () => {this._clickheart(this._likebtn)});
        this._deletbtn.addEventListener('click', () => {this._deleteCard(this._elementCard)});
        this._imgCard.addEventListener('click', () => {this._handleCardClick({ title: this._title, link: this._link })});
    }
}

