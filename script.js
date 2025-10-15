
const displayElement = document.getElementById("btdisplay");

function appendToDisplay(value) {
    displayElement.value += value;
}

function calculate() {
    try {
        displayElement.value = eval(displayElement.value);
    } catch (error) {
        displayElement.value = 'Error';
    }
}

function clearDisplay() {
    displayElement.value = "";
}
