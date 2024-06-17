
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showNext() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function updateCarousel() {
        const newPosition = -currentIndex * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${newPosition}%)`;
    }

    setInterval(showNext, 4000); // Change image every  seconds