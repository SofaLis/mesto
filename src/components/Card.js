
export class Card {
    constructor({item, handleCardClick, handleLikeClick, handleDeleteIconClick}, userId, cardSelector){
        this._link = item.link;
        this._name = item.name;
        this._ownerid = item.owner._id;
        this._likes = item.likes;
        this._Id = item._id;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._userId = userId;
        this._isLiked = this._likes.some((like) => like._id == this._userId);
    };

    _getTemplate() {
        const templateContent  = document.querySelector(this._cardSelector).content;
        return templateContent.querySelector('.element').cloneNode(true);
    };

    _setEventListeners() {
        this._likebtn.addEventListener('click', () => {this._handleLikeClick()});
        this._deletbtn.addEventListener('click', () => {this._handleDeleteIconClick(this._Id)});
        this._imgCard.addEventListener('click', () => {this._handleCardClick({ name: this._name, link: this._link })});
    }
    
    getNewCard() {
        this._elementCard = this._getTemplate();
        this._imgCard =  this._elementCard.querySelector('.element__image');
        this._nameCard = this._elementCard.querySelector('.element__name');
        this._deletbtn = this._elementCard.querySelector('.element__delete');
        this._btnLickNum = this._elementCard.querySelector('.element__like');
        this._likebtn = this._elementCard.querySelector('.element__button');
        this._likeNum = this._elementCard.querySelector('.element__like');
        this._checkLike();
        this._setEventListeners();
        //this._checkIdcard();
        this._imgCard.src = this._link;
        this._imgCard.alt = this._name;
        this._nameCard.textContent =  this._name;
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

    //Методы для лайков
    isLiked() {
        return this._isLiked
    };

    addlike() {
        this._likebtn.classList.add('element__button_active');
        this._isLiked = true
    };

    deletelike() {
        this._likebtn.classList.remove('element__button_active');
        this._isLiked = false
    };

    countLike(item) {
        this._likes = item
        this._likeNum.textContent = this._likes.length;
    }

    _checkLike() {
        if(this._isLiked) {
            this.addlike() 
        } else {
            this.deletelike()
        }
    }
    //Проверка на ID
    _checkIdcard() { 
        if (this._ownerId === this._userId) {
            this._deletbtn.classList.remove('element__delete_opracity')
        } else {
            this._deletbtn.classList.add('element__delete_opracity')
        }
    };
}

