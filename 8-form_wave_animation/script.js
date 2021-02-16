const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText // grabs label text (eg "Email")
        .split('') // Split into an array of letters
        .map((letter, index) => `<span>${letter}</span>`) // Map each letter to a span element
        .join('') // join all the spans into a code block
})