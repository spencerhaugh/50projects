// Bring in canvas API - info via MDN docs
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Control Panel
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');


let size = 10;
let isPressed = false;
let color = 'black';
let x, y;


// Mouse Event Listeners
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2); // draws circles at each mouse position. Works at slow speed, has gaps at fast mouse movement speed
        drawLine(x, y, x2, y2); // connects mousedown point to mouse position. Like line tool in Illustrator
        x = x2; // these break the above line at each circle (every px change of the mouse position) and complete the draw effect
        y = y2;
    }
});


// Drawing context functions
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
};

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2; // match the width of the circle
    ctx.stroke();
};


// Control Panel Operation

// Color
colorEl.addEventListener('change', (e) => {
    color = e.target.value
});

// Size
// increase
increaseBtn.addEventListener('click', () => {
    size += 5; // add 5 to the size

    if(size > 50) {
        size =50; // max size 50 (if added to, remains at 50)
    }

    updateSizeOnScreen();
});

// decrease
decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});

function updateSizeOnScreen() {
    sizeEl.innerText = size;
};

// Clear
clearEl.addEventListener('click', () => {
    ctx.clearRect(0,0, canvas.width, canvas.height) // ctx method clearRect takes in area args to clear: 0, 0 to canvas height & width for full clear
});