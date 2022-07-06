export default class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeOverlay = this._closeOverlay.bind(this); 
    }
    open () {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close () { 
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    
    _closeOverlay(event) {
        if(event.target === event.currentTarget) {
          this.close();
        }
      }

    _handleEscClose (event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners () {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', () => this.close());
        this._popupElement.addEventListener('click', (event) => this._closeOverlay(event));
    };
}
