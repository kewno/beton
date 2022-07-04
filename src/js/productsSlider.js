import Swiper from 'swiper';
//import Swiper from '../../node_modules/';//swiper/js/swiper
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.products-slider', {
    slidesPerView: 1,
    // pagination: {
    //   el: ".wrap-pagination",
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return '<div class="' + className + 'wrap-pagination__elem' + '">' + '<img src="../../images/products-slide.png class="wrap-pagination-image"/>' + "</div>";
    //   },
    // },
    navigation: {
      nextEl: ".wrap-products-slider .products-slider-control__elem_right",
      prevEl: ".wrap-products-slider .products-slider-control__elem_left",
    },
  })
})
// export default
// }); ' + className + '
