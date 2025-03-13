const profileEditButton = document.querySelector(".profile__info-edit");
const popUp = document.querySelector(".overlay");
const nameProfile = document.querySelector(".profile__info-name");
const bioProfile = document.querySelector(".profile__info-occupation");

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

const formElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const inputName = document.querySelector(".popup__form-input-name");
  const inputBio = document.querySelector(".popup__form-input-bio");

  nameProfile.textContent = inputName.value;
  bioProfile.textContent = inputBio.value;

  popUp.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
