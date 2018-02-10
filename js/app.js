$(document).foundation();

// holder for screen size function
var updateScreenSize;

// if mobile is detected use screen for size else use inner
if (
	(/Mobi/i.test(navigator.userAgent) || /Anroid/i.test(navigator.userAgent)) &&
	window.screen.height > 1
) {
	updateScreenSize = function() {
		return {
			h: window.screen.height,
			w: window.screen.width
		};
	};
} else {
	updateScreenSize = function() {
		return {
			h: window.innerHeight,
			w: window.innerWidth
		};
	};
}

var screenSize = updateScreenSize();

// canvas
var canvas = document.getElementById("headerCanvas");

canvas.height = screenSize.h;
canvas.width = screenSize.w;


var ctx = canvas.getContext("2d");

// color to hover to
var hoverColor = {
	r: 184,
	g: 38,
	b: 30
};

// how many frames to use to change
var frameColorSteps = 30;

// mouse object for current mouse, pointer, and touch location
var mouse = {
	x: undefined,
	y: undefined
};

// color outlines for squares
var colorOutline = ["#496479", "#232F3A", "#938F9A", "#56545B", "#504E54"];

// random object to hold all random funcitons
// todo revist to simplify and fix inner
function Random() {
	this.boxSize = {
		minH: 50,
		maxH: 150,
		minW: 500,
		maxW: 1000
	};

	// random color
	this.color = function() {
		var rand = Math.floor(Math.random() * colorOutline.length);
		return colorOutline[rand];
	};

	// ranom y position
	this.y = function() {
			var min = -this.boxSize.maxH;
			var max = screenSize.h;
			return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	// x starting position min set to -box max to start on left off screen
	this.x = function() {
			var min = -this.boxSize.maxW;
			var max = screenSize.w;
			return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	// random width
	this.height = function() {
		var min = this.boxSize.minH;
		var max = this.boxSize.maxH;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	// random width
	this.width = function() {
		var min = this.boxSize.minW;
		var max = this.boxSize.maxW;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	// random speed
	this.speed = function() {
		var min = 0.3;
		var max = 1;
		var rand = Math.random() * (max - min + 1) + min;
		var factor = Math.pow(10, 1);
		var out = Math.round(rand * factor) / factor;
		return out;
	};
}

// color math functions
// convert a hex color to a object with rgb
function convertHexToRGB(hex) {
	hex = hex.replace("#", "");
	r = parseInt(hex.substring(0, 2), 16);
	g = parseInt(hex.substring(2, 4), 16);
	b = parseInt(hex.substring(4, 6), 16);
	result = result = {
		r: r,
		g: g,
		b: b
	};
	return result;
}

// determin the color step to + or - to current color for hover
function hoverSteps(obj) {
	var rgbStep = {
		r: undefined,
		g: undefined,
		b: undefined
	};

	rgbStep.r = (hoverColor.r - obj.r) / frameColorSteps;
	rgbStep.g = (hoverColor.g - obj.g) / frameColorSteps;
	rgbStep.b = (hoverColor.b - obj.b) / frameColorSteps;

	return rgbStep;
}

// box object
function Box(x, y, height, width, color, speed) {
	// initial position and size
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = speed;
	
	// color information with objects to hold
	// this.color is curent color of object
	this.color = color;
	this.currentColorObj = undefined;
	this.colorStepObj = undefined;
	this.colorRoundedObj = undefined;
	

	// holders for direction of hover
	// itterate through frames
	// is sqaure being touched, true, false, =null after fade out animation
	this.hoverDirection = "in";
	this.hoverItt = 1;
	this.touch = null;
	
	// initial funtion for color conversion
	this.init = function() {
		this.currentColorObj = convertHexToRGB(this.color);
		this.colorStepObj = hoverSteps(this.currentColorObj);
	};
	
	this.draw = function(){
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = "#1B252D";
		ctx.fill();
		ctx.lineWidth = "2";
		ctx.strokeStyle = this.color;
		ctx.stroke();
	};
	
	this.hover = function(){
		// if object touched fade hoverColor in
		// keep currentColorObj for rgb with decimals points
		// round up for output
		if (this.touch == true && this.hoverDirection == "in") {
			if (this.hoverItt <= frameColorSteps) {
				this.currentColorObj = {
					r: this.currentColorObj.r + this.colorStepObj.r,
					g: this.currentColorObj.g + this.colorStepObj.g,
					b: this.currentColorObj.b + this.colorStepObj.b
				};
				this.colorRoundedObj = {
					r: Math.ceil(this.currentColorObj.r),
					g: Math.ceil(this.currentColorObj.g),
					b: Math.ceil(this.currentColorObj.b)
				};
				this.color =
					"rgb(" +
					this.colorRoundedObj.r +
					"," +
					this.colorRoundedObj.g +
					"," +
					this.colorRoundedObj.b +
					")";
				this.hoverItt++;
			} else {
				// change direction from in to hold when animation is compleate
				// and keep hold if object is still being touched after animation
				this.hoverDirection = "hold";
			}
			// fades the hover color back to the orginal
			// determined in this.update
		} else if (this.touch == false && this.hoverDirection == "out") {
			if (this.hoverItt > 1) {
				this.currentColorObj = {
					r: this.currentColorObj.r - this.colorStepObj.r,
					g: this.currentColorObj.g - this.colorStepObj.g,
					b: this.currentColorObj.b - this.colorStepObj.b
				};
				this.colorRoundedObj = {
					r: Math.floor(this.currentColorObj.r),
					g: Math.floor(this.currentColorObj.g),
					b: Math.floor(this.currentColorObj.b)
				};
				this.color =
					"rgb(" +
					this.colorRoundedObj.r +
					"," +
					this.colorRoundedObj.g +
					"," +
					this.colorRoundedObj.b +
					")";
				this.hoverItt--;
			} else {
				// after fade hoverColor back to original
				// set hoverdirection=in and touch=null, ready for next touch
				this.hoverDirection = "in";
				this.touch = null;
			}
		}
	};
	
	this.update = function(){
		// movement
		if (this.x > window.innerWidth) {
			this.x = -this.width;
		} else {
			this.x += this.speed;
		}
		
		// if touch/pointer/mouse moves inside object
		if (
			mouse.y > this.y &&
			mouse.y < this.y + this.height &&
			mouse.x > this.x &&
			mouse.x < this.x + this.width
		) {
			// object is touched
			this.touch = true;
			// if object hover animation is fading out and object is retouched, fade back in
			if (this.hoverDirection == "out") {
				this.hoverDirection = "in";
			}
		} else {
			// if fade in animation is compleated, hoverDirection=hold, is not touched
			// begin fade out animation
			if (this.hoverDirection == "hold") {
				this.hoverDirection = "out";
				this.touch = false;
			}
		}
		
		// run hover funciton
		this.hover();
		// draw each frame
		this.draw();
	};
	
	this.init();
}

// create random object
var random = new Random();

// build box array
var boxArray = [];
for (var i = 0; i < 30; i++) {
	boxArray.push(
		new Box(random.x(), random.y(), random.height(), random.width(), random.color(), random.speed())
	);
}

// animate
function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	for (var i = 0; i < boxArray.length; i++) {
		boxArray[i].update();
	}
}
animate();

// determin type and where touch, pointer, or mouse movent is
// use header beacause canvas is behind text
var header = document.getElementById('header');
if (
	"TouchEvent" in window &&
	"ontouchstart" in window &&
	"ontouchend" in document
) {
	header.addEventListener("touchstart", function(event) {
		mouse.x = event.touches[0].pageX;
		mouse.y = event.touches[0].pageY;
	});
	header.addEventListener("touchend", function(event) {
		mouse.x = undefined;
		mouse.y = undefined;
	});
	header.addEventListener("touchcancel", function(event) {
		mouse.x = undefined;
		mouse.y = undefined;
	});
} else if ("PointerEvent" in window) {
	header.addEventListener("pointermove", function(event) {
		mouse.x = event.pageX;
		mouse.y = event.pageY;
	});
	header.addEventListener("pointerdown", function(event) {
		mouse.x = event.pageX;
		mouse.y = event.pageY;
	});
	header.addEventListener("pointerleave", function(event) {
		mouse.x = undefined;
		mouse.y = undefined;
	});
} else {
	header.addEventListener("mousemove", function(event) {
		mouse.x = event.x;
		mouse.y = event.y;
	});
}

// holder pervious for screensize for resize
var previousCanvasHeight = screenSize.h;
var previousCanvasWidth = screenSize.w;

// use foundation throttle and deboucer
$("body").on("resizeme.zf.trigger", function() {
	screenSize = updateScreenSize();
	// resize the canvas
	canvas.height = screenSize.h;
	canvas.width = screenSize.w;
	
	// loop through each object and adjust x and y to new relative positions
	for (var i = 0; i < boxArray.length; i++) {
		var yPercent = boxArray[i].y / previousCanvasHeight;
		var xPercent = boxArray[i].x / previousCanvasWidth;
		boxArray[i].y = yPercent * screenSize.h;
		boxArray[i].x = xPercent * screenSize.w;
	}
	// set pervious vars to current size ready for next change
	previousCanvasHeight = screenSize.h;
	previousCanvasWidth = screenSize.w;
});