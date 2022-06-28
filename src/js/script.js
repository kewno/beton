let video = document.querySelector('video');
let play = document.querySelector('.image-play');
let videoName = document.querySelector('.video__description');

let pointDelivery = document.querySelector('.delivery__point');
let cardDelivery = document.querySelector('.delivery__card');
let arrowDelivery = document.querySelector('.delivery__arrow');
let checkDelivery = false;
//console.log(play) video__description delivery__card delivery__arrow


play.onclick = () => {
  video.controls = true;
  play.style.display = "none";
  videoName.style.display = "none";
  video.play()
}
//console.log(pointDelivery)
pointDelivery.onclick = () => toggleCard();
arrowDelivery.onclick = () => toggleCard();

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
