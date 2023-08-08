
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "flex";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "flex";
  setTimeout(displayImages, 2000); 
}
