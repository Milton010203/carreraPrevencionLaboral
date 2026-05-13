const slides = document.querySelectorAll('.slide');
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoPlayInterval;

function showSlide(index) {
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 60000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoPlay();
  startAutoPlay();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAutoPlay();
  startAutoPlay();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
    stopAutoPlay();
    startAutoPlay();
  });
});

showSlide(currentIndex);
startAutoPlay();


