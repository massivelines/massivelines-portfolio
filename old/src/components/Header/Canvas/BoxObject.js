// color math functions
// convert a hex color to a object with rgb values
function convertHexToRGB(hexColor) {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const result = {
    r,
    g,
    b,
  };
  return result;
}

// determine the color step to + or - the current color for hover effect
function hoverSteps(hoverColor, obj, frameColorSteps) {
  const rgbStep = {
    r: undefined,
    g: undefined,
    b: undefined,
  };

  rgbStep.r = (hoverColor.r - obj.r) / frameColorSteps;
  rgbStep.g = (hoverColor.g - obj.g) / frameColorSteps;
  rgbStep.b = (hoverColor.b - obj.b) / frameColorSteps;

  return rgbStep;
}

class BoxObject {
  constructor(ctx, box, screenSize, hoverColor, frameColorSteps) {
    this.ctx = ctx;
    this.box = box;
    this.screenSize = screenSize;
    this.hoverColor = hoverColor;
    this.frameColorSteps = frameColorSteps;
    this.x = box.x;
    this.y = box.y;
    this.height = box.height;
    this.width = box.width;
    this.speed = box.speed;
    this.color = box.color;
    this.currentColorObj = undefined;
    this.colorStepObj = undefined;
    this.colorRoundedObj = undefined;
    this.hoverDirection = 'in';
    this.hoverItt = 1;
    this.touch = null;
    this.touchX = undefined;
    this.touchY = undefined;
    this.init();
  }

  // when loaded sets current color in rgb format and steps for hover effect
  init() {
    this.currentColorObj = convertHexToRGB(this.color);
    this.colorStepObj = hoverSteps(
      this.hoverColor,
      this.currentColorObj,
      this.frameColorSteps,
    );
  }

  // basic canvas draw
  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = '#1B252D';
    this.ctx.fill();
    this.ctx.lineWidth = '2';
    this.ctx.strokeStyle = this.box.color;
    this.ctx.stroke();
  }

  // adjusts values based on new screen size
  resize(previousScreenSize, newScreenSize) {
    this.screenSize = newScreenSize;
    const xPercent = this.box.x / previousScreenSize.width;
    const yPercent = this.box.y / previousScreenSize.height;
    this.box.x = xPercent * this.screenSize.width;
    this.box.y = yPercent * this.screenSize.height;
  }

  // set x y coordinates if mouse or touch on canvas
  hover(touchX, touchY) {
    this.touchX = touchX;
    this.touchY = touchY;
  }

  // update hover color
  updateHoverColor() {
    // if box has been touched and fade direction is in
    // if box is still being touched fade direction is hold
    // if box is not being touched and fade direction is out
    if (this.touch === true && this.hoverDirection === 'in') {
      if (this.hoverItt <= this.frameColorSteps) {
        Object.keys(this.currentColorObj).forEach((key) => {
          this.currentColorObj[key] += this.colorStepObj[key];
        });
        this.box.color = `rgb(${Math.ceil(this.currentColorObj.r)},${Math.ceil(
          this.currentColorObj.g,
        )},${Math.ceil(this.currentColorObj.b)})`;
        this.hoverItt += 1;
      } else {
        // change direction from in to hold when animation is compleat
        // and keep hold if object is still being touched after animation
        this.hoverDirection = 'hold';
      }
      // fades the hover color back to the ordinal
      // determined in this.update
    } else if (this.touch === false && this.hoverDirection === 'out') {
      if (this.hoverItt > 1) {
        Object.keys(this.currentColorObj).forEach((key) => {
          this.currentColorObj[key] -= this.colorStepObj[key];
        });
        this.box.color = `rgb(${Math.ceil(this.currentColorObj.r)},${Math.ceil(
          this.currentColorObj.g,
        )},${Math.ceil(this.currentColorObj.b)})`;
        this.hoverItt -= 1;
      } else {
        // after fade hoverColor back to original
        // set hoverDirection=in and touch=null, ready for next touch
        this.hoverDirection = 'in';
        this.touch = null;
      }
    }
  }

  // updates position of box and if box is touched
  update() {
    // movement
    if (this.x > this.screenSize.width) {
      this.x = -this.width;
    } else {
      this.x += this.speed;
    }

    // check if mouse/touch position is inside this box
    if (
      this.touchY > this.y &&
      this.touchY < this.y + this.height &&
      this.touchX > this.x &&
      this.touchX < this.x + this.width
    ) {
      // object is touched
      this.touch = true;
      // if object hover animation is fading out and object is retouched, fade back in
      if (this.hoverDirection === 'out') {
        this.hoverDirection = 'in';
      }
    } else if (this.hoverDirection === 'hold') {
      // if fade in animation is compleated, hoverDirection=hold, is not touched
      // begin fade out animation
      this.hoverDirection = 'out';
      this.touch = false;
    }

    // updateHoverColor checks if change is needed
    this.updateHoverColor();
    // draw each frame
    this.draw();
  }
}

export default BoxObject;
