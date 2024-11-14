let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.querySelector(".slider");
  const totalSlides = document.querySelectorAll(".slider img").length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}
