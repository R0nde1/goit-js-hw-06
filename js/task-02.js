//* Завдання 2

//* HTML містить порожній список ul#ingredients.
//* JavaScript містить масив рядків.
//* Напиши скрипт, який для кожного елемента масиву ingredients:
//* Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//* Додасть назву інгредієнта як його текстовий вміст.
//* Додасть елементу клас item.
//* Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;

  return listItem;
});

console.log(items);

ingredientsList.append(...items);

