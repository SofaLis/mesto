
export class Card {
    constructor({item, handleCardClick, handleLikeClick, handleDeleteIconClick}, userId, cardSelector){
        this._link = item.link;
        this._name = item.name;
        this._alt = item.alt;
        this._ownerid = item.owner._id;
        this._likes = item.likes;
        this._Id = item._id;
        this._likesCheck = this._likes.length;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._userId = userId;
        this._isLiked = this._likes.some(like => like._id == this._userId);
    };

    isLiked() {
        return this._isLiked
    };

    _getTemplate() {
        const templateContent  = document.querySelector(this._cardSelector).content;
        return templateContent.querySelector('.element').cloneNode(true);
    };
    
    _checkClickheart(check) {
        this._likebtn = this._elementCard.querySelector('.element__button');
        this._isLiked
            ? this._likebtn.classList.add('element__button_active')
            : this._likebtn.classList.remove('element__button_active');
            this._btnLickNum.textContent = check;
    };

    like(isLiked, check) {
        this._isLiked = isLiked;
        this._checkClickheart(check);
    }

    _checkIdcard(){ 
        if (this._ownerId !== this._userId) {
            this._deletbtn.classList.add('element__delete_opracity')
        } else {
            this._deletbtn.classList.remove('element__delete_opracity')
        }
    };

    _setEventListeners() {
        this._btnLickNum.textContent = this._likes.length; 
        this._likebtn.addEventListener('click', () => {this._handleLikeClick(this)});
        this._deletbtn.addEventListener('click', () => {this._handleDeleteIconClick(this._elementCard)});
        this._imgCard.addEventListener('click', () => {this._handleCardClick({ name: this._name, link: this._link })});
    }
    
    getNewCard() {
        this._elementCard = this._getTemplate();
        this._imgCard =  this._elementCard.querySelector('.element__image');
        this._nameCard = this._elementCard.querySelector('.element__name');
        this._deletbtn = this._elementCard.querySelector('.element__delete');
        this._btnLickNum = this._elementCard.querySelector('.element__like');
        this._likebtn = this._elementCard.querySelector('.element__button');
        this._setEventListeners(); 
        this._imgCard.src = this._link;
        this._imgCard.alt = this._name;
        this._nameCard.textContent =  this._name;
        this._checkClickheart(this._likesCheck);
        this._checkIdcard()
        return this._elementCard;
    };

    //удаления карты
    deleteCard() {
        this._elementCard.remove();
        this._elementCard = null;
    };

    returnId () {
        return this._Id
    };
}

