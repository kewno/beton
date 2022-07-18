import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.main-slider', {
    //spaceBetween: 13,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' swiper-pagination__point' + '">' + "</span>";
      },
    },
    navigation: {
      nextEl: ".control-slider__arrow_right",
      prevEl: ".control-slider__arrow_left",
    },
  })
})
