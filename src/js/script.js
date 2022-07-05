document.addEventListener('DOMContentLoaded', () => {

  let video = document.querySelector('video');
  let play = document.querySelector('.image-play');
  let videoName = document.querySelector('.video__explanation');

  let pointDelivery = document.querySelector('.delivery__point');
  let cardDelivery = document.querySelector('.delivery__card');
  let arrowDelivery = document.querySelector('.delivery__arrow');
  let checkDelivery = false;

  let pointMobileMenu = document.querySelector('.mobile-menu');
  let mobileMenu = document.querySelector('.wrap-menu-mob');
  let isOpenMenu = false;

  pointMobileMenu.onclick = () => toggleMenu();

  if (play != null)
    play.onclick = () => {
      video.controls = true;
      videoName.style.display = "none";
      video.play()
    }

  if (pointDelivery != null) pointDelivery.onclick = () => toggleCard();
  if (arrowDelivery != null) arrowDelivery.onclick = () => toggleCard();

  let toggleCard = () => {
    if (checkDelivery) {
      //cardDelivery.style.height = "618.03px"
      checkDelivery = false;
      cardDelivery.style.display = "none";
      arrowDelivery.style.transform = 'rotate(0deg)'; // 'deg'
    } else {
      //cardDelivery.style.height = "0"
      checkDelivery = true;
      cardDelivery.style.display = 'block';
      arrowDelivery.style.transform = 'rotate(180deg)';
    }
  }

  let toggleMenu = () => {
    if (isOpenMenu) {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'block';
    }
    isOpenMenu = !isOpenMenu;
  }
});
