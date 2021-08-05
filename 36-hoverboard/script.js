const container = document.getElementById('container');
const colors = ['red', 'purple', 'indigo', 'violet', 'brickred', 'orange'];
const squares = 500;

const changeColor = (square) => {
    square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
};

const removeColor = (square) => {
    square.style.backgroundColor = '#1d1d1d';
};

for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseenter', () => {
        changeColor(square)
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    container.appendChild(square);
};