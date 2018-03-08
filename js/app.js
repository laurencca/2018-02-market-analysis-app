'use strict';

var imageName = '';
var imageLocation = '';
var carousel = document.getElementById('images-holder');
var voteCounter = 0;

//constructor function for images
var Image = function(imageName, imageLocation) {
  this.label = imageName;
  this.imageLocation = imageLocation;
  this.y = 0;
}

//images array
var images = [];
if (localStorage.getItem('images') == null) {
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
} else {
  images = JSON.parse(localStorage.getItem('images'));
}

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
        images[index].y += 1;
        voteCounter += 1;
        localStorage.setItem('images', JSON.stringify(images));
      }
    }
    if (voteCounter % 15 === 0) {
      alert('Voting Complete! See results below.')
      addChart();
    } else {
      buildCarousel();
    }
  }
}

function addChart () {
	var chart = new CanvasJS.Chart('chart-holder', {
		title:{
			text: "Bus Mall Voting Results"
		},
		data: [
		{
			type: "column",
			dataPoints: images
		}
		]
	});
	chart.render();
}



window.addEventListener('load', buildCarousel);
window.addEventListener('load', addListener);
