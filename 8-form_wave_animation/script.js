const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText // grabs label text (eg "Email")
        .split('') // Split into an array of letters
        .map((letter, index) => `<span style="transition-delay:${index * 20}ms">${letter}</span>`) 
        // Map each letter to a span element. 
        // Set inline style "transition-delay to the idex times 20ms to create incrementing delay"
        .join('') // Join all the spans into a code block
})