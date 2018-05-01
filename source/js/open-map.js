var iFrameMap = document.querySelector(".contacts__map");
var hideMap = document.querySelector(".contacts__map-image");

iFrameMap.onload = function () {
  hideMap.classList.add("contacts__map-image--js-hide");
  iFrameMap.classList.remove("contacts__map--js-hide");
};
