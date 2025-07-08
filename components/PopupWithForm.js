import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  /*************  ✨ Windsurf Command ⭐  *************/
  /**

/*******  6a8127e3-3d63-4f47-8e15-6fea01ec0818  *******/
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form-with-modal");
    this._inputList = Array.from(this._form.querySelectorAll("input"));
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
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
