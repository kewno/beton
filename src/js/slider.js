import Swiper from 'swiper';
//import Swiper from '../../node_modules/';//swiper/js/swiper
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper-container', {
    spaceBetween: 13,
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
})
// export default
// });
