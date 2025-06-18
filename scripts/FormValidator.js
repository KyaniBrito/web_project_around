export default class FormValidator {
  constructor({ config, formSelector }) {
    this._config = config;
    this._formSelector = formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  _getForm() {
    return document.querySelector(this._formSelector);
  }

  _setEventListeners() {
    this._inputElements.forEach((input) => {
      input.addEventListener("input", (event) => {
        const isValid = event.target.validity.valid;
        const validition = event.target.nextElementSibling;

        if (!isValid) {
          validition.textContent = event.target.validationMessage;
          validition.classList.add(this._inputErrorClass);
          this._buttonElements.setAttribute("disabled", true);
          this._buttonElements.classList.add(this._inactiveButtonClass);
        } else {
          validition.textContent = "";
          validition.classList.remove(this._inputErrorClass);
          this._buttonElements.removeAttribute("disabled");
          this._buttonElements.classList.remove(this._inactiveButtonClass);
        }
      });
    });
  }

  enableValidation() {
    this._popup__form = this._getForm();
    this._inputElements = this._popup__form.querySelectorAll(
      this._inputSelector
    );
    this._buttonElements = this._popup__form.querySelector(
      this._submitButtonSelector
    );

    this._setEventListeners();
  }
}
