const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', () => {
  if (validationInputRef.value.length == validationInputRef.dataset.length) {
    validationInputRef.classList.add('valid');
    validationInputRef.classList.remove('invalid');
  } else {
    validationInputRef.classList.add('invalid');
    validationInputRef.classList.remove('valid');
  }
});
