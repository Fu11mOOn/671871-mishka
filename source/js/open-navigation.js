var navToggle = document.querySelector(".main-navigation__toggle");
var navMenu = document.querySelector(".main-navigation__list");

navToggle.classList.add("main-navigation__toggle--js-visible");

navToggle.addEventListener("click", function() {
  if (navMenu.classList.contains("main-navigation__list--js-opened")) {
    navMenu.classList.remove("main-navigation__list--js-opened");
  } else {
    navMenu.classList.add("main-navigation__list--js-opened");
  }

  if (navToggle.classList.contains("main-navigation__toggle--js-closed")) {
    navToggle.classList.remove("main-navigation__toggle--js-closed");
  } else {
    navToggle.classList.add("main-navigation__toggle--js-closed");
  }
});
