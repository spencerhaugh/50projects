const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');// The + symbol before counter turns the string into a number, like wrapping this line in a parseInt() would. Wild.
        const count = +counter.innerText;
    
        const increment = target/1000;

        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`; // count increment displayed on page
            setTimeout(updateCounter, 1) // call func recursively after a millisecond to add to the count total
        } else {
            counter.innerText = target; // safety precaution
        }
    };

    updateCounter();
})