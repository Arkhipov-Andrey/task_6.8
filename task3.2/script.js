const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');

var curentColor;

red.addEventListener('click', trafficLights)
yellow.addEventListener('click', trafficLights)
green.addEventListener('click', trafficLights)

function makeColor(element, color = 'black') {
    element.style.background = color;
}

function trafficLights() {
    if (!curentColor) {
        curentColor = 'red';
        makeColor(red, curentColor);
    } else {

        if (curentColor === 'red') {
            makeColor(red);
            curentColor = 'yellow';
            makeColor(yellow, curentColor);
        } else if (curentColor === 'yellow') {
            makeColor(yellow);
            curentColor = 'green';
            makeColor(green, curentColor);
        } else if (curentColor === 'green') {
            makeColor(green);
            curentColor = 'red';
            makeColor(red, curentColor);
        }
    }
}
