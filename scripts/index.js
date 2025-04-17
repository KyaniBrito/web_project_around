//-------------------PopUp EditButton---------------------
const profileEditButton = document.querySelector(".profile__info-edit");
const popUp = document.querySelector(".overlay");
const nameProfile = document.querySelector(".profile__info-name");
const bioProfile = document.querySelector(".profile__info-occupation");
const formElement = document.querySelector(".popup__form");

profileEditButton.addEventListener("click", function () {
  popUp.classList.add("popup_opened");
  const inputName = document.querySelector(".popup__form-input-name");
  inputName.value = nameProfile.textContent;
  const inputBio = document.querySelector(".popup__form-input-bio");
  inputBio.value = bioProfile.textContent;
});

const popUpCloseButton = document.querySelector(".popup__close-button");
popUpCloseButton.addEventListener("click", function () {
  popUp.classList.remove("popup_opened");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popUp.classList.remove("popup_opened");
  }
});

popUp.addEventListener("click", function (event) {
  if (event.target === popUp) {
    popUp.classList.remove("popup_opened");
  }
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const inputName = document.querySelector(".popup__form-input-name");
  const inputBio = document.querySelector(".popup__form-input-bio");

  nameProfile.textContent = inputName.value;
  bioProfile.textContent = inputBio.value;

  popUp.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);

//-------------------PopUp AddButton---------------------
const profileAddButton = document.querySelector(".profile__add-button");
const addPopUp = document.querySelector(".second_overlay");

profileAddButton.addEventListener("click", function () {
  addPopUp.classList.add("addpopup_opened");
});

const addPopUpCloseButton = document.querySelector(".addpopup__close-button");
addPopUpCloseButton.addEventListener("click", function () {
  addPopUp.classList.remove("addpopup_opened");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    addPopUp.classList.remove("addpopup_opened");
  }
});

addPopUp.addEventListener("click", function (event) {
  if (event.target === addPopUp) {
    addPopUp.classList.remove("addpopup_opened");
  }
});

//----------------------LikeButton----------------------
const likeButton = document.querySelectorAll(".elements__card-label-button");
likeButton.forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.toggle("elements__card-label-button_active");
  });
});

//-------------------------Cards------------------------
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

function createCard(card) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  cardElement
    .querySelector(".elements__card-image")
    .setAttribute("src", card.link);
  cardElement
    .querySelector(".elements__card-image")
    .setAttribute("alt", card.name);
  cardElement.querySelector(".elements__card-label-place").textContent =
    card.name;
  cardElement
    .querySelector(".elements__card-label-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__card-label-button_active");
    });
  cardElement
    .querySelector(".elements__card-delete-button")
    .addEventListener("click", function (event) {
      event.target.parentElement.parentElement.remove();
    });
  const popUpImage = document.querySelector(".image_pop-up_overlay");
  const bigImage = document.querySelector(".image_pop-up__image");
  const imageTitle = document.querySelector(".image_pop-up__title");
  const closeButtonImage = document.querySelector(
    ".image_pop-up__close-button"
  );

  cardElement
    .querySelector(".elements__card-image")
    .addEventListener("click", function () {
      popUpImage.classList.add("image_pop-up_opened");
      bigImage.src = card.link;
      imageTitle.textContent = card.name;
    });

  closeButtonImage.addEventListener("click", function () {
    popUpImage.classList.remove("image_pop-up_opened");
  });
  return cardElement;
}

const popUpImage = document.querySelector(".image_pop-up_overlay");

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popUpImage.classList.remove("image_pop-up_opened");
  }
});

popUpImage.addEventListener("click", function (event) {
  if (event.target === popUpImage) {
    popUpImage.classList.remove("image_pop-up_opened");
  }
});

//-------------------------NewCards------------------------
for (const card of initialCards) {
  const newCard = createCard(card);
  const cardContainer = document.querySelector(".elements__list");
  cardContainer.append(newCard);
}

const inputImage = document.querySelector(".addpopup__form-input-title");
const inputURL = document.querySelector(".addpopup__form-input-link");
const imageName = document.querySelector(".elements__card-label-place");
const urlImage = document.querySelector(".elements__card-image");
const formAddPopUp = document.querySelector(".addpopup__form");

function addNewCard(event) {
  event.preventDefault();
  if (inputImage.value != "" && inputURL.value != "") {
    const imageNameValue = inputImage.value;
    const urlImageValue = inputURL.value;
    const newCard = createCard({ name: imageNameValue, link: urlImageValue });
    const cardContainer = document.querySelector(".elements__list");
    cardContainer.prepend(newCard);
    inputImage.value = "";
    inputURL.value = "";
  }
}

formAddPopUp.addEventListener("submit", (event) => {
  addNewCard(event);
  addPopUp.classList.remove("addpopup_opened");
});
