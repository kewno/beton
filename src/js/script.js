document.addEventListener('DOMContentLoaded', () => {

  const video = document.querySelector('video');
  const play = document.querySelector('.image-play');
  const videoName = document.querySelector('.video__explanation');

  const pointDelivery = document.querySelector('.delivery__point');
  const cardDelivery = document.querySelector('.delivery__card'); // delivery__card map
  const map = document.querySelector('.map');
  const arrowDelivery = document.querySelector('.delivery__arrow');

  const pointMobileMenu = document.querySelector('.mobile-menu');
  const mobileMenu = document.querySelector('.wrap-menu-mob');

  let isOpenMenu = false;
  let checkDelivery = false;

  const toggleMenu = () => {
    if (isOpenMenu) {
      mobileMenu.style.display = 'none';
    } else {
      window.onscroll = function () { window.scrollTo(0, 0); };
      //mobileMenu.style.display = 'block';
    }
    isOpenMenu = !isOpenMenu;
  }
  //mobileMenu.onclick = () => toggleMenu();
  pointMobileMenu.onclick = () => toggleMenu();

  if (play != null)
    play.onclick = () => {
      video.controls = true;
      videoName.style.display = "none";
      video.play()
    }

  const toggleCard = () => {
    if (checkDelivery) {
      checkDelivery = false;
      //cardDelivery.style.display = "none";map
      //cardDelivery.style.height = '618px'; //100%
      map.style.height = '0px';
      arrowDelivery.style.transform = 'rotate(0deg)'; // 'deg'
    } else {
      checkDelivery = true;
      //cardDelivery.style.display = 'block';
      map.style.height = '618px';
      //cardDelivery.style.height = '0px';

      arrowDelivery.style.transform = 'rotate(180deg)';
    }
  }

  if (pointDelivery != null) pointDelivery.onclick = () => toggleCard();
  if (arrowDelivery != null) arrowDelivery.onclick = () => toggleCard();
});
