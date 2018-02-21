$(document).foundation();

// holder for screen size function
var updateScreenSize;

var isMobile = false;

// if mobile is detected use screen for size else use inner
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  updateScreenSize = function () {
    return {
      h: window.screen.height,
      w: window.screen.width
    };
  };
  isMobile = true;
} else {
  updateScreenSize = function () {
    return {
      h: window.innerHeight,
      w: window.innerWidth
    };
  };
}

// sets key elements to screen height px instead of min-height: 100vh
function mobileVH(size) {
  document.getElementById("header").style.minHeight = size.h + "px";
  var sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.minHeight = size.h + "px";
  }
  document.getElementById("headerContainer").style.minHeight = size.h + "px";
}

// inital screen size
var screenSize = updateScreenSize();

// if mobile browser = true call mobileVH
if (isMobile === true) {
  mobileVH(screenSize);
}


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
// TODO revist to simplify
function Random() {
  this.boxSize = {
    minH: 50,
    maxH: 150,
    minW: 500,
    maxW: 1000
  };

  // random color
  this.color = function () {
    var rand = Math.floor(Math.random() * colorOutline.length);
    return colorOutline[rand];
  };

  // ranom y position
  this.y = function () {
    var min = -this.boxSize.maxH;
    var max = screenSize.h;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // x starting position min set to -box max to start on left off screen
  this.x = function () {
    var min = -this.boxSize.maxW;
    var max = screenSize.w;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // random width
  this.height = function () {
    var min = this.boxSize.minH;
    var max = this.boxSize.maxH;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // random width
  this.width = function () {
    var min = this.boxSize.minW;
    var max = this.boxSize.maxW;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // random speed
  this.speed = function () {
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
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);
  var result = {
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
  this.init = function () {
    this.currentColorObj = convertHexToRGB(this.color);
    this.colorStepObj = hoverSteps(this.currentColorObj);
  };

  this.draw = function () {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#1B252D";
    ctx.fill();
    ctx.lineWidth = "2";
    ctx.strokeStyle = this.color;
    ctx.stroke();
  };

  this.hover = function () {
    // if object touched fade hoverColor in
    // keep currentColorObj for rgb with decimals points
    // round up for output
    if (this.touch === true && this.hoverDirection == "in") {
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
    } else if (this.touch === false && this.hoverDirection == "out") {
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

  this.update = function () {
    // movement
    if (this.x > screenSize.w) {
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
  ctx.clearRect(0, 0, screenSize.w, screenSize.h);
  for (var i = 0; i < boxArray.length; i++) {
    boxArray[i].update();
  }
}
animate();

// determin type and where touch, pointer, or mouse movent is
// use header beacause canvas is behind text
// TODO clean up addEventListeners
var header = document.getElementById('header');
if (
  "TouchEvent" in window &&
  "ontouchstart" in window &&
  "ontouchend" in document
) {
  header.addEventListener("touchstart", function (event) {
    mouse.x = event.touches[0].pageX;
    mouse.y = event.touches[0].pageY;
  });
  header.addEventListener("touchend", function (event) {
    mouse.x = undefined;
    mouse.y = undefined;
  });
  header.addEventListener("touchcancel", function (event) {
    mouse.x = undefined;
    mouse.y = undefined;
  });
} else if ("PointerEvent" in window) {
  header.addEventListener("pointermove", function (event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });
  header.addEventListener("pointerdown", function (event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });
  header.addEventListener("pointerleave", function (event) {
    mouse.x = undefined;
    mouse.y = undefined;
  });
} else {
  header.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });
}

// holder pervious for screensize for resize
var previousCanvasHeight = screenSize.h;
var previousCanvasWidth = screenSize.w;

// use foundation throttle and deboucer
$("body").on("resizeme.zf.trigger", function () {
  screenSize = updateScreenSize();

  if (isMobile === true) {
    mobileVH(screenSize);
  }

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
