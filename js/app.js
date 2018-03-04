'use strict';

var images = ['./images/bag.jpg', './images/banana.jpg', './images/boots.jpg', './images/chair.jpg', './images/cthulhu.jpg', './images/dragon.jpg', './images/pen.jpg', './images/scissors.jpg', './images/shark.jpg', './images/sweep.jpg', './images/unicorn.jpg', './images/usb.jpg', './images/water_can.jpg', './images/wine_glass.jpg'];
var carousel = document.getElementById('images-holder');

//function to get one random image from the images array
function getRandomImage() {
  var randomNumber = Math.floor(Math.random() * images.length);
  return images[randomNumber];
}

//function to populate an array with three non-duplicate images from the images array
function loadImage() {
  var threeImages = [];

  while (threeImages.length !== 3) {
    var randomImage = getRandomImage();

    if (threeImages.indexOf(randomImage) === -1) {
      threeImages.push(randomImage);
    }
  }
  return threeImages;
}

//function to display results from loadImage function on page
function buildCarousel() {
  var threeImages = loadImage();
  var image = document.createElement('img');
  image.src = threeImages[0];
  document.getElementById('images-holder').appendChild(image);
  image = document.createElement('img');
  image.src = threeImages[1];
  document.getElementById('images-holder').appendChild(image);
  image = document.createElement('img');
  image.src = threeImages[2];
  document.getElementById('images-holder').appendChild(image);
}

window.addEventListener('load', buildCarousel);
