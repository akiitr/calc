const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Allow direct input from keyboard
display.addEventListener('input', function(e) {
    // Sanitize the input to prevent invalid characters
    const sanitizedInput = e.target.value.replace(/[^0-9+\-*/().]/g, '');
    e.target.value = sanitizedInput;
});

console.log("calculator.js loaded");