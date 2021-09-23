const password = document.getElementById('password');
const background = document.getElementById('background');

let blur = 20;

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;

    const blurValue = blur - length * 2;
    console.log(blurValue)
    background.style.filter = `blur(${blurValue}px)`;
})
