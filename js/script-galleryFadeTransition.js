//const images = document.querySelectorAll(".hero-gallery img");
const images = document.querySelectorAll(".hero-img img");
let index = 0;

setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}, 4000); // zmiana co 4 sekundy
