const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListRef = document.querySelector('#ingredients');

ingredientsListRef.append(
  ...ingredients.map(item => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = item;
    return listItemRef;
  }),
);
