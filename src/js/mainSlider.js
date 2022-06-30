import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.main-slider', {
    //spaceBetween: 13,
    //slidesPerView: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
    navigation: {
      nextEl: ".control-slider__arrow_right",
      prevEl: ".control-slider__arrow_left",
    }
    // return '<span class="' + className + '">' + (index + 1) + "</span>";
      // nextEl: ".button-next",
      // prevEl: ".button-prev",
  })
})
