'use strict';

var images = ['./images/bag.jpg', './images/banana.jpg', './images/boots.jpg', './images/chair.jpg', './images/cthulhu.jpg', './images/dragon.jpg', './images/pen.jpg', './images/scissors.jpg', './images/shark.jpg', './images/sweep.jpg', './images/unicorn.jpg', './images/usb.jpg', './images/water_can.jpg', './images/wine_glass.jpg'];
var carousel = document.getElementById('images-holder');

function getRandomImage() {
  var randomNumber = Math.floor(Math.random() * images.length);
  return images[randomNumber];
}

function loadImage() {
  var threeImages = [];

  while (threeImages.length !== 3) {
    var randomImage = getRandomImage();

    if (threeImages.indexOf(randomImage) === -1) {
      threeImages.push(randomImage);
    }
  }
  console.log(threeImages);
}



  // var image = document.createElement('img');
  // image.setAttribute('src', './images/bag.jpg');
  // document.getElementById('images-holder').appendChild(image);
  // image = document.createElement('img');
  // image.setAttribute('src', './images/banana.jpg');
  // document.getElementById('images-holder').appendChild(image);
  // image = document.createElement('img');
  // image.setAttribute('src', './images/cthulhu.jpg');
  // document.getElementById('images-holder').appendChild(image);
// }



window.addEventListener('load', loadImage);



// for(var imagesIndex = 0; imagesIndex < images.length; imagesIndex++) {
//   var image = document.createElement('img');
//   image.setAttribute('src', './images/bag.jpg');
//   document.getElementById('images-holder').appendChild(image);
// }
