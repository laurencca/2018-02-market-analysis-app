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
  console.log(threeImages);
}

//function to display results from loadImage function on page
// function buildCarousel() {
//   var image = loadImage();
//     document.getElementById('images-holder').appendChild(image);
// }

// buildCarousel();

var images = [
  { label: "bag",  y: 10  },
  { label: "banana", y: 15  },
  { label: "boots", y: 25  },
  { label: "chair",  y: 30  },
  { label: "cthulhu",  y: 28  },
  { label: "dragon",  y: 50  },
  { label: "pen",  y: 5  },
  { label: "scissors",  y: 32  },
  { label: "shark",  y: 45  },
  { label: "sweep",  y: 40  },
  { label: "unicorn",  y: 60  },
  { label: "usb",  y: 13  },
  { label: "water_can",  y: 27  },
  { label: "wine_glass",  y: 33  }
]

window.addEventListener('load', function() {
  document.getElementById('show-chart-button').addEventListener('click', loadChart);

})

function loadChart() {
	var chart = new CanvasJS.Chart("chart-container", {
		title:{
			text: "Product Chart"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: images
		}
		]
	});
	chart.render();
}

//   var image = document.createElement('img');
//   image.setAttribute('src', './images/bag.jpg');
//   document.getElementById('images-holder').appendChild(image);
//   image = document.createElement('img');
//   image.setAttribute('src', './images/banana.jpg');
//   document.getElementById('images-holder').appendChild(image);
//   image = document.createElement('img');
//   image.setAttribute('src', './images/cthulhu.jpg');
//   document.getElementById('images-holder').appendChild(image);


// for(var imagesIndex = 0; imagesIndex < images.length; imagesIndex++) {
//   var image = document.createElement('img');
//   image.setAttribute('src', './images/bag.jpg');
//   document.getElementById('images-holder').appendChild(image);
// }
