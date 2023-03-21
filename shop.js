//wilma new
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

//help from https://dirask.com/posts/JavaScript-change-image-on-click-1wAYZp

var image = document.querySelector(".image");

image.addEventListener("click", function () {
  image.src = "heart-solid.svg";
});

function changeImage(image) {
  image.src = "heart-solid.svg";
}
