$(document).foundation()


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
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

function CanvasBackground() {
  this.draw = function () {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(0, canvas.height*.33);
    ctx.lineTo(canvas.width, canvas.height*.66);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.fillStyle = "black"
    ctx.fill();
  }
  this.draw();
}




function CanvasText() {
  var myNameText = document.getElementById("myName");
  var myNameOffset = getOffset(myName);
  var myNameFontSize = window.getComputedStyle(myNameText).fontSize;
  var myNameFontFamily = window.getComputedStyle(myNameText).fontFamily;

  var taglineText = document.getElementById("tagline");
  var taglineOffset = getOffset(tagline);
  var taglineFontSize = window.getComputedStyle(taglineText).fontSize;
  var taglineFontFamily = window.getComputedStyle(taglineText).fontFamily;

  this.draw = function () {
    ctx.beginPath();
    ctx.font = myNameFontSize + " " + myNameFontFamily;
    ctx.fillStyle = "White";
    ctx.textBaseline = "bottom";
    ctx.fillText(myNameText.innerText, myNameOffset.left, myNameOffset.bottom + pageYOffset)

    ctx.font = taglineFontSize + " " + taglineFontFamily;
    ctx.fillStyle = "White";
    ctx.textBaseline = "bottom";
    ctx.fillText(taglineText.innerText, taglineOffset.left, taglineOffset.bottom + pageYOffset)

  },
  this.draw();
}

var canvasBackground = new CanvasBackground();
ctx.globalCompositeOperation = "source-atop";
var canvasText = new CanvasText();

// scroll event
window.addEventListener("scroll", function () {
  var headerTextSticky = false;

  if (headerTextOffset.bottom > headerOffset.bottom - pageYOffset) {
    headerText.setAttribute("style", "position: absolute; top: " + (headerOffset.bottom - (headerTextOffset.height/2)) +"px");
    headerTextSticky = true;
  } else if (headerTextOffset.bottom < headerOffset.bottom - pageYOffset) {
    headerText.setAttribute("style", "position: fixed; top: 50%");
    headerTextSticky = false;
  }

  if (!headerTextSticky) {
    ctx.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight);
    canvasBackground.draw();
    canvasText.draw();
  }

});
