export const profileEditButton = document.querySelector(".profile__info-edit");
export const popUp = document.querySelector(".overlay");
export const nameProfile = document.querySelector(".profile__info-name");
export const bioProfile = document.querySelector(".profile__info-occupation");
export const inputName = document.querySelector(".popup__form-input-name");
export const inputBio = document.querySelector(".popup__form-input-bio");
export const formElement = document.querySelector(".popup__form");
export const popUpCloseButton = document.querySelector(".popup__close-button");
export const profileAddButton = document.querySelector(".profile__add-button");
export const addPopUp = document.querySelector(".second_overlay");
export const addPopUpCloseButton = document.querySelector(
  ".addpopup__close-button"
);
export const initialCards = [
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
export const popUpImage = document.querySelector(".image_pop-up_overlay");
export const inputImage = document.querySelector(".addpopup__form-input-title");
export const inputURL = document.querySelector(".addpopup__form-input-link");
export const imageName = document.querySelector(".elements__card-label-place");
export const urlImage = document.querySelector(".elements__card-image");
export const formAddPopUp = document.querySelector(".addpopup__form");

//-------------------PopUp EditButton---------------------
export function OpenEditPopUp(open) {
  open.classList.add("addpopup_opened");
}

export function CloseEditPopUp(close) {
  close.classList.remove("addpopup_opened");
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = inputName.value;
  bioProfile.textContent = inputBio.value;

  CloseEditPopUp(popUp);
}

// ------------------- AddPopUp --------------------------
export function OpenAddPopUp(open) {
  open.classList.add("addpopup_opened");
}

export function CloseAddPopUp(close) {
  close.classList.remove("addpopup_opened");
}
