let element1 = document.querySelector('#consoleLog');
element1.addEventListener('click', () => { alert('Метод для ввода сообщениея в веб-консоль'); });

let element2 = document.querySelector('#consoleLog+code');
// console.log(element2);
element2.textContent = 'console.log(\'Пример использования console.log\');';

let element3 = document.querySelector('#alert');
element3.addEventListener('click', () => { alert('Показывает диалоговое окно с сообщением'); });

let element4 = document.querySelector('#alert+code');
// console.log(element4);
element4.textContent = 'alert(\'Пример использования команды alert\');';

let element5 = document.querySelector('#prompt');
element5.addEventListener('click', () => { alert('Отображает диалоговое окно с запросом на ввод текста'); });

let element6 = document.querySelector('#prompt+code');
// console.log(element6);
element6.textContent = 'prompt(\'Пример использования команды prompt\');';




