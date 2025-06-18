import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  profileEditButton,
  popUp,
  nameProfile,
  bioProfile,
  inputName,
  inputBio,
  formElement,
  popUpCloseButton,
  profileAddButton,
  addPopUp,
  addPopUpCloseButton,
  initialCards,
  popUpImage,
  inputImage,
  inputURL,
  formAddPopUp,
  OpenEditPopUp,
  CloseEditPopUp,
  handleProfileFormSubmit,
  OpenAddPopUp,
  CloseAddPopUp,
} from "./utils.js";

//-------------------PopUp EditButton---------------------

profileEditButton.addEventListener("click", function () {
  OpenEditPopUp(popUp);
  inputName.value = nameProfile.textContent;
  inputBio.value = bioProfile.textContent;
});

popUpCloseButton.addEventListener("click", function () {
  CloseEditPopUp(popUp);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    CloseEditPopUp(popUp);
  }
});

formElement.addEventListener("submit", handleProfileFormSubmit);

//-------------------PopUp AddButton---------------------

profileAddButton.addEventListener("click", function () {
  OpenAddPopUp(addPopUp);
});

addPopUpCloseButton.addEventListener("click", function () {
  CloseAddPopUp(addPopUp);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    CloseAddPopUp(addPopUp);
  }
});

addPopUp.addEventListener("click", function (event) {
  if (event.target === addPopUp) {
    CloseAddPopUp(addPopUp);
  }
});

// ------------------- PopUp Image---------------------

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
  const newCard = new Card({
    card,
    cardSelector: "#card-template",
  }).generateCard();
  const cardContainer = document.querySelector(".elements__list");
  cardContainer.append(newCard);
}

//-------------------------AddNewCard------------------------

function addNewCard(event) {
  event.preventDefault();
  if (inputImage.value != "" && inputURL.value != "") {
    const imageNameValue = inputImage.value;
    const urlImageValue = inputURL.value;
    const createCard = new Card({
      card: { name: imageNameValue, link: urlImageValue },
      cardSelector: "#card-template",
    }).generateCard();

    const cardContainer = document.querySelector(".elements__list");
    cardContainer.prepend(createCard);
    inputImage.value = "";
    inputURL.value = "";
  }
}

formAddPopUp.addEventListener("submit", (event) => {
  addNewCard(event);
  addPopUp.classList.remove("addpopup_opened");
});

//-------------------Validação de formulário-------------------

new FormValidator({
  config: {
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "error-message_show_error",
    errorClass: "error-message",
  },
  formSelector: "#user__form",
}).enableValidation();

new FormValidator({
  config: {
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "error-message_show_error",
    errorClass: "error-message",
  },
  formSelector: "#card__form",
}).enableValidation();
