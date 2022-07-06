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
      1075: {
        spaceBetween: 13,
        slidesPerView: 3
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      350: {
        slidesPerView: 1
      },
    },
    navigation: {
      nextEl: ".slider .point-next",
      prevEl: ".slider .point-prev",
    },
  })
})
// export default
// });
