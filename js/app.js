'use strict';

var imageName = '';
var imageLocation = '';
var carousel = document.getElementById('images-holder');
var voteCounter = 0;

//constructor function for images
var Image = function(imageName, imageLocation) {
  this.imageName = imageName;
  this.imageLocation = imageLocation;
  this.vote = 0;
}

//images array
var images = [];
images.push(new Image('Bag', 'bag.jpg'))
images.push(new Image('Banana', 'banana.jpg'))
images.push(new Image('Boots', 'boots.jpg'))
images.push(new Image('Chair', 'chair.jpg'))
images.push(new Image('Cthulhu', 'cthulhu.jpg'))
images.push(new Image('Dragon', 'dragon.jpg'))
images.push(new Image('Pen', 'pen.jpg'))
images.push(new Image('Scissors', 'scissors.jpg'))
images.push(new Image('Shark', 'shark.jpg'))
images.push(new Image('Sweep', 'sweep.jpg'))
images.push(new Image('Unicorn', 'unicorn.jpg'))
images.push(new Image('Usb', 'usb.jpg'))
images.push(new Image('Water Can', 'water_can.jpg'))
images.push(new Image('Wine Glass', 'wine_glass.jpg'))

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

//function to track which images are clicked and stop voting after 15 rounds
function registerImageClick(event) {
  if (event.target.tagName == 'IMG') {
    var index = event.target.src.lastIndexOf("/");
    var imageLocation = event.target.src.substring(index + 1);
    for (var index = 0; index < images.length; index++) {
      if (images[index].imageLocation.indexOf(imageLocation) != -1) {
        images[index].vote += 1;
        voteCounter += 1;
      }
    }
    if (voteCounter == 15) {
      alert('Voting Complete! Click "Show Results" button below.');
    } else {
      buildCarousel();
    }
  }
}

//function to create a list showing results of voting
function makeList() {
  var resultsList = document.getElementById('results-list');
  var listHeader = '<h3>Results</h3>' + '<ul>';
  for (var index = 0; index < images.length; index++) {
    var item = images[index].imageName;
    listHeader += '<li>' + item + ' received ' + images[index].vote + ' votes' + '</li>';
  }
  resultsList.innerHTML += listHeader + '</ul>';
}

//function to add the list to the page
function addList() {
    document.getElementById('list-button').addEventListener('click', makeList);
}

window.addEventListener('load', buildCarousel);
window.addEventListener('load', addListener);
window.addEventListener('load', addList);
