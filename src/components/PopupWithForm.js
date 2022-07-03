import Popup from "./Popup.js";
export class PopupWithForm extends Popup {
    constructor(popupSelector, callbackForm) {
        super(popupSelector);
        this._callbackForm = callbackForm;
        this._formCard = this._popupSelector.querySelector('.popup__form');
        this._inputList = this._formCard.querySelectorAll('.popup__item');
        this._submitButton = this._formCard.querySelector('.popup__submit-button');
    }

    _getInputValues() {
    this._obj = {}
    Array.from(this._inputList).forEach((input) => {
        this._obj[input.name] = input.value;
    });
    return this._obj
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

    renderLoading (isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = 'Да'
        }
    }
}