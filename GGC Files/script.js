document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    const slideContainer = document.querySelector(".carousel-slide");
    const slides = document.querySelectorAll(".carousel-slide img");
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slides.length;
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        function showSlide(index) {
            const totalSlides = slides.length;
            if (index >= totalSlides) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalSlides - 1;
            } else {
                currentIndex = index;
            }
       
        }
    }

    prevButton.addEventListener("click", function() {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", function() {
        showSlide(currentIndex + 1);
    });

    // Optional: Automatically change slides every 5 seconds
    setInterval(function() {
        showSlide(currentIndex + 1);
    }, 5000);
});