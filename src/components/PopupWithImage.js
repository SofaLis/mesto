import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._namePopup = document.querySelector('.popup__name');
        this._imgBig = document.querySelector('.popup__image');
    }

    open ({title, link}) {
        super.open();
        this._imgBig.src = link;
        this._imgBig.alt = title;
        this._namePopup.textContent = title;
    }
}