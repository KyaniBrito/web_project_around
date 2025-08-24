import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form-confirm"); // <-- O elemento a ser inspecionado é o formulário, por isso e aqui
  }

  setSubmitSave(handleConfirm) {
    this._handleConfirm = handleConfirm;
  }

  open(cardId, cardElement) {
    this._cardId = cardId;
    this._cardElement = cardElement;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (this._handleConfirm) {
        this._handleConfirm(this._cardId, this._cardElement);
      }
    });
  }
}
