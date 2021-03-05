const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;


// Add event listeners, increment activeSlides on click

// Right Button
rightBtn.addEventListener('click', () => {
    activeSlide++;

    // set activeSlides to 0 if end of array is reached
    if (activeSlide > slides.length-1) {
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
})

// Left Button
leftBtn.addEventListener('click', () => {
    activeSlide--;

    // set activeSlides to 0 if end of array is reached
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
})

setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    });

    slides[activeSlide].classList.add('active');
}
