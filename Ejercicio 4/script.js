const carouselItems = document.getElementsByClassName("carousel-item");
const passButtons = document.getElementsByClassName("pass-button");

var currentImage = 0;
const intervalTime = 5000;
var interval;

function showNextImage() {
    currentImage = (currentImage + 1) % carouselItems.length;
    updateCarousel();
}

function showPrevImage() {
    currentImage = (currentImage - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
}

function showPassImage(index) {
    currentImage = index;
    updateCarousel();
}

function updateCarousel() {
    const imageWidth = carouselItems[0].offsetWidth;
    const offset = -currentImage * imageWidth;
    for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.transform = `translateX(${offset}px)`;
    }
    updatePassButtons();
}

function updatePassButtons() {
    for (let i = 0; i < passButtons.length; i++) {
        passButtons[i].classList.toggle("active", i === currentImage);
    }
}

function startInterval() {
    interval = setInterval(showNextImage, intervalTime);
}

function stopInterval() {
    clearInterval(interval);
}

for (let i = 0; i < passButtons.length; i++) {
    passButtons[i].addEventListener("click", () => {
        stopInterval();
        showPassImage(i);
        startInterval();
    });
}

document.querySelector(".prev-image-button").addEventListener("click", () => {
    stopInterval();
    showPrevImage();
    startInterval();
});

document.querySelector(".next-image-button").addEventListener("click", () => {
    stopInterval();
    showNextImage();
    startInterval();
});

updateCarousel();
startInterval();