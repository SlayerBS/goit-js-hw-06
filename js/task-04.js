let counterValue = 0;

const increment = () => (counterValue += 1);
const decrement = () => (counterValue -= 1);

const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;
const textCounter = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
  textCounter.innerText = decrement();
});

incrementBtn.addEventListener('click', () => {
  textCounter.innerText = increment();
});
