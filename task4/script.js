let element = document.querySelector('a');
// console.log(element);
element.addEventListener('click', function (e) {
    e.preventDefault;
    this.textContent = prompt('Введите сообщение');
});

