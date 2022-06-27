import Popup from "./Popup.js";
export class PopupWithFormDelete extends Popup {
    constructor (popupSelector) {
      super (popupSelector);
      this._formCard = document.querySelector('.popup_delete');
      this._submitButton = this._formCard.querySelector('.popup__submit-button');
    }

    setEventListeners () {
        super.setEventListeners();
        this._formCard.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.callbackForm();
            this.close();
        });  
    }
  
    setFormSubmit(callbackForm) {
        this.callbackForm = callbackForm
    }
  
    renderLoading(isLoading) {
      if (isLoading) {
        this._buttonSubmit.textContent = "Сохранение...";
      } else {
        this._buttonSubmit.textContent = "Да";
      }
    }
  
  }