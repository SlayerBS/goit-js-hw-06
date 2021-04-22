const textRef = document.querySelector('#text');
const inputRef = document.querySelector('#font-size-control');

inputRef.addEventListener('input', rangeInput);

function rangeInput(event) {
  textRef.style.fontSize = event.currentTarget.value + 'px';
}
