// Светофор дожен отображать сигналы в следующем порядке: красный -> желтый -> зеленый
// В задании како-то не правильный светофор

// Выбираем нужные элементы
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');

// Объявляем глобальную переменную для хранения текужего цвета
var curentColor;

// Привязываем обработчик на событие click
red.addEventListener('click', trafficLights)
yellow.addEventListener('click', trafficLights)
green.addEventListener('click', trafficLights)

// Сделаем универсальную функцию для смены цветов
function makeColor(element, color = 'black') {
    element.style.background = color;
}

// Основная функция для работы светофора
// Если текущий цвет не установлен, то похоже на то, что мы только открыли страницу и все элементы черного цвета
// Установим текущий цвет в красный и покрасим первый элемент
function trafficLights() {
    if (!curentColor) {
        curentColor = 'red';
        makeColor(red, curentColor);
    } else {
        // Начинаем поиск текущего цвета
        // Если какой-то цвет задан
        // Находим цвет и перекрашиваем соответсвующий цветной элемент в черный
        // Устанавливаем следущий по порядку цвет
        // Перекрашиваем следущий элемент в заданный цвет
        // Повторяем пока не надоест
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
