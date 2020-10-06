const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

let currentValue = 0;

const increment = () => ++counterValueRef.textContent;

const decrement = () => --counterValueRef.textContent;

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);
