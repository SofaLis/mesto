import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._namePopup = document.querySelector('.popup__name');
        this._imgBig = document.querySelector('.popup__image');
    }

    open ({name, link}) {
        super.open();
        this._imgBig.src = link;
        this._imgBig.alt = name;
        this._namePopup.textContent = name;
    }
}