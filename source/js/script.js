const navMain = document.querySelector(".navigation");
const navToggle = navMain.querySelector(".navigation__toggle");

navMain.classList.remove("navigation--nojs");

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
});


function showSlides(n) {
  for (let i = 0; i < sliderSlides.length; i++) {
    sliderSlides[i].classList.remove("slider__item--current");
  }

  sliderSlides[n].classList.add("slider__item--current");
}

function initMap() {
  const contactsMap = document.querySelector(".contacts__map-wrapper");
  const uluru = { lat: 59.93868759471633, lng: 30.323023259049833};

  contactsMap.classList.remove("contacts__map-wrapper--nojs");

  const mapStyle = [
    {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ]

  const map = new google.maps.Map(contactsMap, {
    center: uluru,
    zoom: 17,
    styles: mapStyle,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    icon: {
      url: 'data:image/svg+xml;charset=utf-8,'
        + encodeURIComponent(
          '<svg width="67" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">' +
          '<path d="M57.13 9.15c-13.1-12.2-34.21-12.2-47.3 0-13.1 12.2-13.1 31.95 0 44.15 0 0 23.64 21.63 23.64 46.63 0-25 23.66-46.63 23.66-46.63 13.1-12.1 13.1-31.95 0-44.15z" fill="#fff"/><path d="M47.69 45.16c-.61-3.27.1-6.84 0-10.21-.1-3.77-.71-7.44-.71-11.12 0-2.97.5-6.15-.51-9.02.1-.3.1-.7.2-1 .3-1.48-4.67-.69-5.38.6-.5.4-.7.9-.5 1.29.1.1.1.2.1.4-.92 4.46-2.24 8.73-3.76 13.1-.61 1.68-1.22 3.27-1.83 4.85a67.03 67.03 0 01-2.33-4.66c-1.93-4.76-3.76-9.62-6.1-14.19.31-2.08-4.56-1.88-5.48 0-1.11 2.38-1.01 4.77-.6 7.25.4 2.87.5 5.65.5 8.53.1 5.55.51 11 .61 16.57-.5.59-.6 1.19-.1 1.88.2.3.5.5.81.8 1.32.99 4.98.2 4.98-1.8 0-5.75-.4-11.4-.61-17.15v-1.7c.1.2.2.4.2.6.91 2.19 1.83 4.37 3.15 6.45 1.22 2.09 1.83 4.27 2.54 6.45-.3.3-.41.6-.3 1-.11.29.1.39.4.49.91.8 2.64.4 3.55 0l1.22-.6c.5-.3 1.22-.99 1.01-1.58 0-.1-.1-.3-.1-.4.71-1.79 1.02-3.57 1.42-5.46.41-1.98 1.12-3.87 1.83-5.75.1.9.1 1.69.2 2.58.3 3.57 0 7.04 0 10.61 0 1.2.1 2.29.3 3.38.11.5.52 2.48.41 2.58-.9.79-.6 1.78.51 1.98 1.32.3 2.95-.1 3.96-1 1.63-1.38.81-3.76.4-5.75z" fill="#6BC6B3"/>' +
          '</svg>'),
      size: new google.maps.Size(67, 100),
    },
    map: map,
  });
}

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
