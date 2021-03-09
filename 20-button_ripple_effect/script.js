const buttons = document.querySelectorAll('.ripple');


buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        // get click coordinates
        const x = event.clientX;
        const y = event.clientY;

        // get coordinates of the button 
        // (these offset properties are built into the returned event.target information and can be assigned to a vaiable)
        const buttonTop = event.target.offsetTop;
        const buttonLeft = event.target.offsetLeft;

        // determine the click position WITHIN the button (x from buttonLeft, y from buttonTop)
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        // create a span with the circle class to run the CSS animation on click
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        // append circle element to the button clicked in the DOM
        this.appendChild(circle);
        // remove span from the DOM after 500ms (animation runtime)
        setTimeout(() => circle.remove(), 500);
    })
});