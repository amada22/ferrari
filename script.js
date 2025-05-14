const carousel = document.querySelector('.carousel-container');

let scrollAmount = 0;
const scrollStep = 320; 
const scrollInterval = 3000; 

function autoScrollCarousel() {
  if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
    // Reset to beginning when reaching the end
    carousel.scrollTo({ left: 0, behavior: 'smooth' });
    scrollAmount = 0;
  } else {
    scrollAmount += scrollStep;
    carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
  }
}

setInterval(autoScrollCarousel, scrollInterval);
