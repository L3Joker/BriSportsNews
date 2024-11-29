document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel__inner');
    const items = document.querySelectorAll('.carousel__item');
    const prevButton = document.querySelector('.carousel__prev');
    const nextButton = document.querySelector('.carousel__next');

    let activeIndex = 0; // Start at the first item

    const updateCarouselPosition = () => {
        const translateX = -activeIndex * 100; // Calculate position
        carousel.style.transform = `translateX(${translateX}%)`;
        // Trigger dynamic content update
        if (typeof updateDynamicContent === "function") {
            updateDynamicContent(activeIndex);
        }
    };

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', () => {
        activeIndex = (activeIndex > 0) ? activeIndex - 1 : items.length - 1;
        updateCarouselPosition();
    });

    nextButton.addEventListener('click', () => {
        activeIndex = (activeIndex < items.length - 1) ? activeIndex + 1 : 0;
        updateCarouselPosition();
    });

    // Initialize the carousel
    updateCarouselPosition();
});
