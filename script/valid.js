const showInputError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClassActive}) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClassActive);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, {inputErrorClass, errorClassActive}) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClassActive);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, classList) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, classList);
  } else {
    hideInputError(formElement, inputElement, classList);
  }
};

const setEventListeners = (formElement, {inputSelector, submitButtonSelector}, classList) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, classList);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, classList);
      toggleButtonState(inputList, buttonElement, classList);
    });
  });
};

const enableValidation = ({formSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, rest);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

const toggleButtonState = (inputList, buttonElement,  {inactiveButtonClass}) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', '');
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled', '');
  }
};

function resetValidation(inputList, buttonElement, formElement) { 
  toggleButtonState(inputList, buttonElement); 

  inputList.forEach((inputElement) => { 
    hideInputError(formElement, inputElement); 
  }); 
} 
  
  enableValidation({
    //Класс самой формы
    formSelector: '.popup__form',
    //Класс поля формы
    inputSelector: '.popup__item',
    //Кнопка Сохранить
    submitButtonSelector: '.popup__submit-button',
    //Нерабочая кнопка сохранить
    inactiveButtonClass: 'popup__submit-button_disabled',
    //Неработающее поле формы
    inputErrorClass: 'popup__item_type_error',
    //Видимая ошибка
    errorClassActive: 'popup__input-error_active',
    //Ошибка
    errorClass: 'popup__input-error'
  }); 
  