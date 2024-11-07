

const slider = document.querySelector('.section');
const slides = document.querySelectorAll('.slider img');
const sliderNav = document.querySelector('.slider-nav');
let activeSlide = 0;

const createNavDots = () => {
 slides.forEach((_, i) => {
    const navDot = document.createElement('a');
    navDot.setAttribute('href', `#slide-${i + 1}`);
    navDot.setAttribute('class', `nav-dot-${i + 1}`);
    sliderNav.appendChild(navDot);
 });
};

const autoplay = () => {
 setInterval(() => {
    slider.scrollTo({
      left: slides[activeSlide].offsetLeft,
      behavior: 'smooth',
    });
    activeSlide = (activeSlide + 1) % slides.length;
 }, 5000); // 5000 milliseconds = 5 seconds
};

createNavDots();
autoplay();