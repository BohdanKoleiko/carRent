const price = document.querySelector('#price');
const rangeProgres = document.querySelector('.form-container__progres');
const priceRent = document.querySelector('#price-rent');

price.oninput = () => {
  let startWidth = price.value - 10;
  rangeProgres.style.width = startWidth * 2.4 + 'px';
  priceRent.innerHTML = price.value + '.00';
}
