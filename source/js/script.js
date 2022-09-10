const price = document.querySelector('#price');
const rangeProgres = document.querySelector('.form-container__progres');
const priceRent = document.querySelector('#price-rent');

price.oninput = () => {
  let startWidth = (price.value - 10) * 100 / 125;
  rangeProgres.style.width = startWidth + '%';
  priceRent.innerHTML = price.value + '.00';
}

const collapseBtn = document.querySelector('.collapsed');

collapseBtn.addEventListener('click', () => {
  let test = collapseBtn.getAttribute('aria-expanded');
  if (test == 'true'){
    collapseBtn.innerHTML = `Hide All <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.00026 11.1994C7.53359 11.1994 7.06692 11.0194 6.71359 10.6661L2.36692 6.31944C2.17359 6.12611 2.17359 5.80611 2.36692 5.61277C2.56026 5.41944 2.88026 5.41944 3.07359 5.61277L7.42026 9.95944C7.74026 10.2794 8.26026 10.2794 8.58026 9.95944L12.9269 5.61277C13.1203 5.41944 13.4403 5.41944 13.6336 5.61277C13.8269 5.80611 13.8269 6.12611 13.6336 6.31944L9.28692 10.6661C8.93359 11.0194 8.46692 11.1994 8.00026 11.1994Z" fill="#90A3BF" stroke="#90A3BF" stroke-width="0.5"/>
    </svg>`;
  } else {
    collapseBtn.innerHTML = `Show All <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.00026 11.1994C7.53359 11.1994 7.06692 11.0194 6.71359 10.6661L2.36692 6.31944C2.17359 6.12611 2.17359 5.80611 2.36692 5.61277C2.56026 5.41944 2.88026 5.41944 3.07359 5.61277L7.42026 9.95944C7.74026 10.2794 8.26026 10.2794 8.58026 9.95944L12.9269 5.61277C13.1203 5.41944 13.4403 5.41944 13.6336 5.61277C13.8269 5.80611 13.8269 6.12611 13.6336 6.31944L9.28692 10.6661C8.93359 11.0194 8.46692 11.1994 8.00026 11.1994Z" fill="#90A3BF" stroke="#90A3BF" stroke-width="0.5"/>
    </svg>`;
  }
});

const checkSwiper = document.querySelector('.swiper');

if(checkSwiper){
  new Swiper('.swiper', {
    direction: "horizontal",
    loop: false,
    observer: true,
    observeSlideChildren: true,
    slidesPerView: "auto",
    resistanceRatio: 0.6,
    grabCursor: true,
    preloadImages: false,
    slidesOffsetAfter: 38,
    breakpoints: {
      // when window width is >= 1024px
      320: {
        enabled: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
      576: {
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
      768: {
        enabled: false,
        slidesOffsetAfter: 0,
        centeredSlides: false,
      },
    },
  });
}
