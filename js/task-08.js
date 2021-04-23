const inputBtn = document.querySelector('#controls').firstElementChild;
const createBtn = document.querySelector('button:nth-of-type(1)');
const deleteBtn = document.querySelector('button:nth-of-type(2)');
const boxexRef = document.querySelector('#boxes');

function colorRandomRgb() {
  let x = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let y = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let z = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  return `rgb(${x}, ${y}, ${z})`;
}

createBtn.addEventListener('click', createBoxes);
deleteBtn.addEventListener('click', destroyBoxes);

boxexRef.style.display = flex;

function createBoxes() {
  const amount = Number(inputBtn.value);
  if (amount > 0) {
    let size = 30;
    for (let i = 1; i <= amount; i += 1) {
      const divEl = document.createElement('div');
      divEl.style.margin = 10 + 'px';
      divEl.style.width = size + 'px';
      divEl.style.height = size + 'px';
      divEl.style.backgroundColor = colorRandomRgb();
      divEl.style.display = 'inline-flex';
      divEl.style.boxShadow = '0px 5px 5px rgba(31, 30, 30, 0.75)';
      //   divEl.textContent = i;

      boxexRef.append(divEl);
      size += 10;
    }
  } else alert('Введите число больше 0');
}

function destroyBoxes() {
  boxexRef.innerHTML = '';
  inputBtn.value = 0;
}
