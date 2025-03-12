const profileEditButton = document.querySelector(".profile__info_edit-button");
const popUp = document.querySelector(".popup_overlay");
const nameProfile = document.querySelector(".profile__info_name");
const bioProfile = document.querySelector(".profile__info_occupation");

profileEditButton.addEventListener("click", function () {
  console.log("entrou");
  popUp.classList.add("popup_opened");
  const inputName = document.querySelector(".popup__form-input-name");
  inputName.value = nameProfile.textContent;
  const inputBio = document.querySelector(".popup__form-input-bio");
  inputBio.value = bioProfile.textContent;
});

const popUpCloseButton = document.querySelector(".popup__close-button");
popUpCloseButton.addEventListener("click", function () {
  console.log("fechar");
  popUp.classList.remove("popup_opened");
});

let formElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let inputName = document.querySelector(".popup__form-input-name");
  let inputBio = document.querySelector(".popup__form-input-bio");

  nameProfile.textContent = inputName.value;
  bioProfile.textContent = inputBio.value;

  popUp.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
