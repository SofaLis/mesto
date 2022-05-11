import Popup from "./Popup.js";
export class PopupWithForm extends Popup {
    constructor(popupSelector, callbackForm) {
        super(popupSelector);
        this._callbackForm = callbackForm;
        this._formCard = this._popupSelector.querySelector('.popup__form');
        this._inputList = this._formCard.querySelectorAll('.popup__input');
    }

    _getInputValues () {
        this._obj = {};
        this._inputList.forEach(input => {
            this._obj[input.name] = input.value;
          });
          return this._obj;
    }

    setEventListeners () {
        super.setEventListeners();
        this._formCard.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackForm(this._getInputValues());
            this.close();
        });
        
    }

    close () {
        super.close();
        this._formCard.reset();
    }
}