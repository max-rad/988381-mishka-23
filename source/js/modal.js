const mainPage = document.querySelector(".page__body");
const modalLink = document.querySelector(".promo__button");
const modalPopup = document.querySelector(".modal");

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();

  modalPopup.classList.add("modal--show");
  mainPage.classList.add("page__body--overlay");
});

window.addEventListener("keydown", function(evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (modalPopup.classList.contains("modal--show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal--show");
      mainPage.classList.remove("page__body--overlay");
    }
  }
});
