//* Завдання 9

//* Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
//* по кліку на button.change-color і виводить значення кольору в span.color.
//* Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  document.querySelector('.color').textContent = color;
}

const button = document.querySelector('.change-color');
button.addEventListener('click', changeBackgroundColor);

