import HTML5 from '../content/assets/skills/html5.svg';
import CSS3 from '../content/assets/skills/css3.svg';
import Javascript from '../content/assets/skills/javascript.svg';
import React from '../content/assets/skills/react.svg';
import Gatsby from '../content/assets/skills/gatsby.svg';
import GraphQL from '../content/assets/skills/graphql.svg';
import Typescript from '../content/assets/skills/typescript.svg';
import Webpack from '../content/assets/skills/webpack.svg';
import Sass from '../content/assets/skills/sass.svg';
import Photoshop from '../content/assets/skills/photoshop-cc.svg';
import Illustrator from '../content/assets/skills/adobe-illustrator-cc.svg';
import XD from '../content/assets/skills/adobe-xd.svg';

const skills = [
  {
    title: 'Core',
    skills: [
      { title: 'HTML5', icon: HTML5 },
      { title: 'CSS3', icon: CSS3 },
      { title: 'Javascript', icon: Javascript },
    ],
  },
  {
    title: 'Stack',
    skills: [
      { title: 'React', icon: React },
      { title: 'Gatsby', icon: Gatsby },
      { title: 'GraphQL', icon: GraphQL },
    ],
  },
  {
    title: 'Utilities',
    skills: [
      { title: 'Typescript', icon: Typescript },
      { title: 'Webpack', icon: Webpack },
      { title: 'Sass', icon: Sass },
    ],
  },
  {
    title: 'Design',
    skills: [
      { title: 'Photoshop', icon: Photoshop },
      { title: 'Illustrator', icon: Illustrator },
      { title: 'XD', icon: XD },
    ],
  },
];

export default skills;
