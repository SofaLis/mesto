import {clickImage} from './script.js';
export const settingsObject = {
    template: '.template',
    like: '.element__button',
    delete: '.element__delete',
    img: '.element__image',
    title: '.element__name',
    element: '.element',
    clickImg: clickImage,
}


export class Card {
    constructor(name, link, settingsObject){
        this._link = link;
        this._name = name;
        this._template = settingsObject.template.content;
        this._heartButton = settingsObject.like;
        this._deleteElement = settingsObject.delete;
        this._imageCard = settingsObject.img;
        this._title = settingsObject.title;
        this._elementCard = settingsObject.element;
        this._clickImg = settingsObject.clickImg;
    }
    _clickheart() {
        this._heartButton.classList.toggle('element__button_active');
    };
    //удаления карты
    _deleteCard() {
        this._elementCard.remove();
    };
      //функции создания новой карточки
    getNewCard() {
        this._title.textContent =  this._name;
        this._imageCard.src = this._link;
        this._imageCard.alt = this._name;
        this._heartButton.addEventListener('click', () => {this._clickheart()});
        this._deleteElement.addEventListener('click', () => {this._deleteCard()});
        this._imageCard.addEventListener('click', () => {this._clickImg});
        return this._templateClone;
    };
}

export function createCard(name, link, settingsObject) {
    const card = new Card(name, link, settingsObject)
    const cardElement = card.getNewCard();
    return cardElement; 
}
