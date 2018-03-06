'use strict';

var imageName = '';
var imageLocation = '';
var carousel = document.getElementById('images-holder');

//constructor function for images
var Image = function(imageName, imageLocation) {
  this.imageName = imageName;
  this.imageLocation = imageLocation;
  this.vote = 0;
}

//images array
var images = [];
images.push(new Image('bag', 'bag.jpg'))
images.push(new Image('banana', 'banana.jpg'))
images.push(new Image('boots', 'boots.jpg'))
images.push(new Image('chair', 'chair.jpg'))
images.push(new Image('cthulhu', 'cthulhu.jpg'))
images.push(new Image('dragon', 'dragon.jpg'))
images.push(new Image('pen', 'pen.jpg'))
images.push(new Image('scissors', 'scissors.jpg'))
images.push(new Image('shark', 'shark.jpg'))
images.push(new Image('sweep', 'sweep.jpg'))
images.push(new Image('unicorn', 'unicorn.jpg'))
images.push(new Image('usb', 'usb.jpg'))
images.push(new Image('water_can', 'water_can.jpg'))
images.push(new Image('wine_glass', 'wine_glass.jpg'))

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
  var holder = document.getElementById('images-holder');
  holder.innerHTML = '';
  var threeImages = loadImage();
  var image = document.createElement('img');
  image.src = 'images/' + threeImages[0].imageLocation;
  holder.appendChild(image);
  image = document.createElement('img');
  image.src = 'images/' + threeImages[1].imageLocation;
  holder.appendChild(image);
  image = document.createElement('img');
  image.src = 'images/' + threeImages[2].imageLocation;
  holder.appendChild(image);
}

//function to record image clicks
function addListener() {
  document.getElementById('images-holder').addEventListener('click', registerImageClick);
}

function registerImageClick(event) {
  if (event.target.tagName == 'IMG') {
    var index = event.target.src.lastIndexOf("/");
    var imageLocation = event.target.src.substring(index + 1);
    console.log(imageLocation);
    for (var index = 0; index < images.length; index++) {
      if (images[index].imageLocation.indexOf(imageLocation) != -1) {
        images[index].vote += 1;
        console.log(images[index].vote);
      }
    }
    buildCarousel();
  }
}



window.addEventListener('load', buildCarousel);
window.addEventListener('load', addListener);
