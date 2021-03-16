const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileimg = document.getElementById('profile-img');
const author = document.getElementById('author');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_texts = document.querySelectorAll('.animated-bg-text');

// Sets data (nard coded below) after 2 seconds of the loading animation
setTimeout(getData, 2000)


function getData() {

    // Set card data. This is hard coded, but can easily be retrieved from an API, etc
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="A computer on a desk"></img>'

    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, ab?';
    profileimg.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="">';
    author.innerHTML = 'Jane Doe';
    date.innerHTML = 'March 16th, 2021';

    // remove animated classes from the elements
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_texts.forEach((text) => text.classList.remove('animated-bg-text'));
}