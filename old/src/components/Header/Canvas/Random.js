// random.js - randomizes a boxes properties

function random(colorOutline, boxSize, screenSize) {
  // random color
  const color = () => {
    const rand = Math.floor(Math.random() * colorOutline.length);
    return colorOutline[rand];
  };

  // ranom y position
  const y = () => {
    const min = -boxSize.maxH;
    const max = screenSize.height;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // x starting position min set to -box max to start on left off screen
  const x = () => {
    const min = -boxSize.maxW;
    const max = screenSize.width;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // random width
  const height = () => {
    const min = boxSize.minH;
    const max = boxSize.maxH;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // random width
  const width = () => {
    const min = boxSize.minW;
    const max = boxSize.maxW;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // random speed
  const speed = () => {
    const min = 0.3;
    const max = 1;
    const rand = Math.random() * (max - min + 1) + min;
    const factor = 10 ** 1;
    const out = Math.round(rand * factor) / factor;
    return out;
  };

  return {
    color: color(),
    y: y(),
    x: x(),
    height: height(),
    width: width(),
    speed: speed(),
  };
}

export default random;
