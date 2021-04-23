const navItemsEl = document.querySelectorAll('.item');
const quantityOfCategories = navItemsEl.length;

console.log(`В списке ${quantityOfCategories} категории`);

const elemByTagH2 = document.querySelectorAll('li.item h2');

navItemsEl.forEach(elem => {
  //const elemByTagH2 = document.querySelector('h2');
  const nameOfCategory = elem.querySelector('h2').textContent;

  console.log(`Категория: ${elem.querySelector('h2').textContent}`);
  let navLinksEl = elem.querySelectorAll('.item li');
  const quantityOfLinks = navLinksEl.length;
  console.log(`Количество елементов: ${quantityOfLinks}`);
});
