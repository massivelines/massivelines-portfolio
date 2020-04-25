import Random from './Random';
import BoxObject from './BoxObject';

const Box = (ctx, screenSize) => {
  // color outlines for squares
  const colorOutline = ['#496479', '#232F3A', '#938F9A', '#56545B', '#504E54'];

  // Basic box size to randomize off of
  const boxSizeTemplate = {
    minH: 50,
    maxH: 150,
    minW: 500,
    maxW: 1000,
  };

  // color to hover to
  const hoverColor = {
    r: 184,
    g: 38,
    b: 30,
  };

  // how many frames to use to change
  const frameColorSteps = 30;

  const numOfBoxes = 30;
  const boxArray = [];

  // loop and push a new BoxObject with random values
  for (let i = 0; i < numOfBoxes; i += 1) {
    boxArray.push(
      new BoxObject(
        ctx,
        Random(colorOutline, boxSizeTemplate, screenSize),
        screenSize,
        hoverColor,
        frameColorSteps,
      ),
    );
  }
  return boxArray;
};

export default Box;
