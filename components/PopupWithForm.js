import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form-with-modal");
    this._inputList = Array.from(this._form.querySelectorAll("input"));
    this._submitButton = this._form.querySelector(".popup__button");
    this._submitButtonDefaultText = this._submitButton.textContent;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  renderLoading(isLoading, loadingText = "Salvando...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonDefaultText;
    }
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputData = this._getInputValues();
      this._handleFormSubmit(inputData);
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
