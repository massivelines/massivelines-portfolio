import React, { useState } from 'react';
import { Link } from 'gatsby';
import navigationLinks from '../../data/navigationLinks';

const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(state => !state);
  };

  return (
    <nav className={`navigation ${menuIsOpen ? 'navigation--is-open' : ''}`}>
      <div
        label="Toggle Navigation"
        className="navigation__container"
        role="button"
        tabIndex="0"
        onClick={() => toggleMenu()}
        onKeyPress={() => toggleMenu()}
      />
      <span className="navigation__bar navigation__bar--1" />
      <span className="navigation__bar navigation__bar--2" />
      <span className="navigation__bar navigation__bar--3" />
      <div className="navigation__menu">
        <div className="navigation__menu__links-container">
          {navigationLinks.map(link => (
            <Link key={link.title} to={link.address}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
