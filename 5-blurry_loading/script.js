const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;

    // use scale func, passing in load and the range of load and range of opacity (opacity going down from 1 to 0, load going up from 0 to 100)
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// scale function maps the loading percent number (0-100) to the opacity number (1 to 0)
// pass in min and max of each scale
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}