import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js";
import {
  addPopUp,
  initialCards,
  inputImage,
  inputURL,
  formAddPopUp,
} from "../components/utils.js";

//--------------------PopUp EditProfile----------------------

const popupEditProfileForm = new PopupWithForm("#profile__overlay", (data) => {
  userInfo.setUserInfo({
    name: data.username,
    about: data.bio,
  });
  popupEditProfileForm.close();
});

popupEditProfileForm.setEventListeners();

document.querySelector(".profile__info-edit").addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  document.querySelector("#username").value = currentUser.name;
  document.querySelector("#bio").value = currentUser.about;

  popupEditProfileForm.open();
});

// ------------------- PopUp Image---------------------

function handleCardClick({ name, link }) {
  imagePopup.open({ name, link });
}

const imagePopup = new PopupWithImage(".popup_type_image");
imagePopup.setEventListeners();

//-------------------------NewCards------------------------
function mostraItens(card) {
  const newCard = new Card(
    {
      card,
      cardSelector: "#card-template",
    },
    handleCardClick
  ).generateCard();
  const cardContainer = document.querySelector(".elements__list");

  section.addItem(newCard);
}

const section = new Section(
  { items: initialCards, renderer: mostraItens },
  ".elements__list"
);
section.renderItens();

const popupAddCard = new PopupWithForm("#card__overlay", (formData) => {
  mostraItens(formData);

  popupAddCard.close();
});

popupAddCard.setEventListeners();

document.querySelector(".profile__add-button").addEventListener("click", () => {
  popupAddCard.open();
});

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

// -------------------UserInfo-------------------

const userInfo = new UserInfo({
  name: ".profile__info-name",
  about: ".profile__info-occupation",
});
