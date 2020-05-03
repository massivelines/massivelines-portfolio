import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
import Circle from '../Circle';
import Button from '../Button';
import Navigation from '../Navigation';
import useOnScreen from '../../hooks/useOnScreen';

const Header = ({
  // siteTitle,
  homePage,
}) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <header
      className={`header ${homePage ? '' : 'header--page-header'}`}
      ref={ref}
      id="home"
    >
      <Navigation />
      <div
        className={`header__graphic ${
          isVisible ? 'header__graphic--is-visible' : ''
        }`}
      >
        <div className="header__graphic__content-wrapper">
          <div className="header__graphic__name">
            <div>Shawn</div>
            <div>Rhodes</div>
          </div>
          <div className="header__graphic__cta-wrapper">
            <Button onClick={() => {}}>Contact Me</Button>
          </div>
        </div>
        <Circle />
      </div>
      <div className="header__tagline">
        Front End Developer &amp; Web Designer
      </div>
    </header>
  );
};

Header.propTypes = {
  // siteTitle: PropTypes.string,
  homePage: PropTypes.bool,
};

Header.defaultProps = {
  // siteTitle: ``,
  homePage: false,
};

export default Header;
