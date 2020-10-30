
const circle = document.querySelector('.circle');
const block = document.querySelector('.block');
const close = document.querySelector('.close');

circle.addEventListener('click', () => {
  block.classList.remove('block-close');
  block.classList.add('block-open');
  circle.style.display = 'none';
});

close.addEventListener('click', () => {
  block.classList.remove('block-open');
  block.classList.add('block-close');
  circle.style.display = 'block';
});
