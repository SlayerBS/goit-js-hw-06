const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainerRef = document.querySelector('#ingredients');

const elements = ingredients.map(elem => {
  const liEl = document.createElement('li');
  liEl.textContent = elem;
  return liEl;
});

ingredientsContainerRef.append(...elements);
