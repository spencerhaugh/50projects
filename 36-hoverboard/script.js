const container = document.getElementById('container');
const colors = ['#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92'];
const squares = 506;

const changeColor = (square) => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = randomColor;
    square.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
};

const removeColor = (square) => {
    square.style.backgroundColor = '#1d1d1d';
    square.style.boxShadow = '0 0 2px #000';
};

for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        changeColor(square)
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    container.appendChild(square);
};