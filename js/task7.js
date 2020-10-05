const sizeControlInputRef = document.querySelector('#font-size-control');
const textForFontSizeChangingRef = document.querySelector('#text');

sizeControlInputRef.addEventListener('input', () => {
  textForFontSizeChangingRef.style.fontSize = `${sizeControlInputRef.value}px`;
});
