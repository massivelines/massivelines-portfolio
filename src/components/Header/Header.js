import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Div100vh from 'react-div-100vh';
import { Link } from 'gatsby';
import { isMobile } from 'react-device-detect';

import Circle from './Circle';

const Header = ({ indexPage, offScreen, headerHeight }) => (
  <>
    {indexPage ? (
      <header
        id="home"
        className={`${indexPage && 'index-page'}`}
        style={{ height: headerHeight }}
      >
        <VisibilitySensor
          partialVisibility
          onChange={visData => {
            offScreen(visData);
          }}
        >
          <div className="header-graphic">
            <Link className="header-link" to="/#home">
              <div className="name">
                <span>Shawn</span>
                <span>Rhodes</span>
              </div>
            </Link>
            <Circle />
          </div>
        </VisibilitySensor>
        <div className="tagline-container">
          <div className="tagline">Front End Developer &amp; Web Designer</div>
        </div>
      </header>
    ) : (
      <VisibilitySensor
        partialVisibility
        onChange={visData => {
          offScreen(visData);
        }}
      >
        <header id="home" className={`${indexPage && 'index-page'}`}>
          <div className="template-header">
            <Circle />
            <Link className="header-link" to="/#home">
              <div className="name">Shawn Rhodes</div>
            </Link>
          </div>
        </header>
      </VisibilitySensor>
    )}
  </>
);

export default Header;
