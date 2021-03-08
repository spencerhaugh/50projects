const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const analogTime = document.querySelector('.time');
const date = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


// Light Mode / Dark Mode
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = "Dark Mode";
    } else {
        html.classList.add('dark');
        e.target.innerHTML = "Light Mode";
    }
});


// Clock Function

function setTime() {
    // time variables
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const currentDate = time.getDate();
    const hours = time.getHours();
    const hourHand = hours % 12; // translate 24h time to 12h time
    const minuteHand = time.getMinutes();
    const secondHand = time.getSeconds();


    // HAND MOVEMENT

    // formula to map a range of numbers (0-11 hours) to another range of numbers (0-360deg)
    // takes in 5 args, the current hour and the 2 ranges: hour, 0, 11, 0, 360
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    // from stackoverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

    // hour hand
    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hourHand,0,11,0,360)}deg)`;
    // minute hand
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minuteHand,0,59,0,360)}deg)`;
    // second hand
    second.style.transform = `translate(-50%, -100%) rotate(${scale(secondHand,0,59,0,360)}deg)`;


    // DIGITAL CLOCK TIME & DATE
    analogTime.innerHTML = `${hours}:${minuteHand < 10 ? `0${minuteHand}` : minuteHand}`; // if minute < 10 add a 0 in front
    date.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${currentDate}</span>`;
}

setTime();

setInterval(setTime, 1000)