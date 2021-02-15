const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {
    // triggerBottom defines a spot 80% down the window, whatever size that is
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        // getBoundingClientRect is a method that defines the location of an element
        // if top of that element is less than our trigger point, .show is added to the element
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            // removes class .show on scroll up
            box.classList.remove('show');
        }
    });
};