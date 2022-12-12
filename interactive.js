// Function provided by Codegrid on YouTube

function show() {
  document.getElementById("sidebar").classList.toggle("active");
}

// help from https://techfunda.com/howto/444/changing-of-images

function changeImage() {
  var image = document.getElementById("cart");
  if (image.src.match("cart")) {
    image.src = "cartfull.png";
  } else {
    image.src = "cart-shopping-solid.svg";
  }
}
