const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remaining');
// call updateBigCup on load
updateBigCup();


// Small cups

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
});

function highlightCups(index) {
    // If the last full cup is clicked, decrement index by one to "unfill" that cup. (ie fill everything to index - 1)
    if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--;
    }
    // Fill all cups before clicked cup
    smallCups.forEach((cup, index2) => {
        if (index2 <= index) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });
    // call updateBigCup
    updateBigCup();
}

// Large Cup
function updateBigCup() {
    // Get number of full cups
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    // total number of cups
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        // if 0 full cups, hide element
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        // if full cups; make visable, and set fill height
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups/totalCups * 330}px`; // full divided by total times the height of the container (330)
        percentage.innerText = `${fullCups/totalCups * 100}%`
    };

    if (fullCups === totalCups) {
        remaining.style.visibility = 'hidden';
        remaining.style.height = 0;
    } else {
        remaining.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L` // 2 Liters decremented by the amount of each cup divided by 1000 (mL in a L)
    }
}