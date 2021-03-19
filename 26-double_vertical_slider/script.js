const sliderContainer = document.querySelector('.slider-container');
const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length; // get number of photo divs in the slide-right in HTML

let activeSlideIndex = 0;

// set slide left location to be -x*100 where x is the last div in slide left
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Up button
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight // give us the height of the window clicked on

    if(direction === 'up') {
        activeSlideIndex++; // on upButton click, increment slideIndex
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0; // if last slide, reset to 0
        }
    }
    if(direction === 'down') {
        activeSlideIndex--; // on downButton click, decrement slideIndex
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
