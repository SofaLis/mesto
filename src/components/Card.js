
export class Card {
    constructor({item, handleCardClick, handleLikeClick, handleDeleteIconClick}, userId, cardSelector){
        this._link = item.link;
        this._title = item.title;
        this._alt = item.alt;
        this._ownerid = item.owner._id;
        this._likes = item.likes;
        this._Id = item._id;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._userId = userId;
    };

    isLiked() {
        return this._likes.some((like) => like._id === this._userId);
    };

    _getTemplate() {
        const templateContent  = document.querySelector(this._cardSelector).content;
        return templateContent.querySelector('.element').cloneNode(true);
    };
    
    _checkClickheart() {
        this._likebtn = this._elementCard.querySelector('.element__button');
        if (this._isLiked()) {
            this._likebtn.classList.add('element__button_active')
          } else {
            this._likebtn.classList.remove('element__button_active');
          }
    };

    _checkIdcard(){ 
        if (this._ownerId !== this._userId) {
          this._eltmentDelete.classList.add('element__delete_opracity')
        } else {
          this._eltmentDelete.classList.remove('element__delete_opracity')
        }
    };

    _setEventListeners() {
        this._btnLickNum.textContent = this._likes.length; 
        this._likebtn.addEventListener('click', () => {this._clickheart(this._likebtn)});
        this._deletbtn.addEventListener('click', () => {this._deleteCard(this._elementCard)});
        this._imgCard.addEventListener('click', () => {this._handleCardClick({ title: this._title, link: this._link })});
    }
    
    getNewCard() {
        this._elementCard = this._getTemplate();
        this._imgCard =  this._elementCard.querySelector('.element__image');
        this._titleCard = this._elementCard.querySelector('.element__name');
        this._deletbtn = this._elementCard.querySelector('.element__delete');
        this._btnLickNum = this._elementCard.querySelector('.element__like');
        this._likebtn = this._elementCard.querySelector('.element__button');
        this._setEventListeners();

        this._btnLickNum.textContent = this._likes.length; 
        this._imgCard.src = this._link;
        this._imgCard.alt = this._title;
        this._titleCard.textContent =  this._title;
        this._checkClickheart()
        this._checkIdcard()
        return this._elementCard;
    };

    //Проверка на то, кто добавил карточку

    like = (res) => {
        this._likes = res.likes;
        this._btnLickNum.textContent = this._likes.length;
        this._elementLike.classList.toggle('element__button_active');
    };

    //удаления карты
    deleteCard() {
        this._elementCard.remove();
        this._elementCard = null;
    };
}

