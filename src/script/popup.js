export default class Popup {
    constructor(popupSelector){
        this._popupSelector = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeOverlay = this._closeOverlay.bind(this); 
    }
    open () {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close () { 
        this._popupSelector.classList.remove('popup_opened');
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
        this._popupSelector.querySelector('.popup__close-button').addEventListener('click', () => this.close());
        this._popupSelector.addEventListener('click', (event) => this._closeOverlay(event));
    };
}
