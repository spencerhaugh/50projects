const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});


// ALT VERSION: On Buttons, and adding class to Parent Node

// const buttons = document.querySelectorAll('.faq-toggle');

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         button.parentNode.classList.toggle('active');
//     });
// });