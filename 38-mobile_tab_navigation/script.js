const contents = document.querySelectorAll('.content');
const icons = document.querySelectorAll('nav ul li');

function addActiveIcon(idx) {
    icons[idx].classList.add('active');
};

function showActiveImg(idx) {
    contents[idx].classList.add('show');
};

function hideAllContent() {
    contents.forEach(img => {
        img.classList.remove('show');
    })
};

function setInactiveIcons() {
    icons.forEach(icon => {
        icon.classList.remove('active');
    })
};

icons.forEach((icon, idx) => {
    icon.addEventListener('click', () => {
        hideAllContent();
        setInactiveIcons();
        addActiveIcon(idx);
        showActiveImg(idx);
    })
});