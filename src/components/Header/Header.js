import React from 'react';

import Circle from './Circle';

const Header = () => (
  <header>
    {/* TODO: chagne classnames */}
    <div className="header-graphic">
      <div className="name">
        <span>Shawn</span>
        <span>Rhodes</span>
      </div>
      <Circle />
    </div>
    <div className="tagline-container">
      <div className="tagline">Front End Developer &amp; Web Designer</div>
      {/* <button type="button">Email Me</button> */}
    </div>
  </header>
);

export default Header;
