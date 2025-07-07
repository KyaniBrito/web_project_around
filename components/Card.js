export default class Card {
  constructor({ card, cardSelector }, handleCardClick) {
    this._card = card;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
      .querySelector(".elements__card-delete-button")
      .addEventListener("click", () => {
        this._cardElement.remove();
      });

    this._cardElement
      .querySelector(".elements__card-image")
      .addEventListener("click", () => {
        this._handleCardClick({
          name: this._card.name,
          link: this._card.link,
        });
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
