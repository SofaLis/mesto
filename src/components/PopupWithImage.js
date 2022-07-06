import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._namePopup = this._popupElement.querySelector('.popup__name');
        this._imgBig = this._popupElement.querySelector('.popup__image');
    }

    open ({name, link}) {
        super.open();
        this._imgBig.src = link;
        this._imgBig.alt = name;
        this._namePopup.textContent = name;
    }
}