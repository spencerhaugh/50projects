const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');



// A div with the fill class has two events when we need things to occur: Drag Start and Drag End
// (These lowercased events being listened for (eg 'dragover') are built in events on addEventListener)
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Empty divs get four functions: Drag Over, Drag Enter, Drag Leave, Drag Drop
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


// Drag functions
function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
    // function adds the class .hold to the div, and then adds class .invisible after giving time to grab
};

function dragEnd() {
    this.className = 'fill';
    // removes .fill and .hold classes and adds .fill at drag end
};

function dragOver(e) {
    e.preventDefault()
    // prevent default overrides dragover default action: 'reset current drag operation to none'
};

function dragEnter(e) {
    e.preventDefault();
    // prevent default overrides dragenter default action: 'reject immediate user selection as potential target'

    this.className += ' hovered'; // add class .hovered to div that is hovered over while dragging
};

function dragLeave() {
    this.className = 'empty'; // removes the .hovered class and resets div to having the .empty class
};

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
};