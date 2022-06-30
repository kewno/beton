import Swiper from 'swiper';
//import Swiper from '../../node_modules/';//swiper/js/swiper
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper-container', {
    spaceBetween: 13,
    slidesPerView: 4,
    breakpoints: {
      1350: {
        spaceBetween: 13,
        slidesPerView: 4
      },
      1250: {
        spaceBetween: 13,
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      360: {
        spaceBetween: 10,
        slidesPerView: 1
      },
      // 200: {
      //   slidesPerView: 1
      // }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
})
// export default
// });
