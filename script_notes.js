
let firstOperator = null;
let operator = null;
let waitingSecondOperator = false;






@param {String} nextOperator
function handleOperator(nextOperator) {

}



/**
 * Handles the logic when an operator button (+, -, *, /) is clicked.
 * @param {string} nextOperator The operator character (e.g., '+', '-', etc.)
 

function handleOperator(nextOperator) {
    // 1. Get the current value from the display (which is the current/first operand)
    const inputValue = parseFloat(display.value);

    // If there is already a first operand and we are waiting for the second,
    // it means the user is chaining operations (e.g., 4 + 5 + )
    if (operator && waitingForSecondOperand) {
        operator = nextOperator; // Just update the operator
        return;
    }

    // If firstOperand is null, this is the start of a new calculation
    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        // If an operator already exists, perform the calculation
        const result = performCalculation[operator](firstOperand, inputValue);

        // Update the display and the stored firstOperand for the next operation
        display.value = result;
        firstOperand = result;
    }

    /*// Set the state for the next number entry
    waitingForSecondOperand = true;
    operator = nextOperator;*/

    console.log('First Operand:', firstOperand);
    console.log('Operator:', operator);
    console.log('Waiting for second operand:', waitingForSecondOperand);
}

// Helper object to map the operator character to a function
const performCalculation = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '=': (a, b) => b, // The equals sign just completes the operation
};


 * Handles the logic when a digit button (0-9) is clicked.
 * @param {string} digit The digit character (e.g., '5')
 

function inputDigit(digit) {
    if (waitingForSecondOperand === true) {
        display.value = digit; // Start a new number entry
        waitingForSecondOperand = false;
    } else {
        // Prevent leading zero unless it's a decimal
        if (display.value === '0') {
             display.value = digit;
        } else {
            display.value += digit; // Append the digit
        }
    }
}


