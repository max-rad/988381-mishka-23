const navMain = document.querySelector(".navigation");
const navToggle = navMain.querySelector(".navigation__toggle");

navMain.classList.remove("navigation-nojs");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (navMain.classList.contains("navigation--closed")) {
    navMain.classList.remove("navigation--closed");
    navMain.classList.add("navigation--opened")
  } else {
    navMain.classList.remove("navigation--opened");
    navMain.classList.add("navigation--closed");
  }
});
