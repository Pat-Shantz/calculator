
const displayElement = document.getElementById("btdisplay");

function appendToDisplay(usersInputValue) {
    displayElement.value += usersInputValue;
}

function calculate() {

            displayElement.value = eval(displayElement.value);

    /*try {

    } catch (error) {
        displayElement.value = 'Error';
    }*/
   console.log('hello, world');
}

function clearDisplay() {
    displayElement.value = "";
}
