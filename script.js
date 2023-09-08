/* Standard Calculator */
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearAll() {
    clearDisplay();
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    const inputValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(inputValue)) {
        const result = Math.sqrt(inputValue);
        document.getElementById('display').value = result;
    } else {
        document.getElementById('display').value = 'Error';
    }
}

let previousAnswer = 0;

function calculateANS() {
    const newAnswer = previousAnswer + 5;
    console.log("New Answer: " + newAnswer);

    previousAnswer = newAnswer;
}

function toggleSign(number) {
    return -number;
}

/* Scientific Calculator */
const screen = document.getElementById('screen');

function appendToScreen(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function clearEntry() {
    const currentValue = screen.value;
    screen.value = currentValue.slice(0, -1);
}

function factorial() {
    const currentValue = parseFloat(screen.value);
    if (!isNaN(currentValue)) {
        let result = 1;
        for (let i = 2; i <= currentValue; i++) {
            result *= i;
        }
        screen.value = result;
    }
}

function calculate() {
    try {
        const expression = screen.value;
        const result = eval(expression);
        screen.value = result;
    } catch (error) {
        screen.value = 'Error';
    }
}