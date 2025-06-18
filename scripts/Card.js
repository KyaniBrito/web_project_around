export default class Card {
  constructor({ card, cardSelector }) {
    this._card = card;
    this._cardSelector = cardSelector;
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
        popUpImage.classList.add("image_pop-up_opened");
        bigImage.src = this._card.link;
        imageTitle.textContent = this._card.name;
      });

    const closeButtonImage = document.querySelector(
      ".image_pop-up__close-button"
    );
    closeButtonImage.addEventListener("click", function () {
      popUpImage.classList.remove("image_pop-up_opened");
    });

    const popUpImage = document.querySelector(".image_pop-up_overlay");
    const bigImage = document.querySelector(".image_pop-up__image");
    const imageTitle = document.querySelector(".image_pop-up__title");
  }
  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElement
      .querySelector(".elements__card-image")
      .setAttribute("src", this._card.link);
    this._cardElement
      .querySelector(".elements__card-image")
      .setAttribute("alt", this._card.name);
    this._cardElement.querySelector(".elements__card-label-place").textContent =
      this._card.name;

    this._setEventListeners();

    return this._cardElement;
  }
}
