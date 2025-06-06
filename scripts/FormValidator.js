function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const forms = document.querySelectorAll(formSelector);
  forms.forEach((form) => {
    const inputElements = form.querySelectorAll(inputSelector);
    const buttonElements = form.querySelector(submitButtonSelector);

    inputElements.forEach((input) => {
      input.addEventListener("input", (event) => {
        const isValid = event.target.validity.valid;
        const validition = event.target.nextElementSibling;
        console.log(validition);

        if (!isValid) {
          validition.textContent = event.target.validationMessage;
          validition.classList.add(inputErrorClass);
          console.log(event.target.validationMessage);
          buttonElements.setAttribute("disabled", true);
          buttonElements.classList.add(inactiveButtonClass);
        } else {
          validition.textContent = "";
          validition.classList.remove(inputErrorClass);
          buttonElements.removeAttribute("disabled");
          buttonElements.classList.remove(inactiveButtonClass);
        }
      });
    });
  });
}
enableValidation({
  formSelector: ".popup__form-with-modal",
  inputSelector: ".popup__input-with-modal",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "error-message_show_error",
  errorClass: "error-message",
});
