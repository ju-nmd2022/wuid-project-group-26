function changeImage() {
  var image = document.getElementById("cart");
  if (image.src.match("cart")) {
    image.src = "cartfull.png";
  } else {
    image.src = "cart-shopping-solid.svg";
  }
}
