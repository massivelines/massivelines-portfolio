$(document).foundation()

headerTag.style.cssText = "min-height:" +window.outerHeight+ "px";

// gets location and size of element
function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left,
    right: el.right,
    top: el.top,
    bottom: el.bottom,
    width: el.width,
    height: el.height
  };
}


var headerTextOffset = getOffset(headerText);
var headerOffset = getOffset(headerTag);

var canvas = document.getElementById("headerCanvas");
canvas.width = window.innerWidth;
canvas.height = window.outerHeight;
var ctx = canvas.getContext("2d");

var animation;

function CanvasBackground() {
  this.draw = function() {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      ctx.lineTo(0, canvas.height * .33);
      ctx.lineTo(canvas.width, canvas.height * .66);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.fillStyle = "black"
      ctx.fill();
    },

    this.update = function() {
      this.draw();
    }

  this.draw();
}

// create text on offscreen canvas
function CanvasText() {
	var offScreenCanvas = document.createElement('canvas');
	offScreenCanvas.width = headerTextOffset.width;
	offScreenCanvas.height = headerTextOffset.height;
	var ctxOffscreen = offScreenCanvas.getContext("2d");

	this.draw = function () {
			var myNameText = document.getElementById("myName");
			var myNameOffset = getOffset(myName);
			var myNameFontSize = window.getComputedStyle(myNameText).fontSize;
			var myNameFontFamily = window.getComputedStyle(myNameText).fontFamily;

			var taglineText = document.getElementById("tagline");
			var taglineOffset = getOffset(tagline);
			var taglineFontSize = window.getComputedStyle(taglineText).fontSize;
			var taglineFontFamily = window.getComputedStyle(taglineText).fontFamily;

			ctxOffscreen.beginPath();

			ctxOffscreen.font = myNameFontSize + " " + myNameFontFamily;
			ctxOffscreen.fillStyle = "white";
			ctxOffscreen.textBaseline = "top";
			ctxOffscreen.fillText(myNameText.innerText, myNameText.offsetLeft, myNameText.offsetTop)

			ctxOffscreen.font = taglineFontSize + " " + taglineFontFamily;
			ctxOffscreen.fillStyle = "white";
			ctxOffscreen.textBaseline = "top";
			ctxOffscreen.fillText(taglineText.innerText, taglineText.offsetLeft, taglineText.offsetTop)

			ctx.drawImage(offScreenCanvas, headerText.getBoundingClientRect().left, headerText.getBoundingClientRect().top);
	},

	this.update = function () {
		ctx.drawImage(offScreenCanvas, headerText.getBoundingClientRect().left, headerText.getBoundingClientRect().top + window.pageYOffset);
	}


	this.draw();
}


// var canvasBackground = new CanvasBackground();
// ctx.globalCompositeOperation = "source-atop";
// var canvasText = new CanvasText();

// using just scroll for changes lags when touched on mobile
function animate() {
	// animation = requestAnimationFrame(animate);
	// ctx.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight);
	// canvasBackground.draw();
	// canvasText.update();
}
animate();

// scroll event
window.addEventListener("scroll", function() {
  var headerTextSticky = false;

  if (headerTextOffset.bottom > headerOffset.bottom - pageYOffset) {
    headerText.setAttribute("style", "position: absolute; top: " + (headerOffset.bottom - (headerTextOffset.height / 2)) + "px");
    headerTextSticky = true;
  } else if (headerTextOffset.bottom < headerOffset.bottom - pageYOffset) {
    headerText.setAttribute("style", "position: fixed; top: 50%");
    headerTextSticky = false;
  }


  if (!headerTextSticky) {
    // ctx.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight);
    // canvasBackground.draw();
    // canvasText.update();
  }
});
