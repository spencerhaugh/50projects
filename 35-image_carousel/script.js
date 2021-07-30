const imgs = document.getElementById('imgs');
const right = document.getElementById('right');
const left = document.getElementById('left');

const imgList = document.querySelectorAll('#imgs img');

let position = 0

function next() {
    position += 1;
    if (position > imgList.length - 1) position = 0;
    imgs.style.transform = `translateX(${-position * 500}px)`;
    console.log(position)
};

function prev() {
    position -= 1;
    if (position < 0) position = imgList.length - 1;
    imgs.style.transform = `translateX(${-position * 500}px)`;
    console.log(position)
};

right.addEventListener('click', () => {
    next();
    resetInterval();
});

left.addEventListener('click', () => {
    prev();
    resetInterval();
});

let interval = setInterval(run, 3000);

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 3000);
};

function run() {
    next();
}