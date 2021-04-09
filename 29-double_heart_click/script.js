const loved = document.getElementById('loved');
const times = document.getElementById('times');

// Like Counter
let likeCounter = 0;

loved.addEventListener('dblclick', (e) => {
    // get click position, and create heart
    createHeart(e);

    // insert icon html element at point of click
    // setTimeout to remove element after animation
});

const createHeart = (e) => {
    // Create heart
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    // Get position of click
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y) // Click coordinates

    // Get image coordinates in document, and subtract from click coordinates
    const offsetLeft = e.target.offsetLeft
    const offsetTop = e.target.offsetTop

    const xInner = x - offsetLeft;
    const yInner = y - offsetTop;

    // Add click loction coordinates to the position of the createdHeart element
    heart.style.top = `${yInner}px`;
    heart.style.left = `${xInner}px`;
    loved.appendChild(heart);

    // Increment times liked counter
    times.innerHTML = ++likeCounter;
};