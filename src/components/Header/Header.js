import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Circle from './Circle';

const Header = ({ indexPage, offScreen }) => (
  <header id="home" className={`${indexPage && 'index-page'}`}>
    {indexPage ? (
      <>
        <VisibilitySensor
          partialVisibility
          onChange={visData => {
            offScreen(visData);
          }}
        >
          <div className="header-graphic">
            <div className="name">
              <span>Shawn</span>
              <span>Rhodes</span>
            </div>
            <Circle />
          </div>
        </VisibilitySensor>
        <div className="tagline-container">
          <div className="tagline">Front End Developer &amp; Web Designer</div>
        </div>
      </>
    ) : (
      <VisibilitySensor
        partialVisibility
        onChange={visData => {
          offScreen(visData);
        }}
      >
        <div className="template-header">
          <Circle />
          <div className="name">Shawn Rhodes</div>
        </div>
      </VisibilitySensor>
    )}
  </header>
);

export default Header;
