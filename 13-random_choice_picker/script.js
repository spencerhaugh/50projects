const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus() // .focus method will auto position the cursor in the text area

//listener for keystrokes in the textarea
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value) //function defined below, pass in keystrokes

    // when Enter is pressed, clear textarea and run randomSelect()
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10); 

        randomSelect();
    }
});


//function to build option spans from an array of input items
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    // .split input at any commas; .filter only chars that are not spaces ''; .map each trimmed tag
    console.log(tags)

tagsEl.innerHTML = ''; // resets the text area to empty

// create span elements on the DOM for each item in the array created above
tags.forEach(tag => {
    const option = document.createElement('span');
    option.classList.add('tag');
    option.innerText = tag;
    tagsEl.appendChild(option);
});

};

function randomSelect() {
    const times = 30; // amount of "Computing Time" random highlights to be displayed

    const interval = setInterval(() => { // every 100ms the following code runs:

        const randomTag = pickRandomTag(); // selects a random tag

        highlightTag(randomTag) // highlights the random tag

        setTimeout(() => {
            unHighlightTag(randomTag) // unhighlights the tags after 100ms
        }, 100);

    }, 100);

    setTimeout(() => { // this ends the setInterval after 30 reps at 100ms each, (times * 100)
        clearInterval(interval);

        setTimeout(() => { // once clearInterval runs, pick a random winner and highlight
            const winningTag = pickRandomTag();

            highlightTag(winningTag);
        }, 100);

    }, times * 100)
};

// Random Tag Function
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]; //picks and returns a random index
};

// Add Highlight Class Function
function highlightTag(tag) {
    tag.classList.add('highlight');
};

// Remove Highlight Class Function
function unHighlightTag(tag) {
    tag.classList.remove('highlight');
};