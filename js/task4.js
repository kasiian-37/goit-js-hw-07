const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

let currentValue = 0;

const increment = () => {
  return (counterValueRef.textContent = currentValue += 1);
};

const decrement = () => {
  return (counterValueRef.textContent = currentValue -= 1);
};

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);
