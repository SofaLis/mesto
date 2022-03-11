import {clickImage} from './script.js';
export const settingsObject = {
    template: '.template',
    like: '.element__button',
    delete: '.element__delete',
    img: '.element__image',
    title: '.element__name',
    element: '.element',
    clickImg: clickImage
}


export class Card {
    constructor(name, link, settingsObject){
        this._link = link;
        this._name = name;
        this._template = settingsObject.template;
        this._heartButton = settingsObject.like;
        this._deleteElement = settingsObject.delete;
        this._imageCard = settingsObject.img;
        this._title = settingsObject.title;
        this._element = settingsObject.element;
        this._clickImg = settingsObject.clickImg;
    }
    _clickheart(like) {
        like.classList.toggle('element__button_active');
    };
    //удаления карты
    _deleteCard(deleteElement) {
        deleteElement.remove(); 
    };
    _getTemplate() {
        const templateClone  = document.querySelector(this._template).content.cloneNode(true);
        return templateClone;
    }
      //функции создания новой карточки
    getNewCard() {
        this._elementCard = this._getTemplate();
        const imgCard =  this._elementCard.querySelector(this._imageCard);
        const titleCard = this._elementCard.querySelector(this._title);
        const likebtn = this._elementCard.querySelector(this._heartButton);
        const deletbtn = this._elementCard.querySelector(this._deleteElement);
        const element = this._elementCard.querySelector(this._element);
        titleCard.textContent =  this._name;
        imgCard.src = this._link;
        imgCard.alt = this._name;
        likebtn.addEventListener('click', () => {this._clickheart(likebtn)});
        deletbtn.addEventListener('click', () => {this._deleteCard(element)});
        imgCard.addEventListener('click', () => {this._clickImg(this._name, this._link)});
        return this._elementCard;
    };
}

