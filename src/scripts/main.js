let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  const totalSlides = slides.length;
  // Loop through slides
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Change slides every 5 seconds
setInterval(nextSlide, 5000);
