const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputBlur);
inputRef.addEventListener('focus', onInputFocus);

const dataLength = Number(inputRef.getAttribute('data-length'));

function onInputBlur(event) {
  inputRef.classList.add(
    event.currentTarget.value.length === dataLength ? 'valid' : 'invalid',
  );
}

function onInputFocus(event) {
  event.currentTarget.classList.remove('invalid', 'valid');
}
