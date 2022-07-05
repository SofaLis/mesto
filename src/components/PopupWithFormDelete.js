import Popup from "./Popup.js";
export class PopupWithFormDelete extends Popup {
    constructor (popupElement) {
      super (popupElement);
      this._formCard = document.querySelector(popupElement);
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
  
    renderLoading (isLoading) {
      if (isLoading) {
          this._submitButton.textContent = 'Сохранение...';
      } else {
          this._submitButton.textContent = 'Да'
      }
  }
  
  }