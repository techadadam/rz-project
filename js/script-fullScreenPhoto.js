const overlay = document.getElementById("overlay");
const fullImage = document.getElementById("fullImage");
const closeBtn = document.getElementById("closeBtn");
const thumbnail = document.getElementById("myImage");

// Kliknięcie zdjęcia
thumbnail.addEventListener("click", () => {
  fullImage.src = thumbnail.src;
  overlay.style.display = "flex";
});

// Kliknięcie „X”
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Naciśnięcie klawisza ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.style.display = "none";
  }
});
