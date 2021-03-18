const nav = document.querySelector('.nav');

// listen on the Window for scroll, on scroll call fixNav()
window.addEventListener('scroll', fixNav)

//fixNav Function
function fixNav() {
    // console.log(window.scrollY, nav.offsetHeight)
    if(window.scrollY > nav.offsetHeight +150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
    // on scroll away from the top of the page add the active class, else remove active class
}