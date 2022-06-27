let video = document.querySelector('video');
let play = document.querySelector('.image-play');
let videoName = document.querySelector('.video__description');

let pointDelivery = document.querySelector('.delivery__point');
let cardDelivery = document.querySelector('.delivery__card');
let checkDelivery = true;
//console.log(play) video__description delivery__card


play.onclick = () => {
  video.controls = true;
  play.style.display = "none";
  videoName.style.display = "none";
  video.play()
}
//console.log(pointDelivery)
pointDelivery.onclick = () => {
  console.log(0)
  if (checkDelivery) {
    cardDelivery.style.height = "618.03px"
    checkDelivery = false;
    //cardDelivery.style.display = "none"
    alert(1)
  } else {
    cardDelivery.style.height = "0"
    checkDelivery = true;
    alert(2)
  }
}
