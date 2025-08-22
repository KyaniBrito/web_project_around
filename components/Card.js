export default class Card {
  constructor(
    { card, cardSelector },
    handleCardClick,
    handleDeleteClick,
    popupConfirmDelete
    // currentUserId
  ) {
    this._card = card;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._popupConfirmDelete = popupConfirmDelete;
    // this._currentUserId = currentUserId;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector).content;
    const cardElement = cardTemplate
      .querySelector(".elements__item")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".elements__card-label-button")
      .addEventListener("click", (evt) => {
        evt.target.classList.toggle("elements__card-label-button_active");
      });

    this._cardElement
      .querySelector(".elements__card-image")
      .addEventListener("click", () => {
        this._handleCardClick({
          name: this._card.name,
          link: this._card.link,
        });
      });

    const deleteButton = this._cardElement.querySelector(
      ".elements__card-delete-button"
    );
    deleteButton.addEventListener("click", () => {
      console.log("Card ID:", this._card._id);
      console.log("Card Element:", this._cardElement);
      this._handleDeleteClick(this._card._id, this._cardElement);
    });
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    const imageElement = this._cardElement.querySelector(
      ".elements__card-image"
    );
    imageElement.src = this._card.link;
    imageElement.alt = this._card.name;

    this._cardElement.querySelector(".elements__card-label-place").textContent =
      this._card.name;

    this._setEventListeners();

    return this._cardElement;
  }
}
