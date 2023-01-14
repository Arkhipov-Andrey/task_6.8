
let inputField = document.querySelector('input');
let outputField = document.querySelector('#duplicateField');
let button = document.querySelector('button');

inputField.addEventListener('input', function () {
    outputField.textContent = this.value;
});

button.addEventListener('click', function (e) {
    e.preventDefault;
    if (inputField.value != "") {
        console.log(inputField.value);
        inputField.value = "";
        outputField.textContent = "";
    } else {
        console.log('Поле не заполнено');
    }
});