//DOM Elelments
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

//Text to animate
const text = "Welcome To The Internet"

//Animation speed controls
let index = 1;
let speed = 300 / speedEl.value;

//Call writeText function
writeText();


//Functions

    //Text Controller
function writeText() {
    textEl.innerText = text.slice(0, index);
    index++;

    if (index > text.length) index = 1; // Repeat, if needed

    setTimeout(writeText, speed)
}

    //Speed Controller
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);
