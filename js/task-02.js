const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainer = document.querySelector('#ingredients');

const elements = ingredients.map(elem => {
  const liEl = document.createElement('li');
  liEl.textContent = elem;
  return liEl;
});

ingredientsContainer.append(...elements);
