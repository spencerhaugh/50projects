const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => makeRealistic(e.target))
})

function makeRealistic(clickedItem) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === clickedItem) fast.checked = !fast.checked;
        if (cheap === clickedItem) good.checked = !good.checked; 
        if (fast === clickedItem) cheap.checked = !cheap.checked;
    }
};
