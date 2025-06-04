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
        // Replace power symbol with Math.pow function
        const expression = display.value.replace(/\^/g, '**'); 
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Allow direct input from keyboard
display.addEventListener('input', function(e) {
    // Sanitize the input to prevent invalid characters, including ^ for power
    const sanitizedInput = e.target.value.replace(/[^0-9+\-*/().MathsincostanlegπE^]/g, '');
    e.target.value = sanitizedInput;
});

console.log("calculator.js loaded");
