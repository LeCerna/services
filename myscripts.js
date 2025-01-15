// Carrusel automático
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Cambiar de imagen cada 3 segundos
setInterval(showNextSlide, 3000);

// Iniciar el carrusel
showNextSlide