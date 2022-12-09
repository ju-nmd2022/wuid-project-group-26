// Function provided by Codegrid on YouTube

function show() {
  document.getElementById("sidebar").classList.toggle("active");
}

//help from https://dirask.com/posts/JavaScript-change-image-on-click-1wAYZp

var image = document.querySelector(".image");

image.addEventListener("click", function () {
  image.src = "heart-solid.svg";
});

function changeImage(image) {
  image.src = "heart-solid.svg";
}

// help from https://techfunda.com/howto/444/changing-of-images
