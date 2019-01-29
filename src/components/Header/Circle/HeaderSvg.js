import React from 'react';
import anime from 'animejs';

const transRange = 15;
const minScaleY = 0.9;
const maxScaleY = 1.1;

const randomScale = () => Math.random() * (maxScaleY - minScaleY) + minScaleY;
const randomTranslate = () => Math.random() * (transRange + 100) - transRange;

const style = () => {
  return {
    transformOrigin: '50% 50%',
    transformBox: 'fill-box',
  };
};

const transform = () => {
  // randomly decided which ones to move
  const decidedToMove = Math.floor(Math.random() * Math.floor(2));
  const decidedToScale = Math.floor(Math.random() * Math.floor(2));

  let translateY = 0;
  let scaleY = 1;

  if (decidedToMove >= 0) {
    translateY = randomTranslate();
  }
  if (decidedToScale >= 0) {
    scaleY = randomScale();
  }

  return `translate(0, ${translateY}),
          scale(1, ${scaleY})`;
};

const HeaderSVG = React.forwardRef((props, ref) => (
  <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 768">
    <g fill="lightgray" fillRule="evenodd">
      <path
        d="M168.64 604.19q7 6.85 14.44 13.25V150.56q-7.43 6.39-14.44 13.25z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M471.83 88.7q-11.83-3.51-24.06-6.09v602.78q12.21-2.58 24.06-6.09z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M482.26 92c-2.93-1-5.87-1.92-8.83-2.82v589.63c3-.9 5.9-1.83 8.83-2.82z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M193.51 142q-4.49 3.54-8.83 7.22v469.6q4.35 3.69 8.83 7.22z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M446.16 82.28c-2.39-.49-4.8-1-7.22-1.39v606.22c2.42-.43 4.83-.9 7.22-1.39z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M594.55 159.21A308.14 308.14 0 0 0 568.08 137v494a308.14 308.14 0 0 0 26.47-22.17z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M505.52 100.9q-10.63-4.56-21.66-8.35v582.9q11-3.78 21.66-8.35z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M404.45 691.33q9.72-.65 19.25-1.87V78.54q-9.53-1.23-19.25-1.87z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M656.31 240a308.7 308.7 0 0 0-42.51-61v410.08a308.7 308.7 0 0 0 42.51-61z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M659.52 246.18c-.53-1.05-1.07-2.11-1.61-3.15V525c.54-1 1.08-2.1 1.61-3.15z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M609.79 593.48c.8-.86 1.61-1.74 2.4-2.62V177.14c-.79-.88-1.6-1.76-2.4-2.62z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M437.34 80.61q-6-1-12-1.86v610.5q6-.81 12-1.86z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M676.36 286.85v194.3a309.55 309.55 0 0 0 0-194.3z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M674.76 282.14a306.19 306.19 0 0 0-13.64-32.71v269.14a306.19 306.19 0 0 0 13.64-32.71z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M566.47 135.85a308.32 308.32 0 0 0-59.35-34.26v564.82a308.32 308.32 0 0 0 59.35-34.26z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M142.17 193.24c-.54.68-1.07 1.37-1.6 2v377.47c.53.68 1.06 1.37 1.6 2z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M139 197.37q-5 6.54-9.62 13.35v346.56q4.64 6.81 9.62 13.35z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M82 323.15a310.55 310.55 0 0 0 0 121.7z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M83.62 452.37a306.51 306.51 0 0 0 44.11 102.54V213.09a306.51 306.51 0 0 0-44.11 102.54z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M167 165.4a306.19 306.19 0 0 0-23.26 25.83v385.54A306.19 306.19 0 0 0 167 602.6z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M608.18 172.8q-5.85-6.2-12-12.08v446.56q6.18-5.88 12-12.08z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M402.85 76.57Q393.49 76 384 76c-5.79 0-11.54.17-17.24.48v615c5.7.31 11.45.48 17.24.48q9.5 0 18.85-.57z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M353.12 77.53a306.78 306.78 0 0 0-36.9 6v601a306.78 306.78 0 0 0 36.9 6z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M365.15 76.57q-5.24.32-10.43.81v613.24q5.19.5 10.43.81z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M284.14 92.55q-4.85 1.67-9.62 3.48V672q4.77 1.81 9.62 3.48z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M267.3 98.88A306.09 306.09 0 0 0 230.4 117v534a306.09 306.09 0 0 0 36.9 18.1z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M272.91 96.65l-4 1.58v571.54l4 1.58z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M228.8 117.91a309.08 309.08 0 0 0-33.69 22.8v486.58a309.08 309.08 0 0 0 33.69 22.8z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M302.59 86.88q-8.52 2.33-16.85 5.13V676q8.32 2.81 16.85 5.13z"
        style={style()}
        transform={transform()}
      />
      <path
        d="M314.62 83.85q-5.25 1.2-10.43 2.59v595.12q5.19 1.38 10.43 2.59z"
        style={style()}
        transform={transform()}
      />
    </g>
    <path
      fill="none"
      d="M0 0h768v768H0z"
      style={style()}
      transform={transform()}
    />
  </svg>
));

export default HeaderSVG;
