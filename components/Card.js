export default class Card {
  constructor(
    { card, cardSelector },
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    userId
  ) {
    this._card = {
      ...card,
      likes: Array.isArray(card.likes) ? card.likes : [],
      isLiked: card.isLiked ?? false,
    };
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._userId = userId;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector).content;
    const cardElement = cardTemplate
      .querySelector(".elements__item")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(
      ".elements__card-label-button"
    );
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
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
    if (this._card.owner && this._card.owner._id !== this._userId) {
      deleteButton.remove();
    }
  }

  _updateLikeButtonState() {
    if (!this._likeButton) return;

    if (this._card.isLiked) {
      this._likeButton.classList.add("elements__card-label-button_active");
    } else {
      this._likeButton.classList.remove("elements__card-label-button_active");
    }
  }

  updateLikes(updatedCard) {
    this._card.likes = Array.isArray(updatedCard.likes)
      ? updatedCard.likes
      : [];
    this._card.isLiked = updatedCard.isLiked;

    this._updateLikeButtonState();
  }

  isLiked() {
    return this._card.isLiked;
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
    this._updateLikeButtonState();

    return this._cardElement;
  }
}
