var openModal = document.querySelectorAll(".open-modal");
var modalBasket = document.querySelector(".modal-basket");

for (var i = 0, i < openModal; i++) {
  openModal.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalBasket.classList.add("modal-basket--js-visible");
  });
}

modalBasket.addEventListener("click", function() {
  modalBasket.classList.remove("modal-basket--js-visible");
});
