//DOM Elelments
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

//Text to animate
const text = "Welcome To The Internet"

//Animation speed controls
let index = 1;
let speed = 200 / speedEl.value

//Call writeText function
writeText();


//Functions

function writeText() {
    textEl.innerText = text.slice(0, index);
    index++;

    setTimeout(writeText, speed)
}