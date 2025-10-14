let display = 0;

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
    const btdisplay = document.getElementById('btdisplay');
    btdisplay.value = "";
}


I need to figure out the calculate function - it isn't working