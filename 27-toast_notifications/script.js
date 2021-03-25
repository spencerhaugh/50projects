const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Thanks for clicking!',
    'Enjoy your day!',
    'Drink some water!',
    'Wear a mask!',
    'You are special!'
];

// add listener for clicks on button
button.addEventListener('click', () => createNotification());

// function called on click, creates a notification element
function createNotification() { 
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = getRandomMessage(); // sets text to the result of this function

    toasts.appendChild(notif); // append created element into the DOM toast container

    setTimeout(() => {
        notif.remove()
    }, 3000); // removes the message from the DOM after 3sec
};

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]; // returns a random index from the messages array
};

// OPTIONAL:
// Could also pass in a type and message to the createNotification() function to use a specific message, or change certain CSS characteristics based on type class added (Error, red font color; Success green font color, etc)

// const types = ['info', 'success', 'error'];

// function createNotification(message = null, type = null) { 
//     const notif = document.createElement('div');
//     notif.classList.add('toast');
//     notif.classList.add(type ? type : getRandomType());

//     notif.innerText = message ? message : getRandomMessage(); 

//     toasts.appendChild(notif); 

//     setTimeout(() => {
//         notif.remove()
//     }, 3000); 
// };

// function getRandomType() {
//     return types[Math.floor(Math.random() * types.length)]; // returns a random index from the messages array
// };

