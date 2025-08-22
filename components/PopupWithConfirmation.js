import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popup.querySelector(".popup__save-confirm");
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
    this._confirmButton.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (this._handleConfirm) {
        this._handleConfirm(this._cardId, this._cardElement);
      }
    });
  }
}
