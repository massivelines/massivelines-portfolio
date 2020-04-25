import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'gatsby';

import Circle from './Circle';

const Header = ({ indexPage, offScreen, headerHeight }) => (
  <>
    {indexPage ? (
      // Header for Index page
      <header
        id="home"
        className={`${indexPage && 'index-page'}`}
        style={{ height: headerHeight }}
      >
        {/* Test for header visibility to change menu bar colors */}
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
      // Header for Template Pages
      // Test for header visibility to change menu bar colors on template page
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
