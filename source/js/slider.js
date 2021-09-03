const slider = document.querySelector(".slider");
const sliderList = slider.querySelector(".slider__list");
const sliderSlides = sliderList.querySelectorAll(".slider__item");
const sliderControls = slider.querySelector(".slider__controls");
const sliderPrevious = sliderControls.querySelector(".slider__control--previous");
const sliderNext = sliderControls.querySelector(".slider__control--next");

let sliderIndex = 0;

sliderPrevious.addEventListener("click", function () {
  sliderIndex = sliderIndex - 1;

  if (sliderIndex < 0) {
    sliderIndex = 0;
  }

  showSlides(sliderIndex);
});

sliderNext.addEventListener("click", function () {
  sliderIndex = sliderIndex + 1;

  if (sliderIndex > sliderSlides.length - 1) {
    sliderIndex = 2;
  }

  showSlides(sliderIndex);
})


function showSlides(n) {
  for (let i = 0; i < sliderSlides.length; i++) {
    sliderSlides[i].classList.remove("slider__item--current");
  }

  sliderSlides[n].classList.add("slider__item--current");
}
