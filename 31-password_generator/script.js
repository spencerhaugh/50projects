// DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('uppercase');
const lowerEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

// Object with our char generating functions
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNum,
    symbol: getRandomSymbol
}

// Listener
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowerEl.checked;
    const hasUpper = upperEl.checked;
    const hasNum = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNum, hasSymbol, length); // Call main function, pass in user form input
})

// Random Char Generators
// ======================
// Lower
function getRandomLower() {
    let letter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    return letter;
}
// Upper
function getRandomUpper() {
    let letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    return letter;
}
// Number
function getRandomNum() {
    let num = String.fromCharCode(Math.floor(Math.random() * 9) + 48);
    return num;
}
// Symbol
function getRandomSymbol() {
    let sym = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
    return sym;
}

// Main Function
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    // Remove unselected options
    const userInputArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    let userSelections = userInputArr.length;
    
    // Check for selection error
    if (userSelections <= 0) return "Please Make Selections";

    for (let i = 0; i < length; i++) {
        let func = Math.floor(Math.random() * userSelections);
        let char = Object.keys(userInputArr[func])[0];
        
        generatedPassword +=  randomFunc[char]();
    }

    return generatedPassword;
}