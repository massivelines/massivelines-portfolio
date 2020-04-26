import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { ReactComponent as Github } from '../../content/assets/icons/github-brands.svg';
import { ReactComponent as Linkedin } from '../../content/assets/icons/linkedin-in-brands.svg';

const pageLinks = [
  {
    title: 'Home',
    address: '/#home',
  },
  {
    title: 'About',
    address: '/#about',
  },
  {
    title: 'Portfolio',
    address: '/#portfolio',
  },
  {
    title: 'Background',
    address: '/#background',
  },
  {
    title: 'Contact',
    address: '/#contact',
  },
];

class Nav extends Component {
  constructor(props) {
    super(props);

    this.toggleMenuHandler = this.toggleMenuHandler.bind(this);

    this.state = {
      menuIsOpen: false,
    };
  }

  toggleMenuHandler() {
    const { menuIsOpen } = this.state;
    const { toggleScrollLock } = this.props;
    this.setState({ menuIsOpen: !menuIsOpen });
    toggleScrollLock();
  }

  render() {
    const { menuIsOpen } = this.state;
    const { headerVisible, headerHeight } = this.props;
    let delay = 1;
    return (
      <nav
        className={`${menuIsOpen && 'menu-open'} ${
          !headerVisible && 'change-color'
        }`}
        role="navigation"
        style={{ height: menuIsOpen && headerHeight }}
      >
        <div
          className="trigger"
          role="button"
          tabIndex="0"
          onClick={this.toggleMenuHandler}
          onKeyPress={this.toggleMenuHandler}
        />
        <span className="bar1" />
        <span className="bar2" />
        <span className="bar3" />
        <div className={`background ${menuIsOpen && 'menu-open'}`}>
          <div className={`link-container ${menuIsOpen && 'menu-open'}`}>
            {pageLinks.map((linkData) => {
              delay += 0.3;
              return (
                <Link
                  style={
                    menuIsOpen
                      ? { transitionDelay: `${delay}s` }
                      : { transitionDelay: `0s` }
                  }
                  className={`link ${menuIsOpen && 'menu-open'}`}
                  onClick={this.toggleMenuHandler}
                  to={linkData.address}
                  key={linkData.title}
                >
                  {linkData.title}
                </Link>
              );
            })}
            <a
              style={
                menuIsOpen
                  ? { transitionDelay: `${delay + 0.3}s` }
                  : { transitionDelay: `0s` }
              }
              className={`link ${menuIsOpen && 'menu-open'}`}
              onClick={this.toggleMenuHandler}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              href="/Shawn_Rhodes_Resume.pdf"
            >
              Resume
            </a>
            <div className="social">
              <OutboundLink
                style={
                  menuIsOpen
                    ? { transitionDelay: `${delay + 0.6}s` }
                    : { transitionDelay: `0s` }
                }
                className={`link ${menuIsOpen && 'menu-open'}`}
                onClick={this.toggleMenuHandler}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Profile"
                href="https://github.com/massivelines"
              >
                <Github className="icon" />
              </OutboundLink>
              <OutboundLink
                style={
                  menuIsOpen
                    ? { transitionDelay: `${delay + 0.6}s` }
                    : { transitionDelay: `0s` }
                }
                className={`link ${menuIsOpen && 'menu-open'}`}
                onClick={this.toggleMenuHandler}
                href="https://www.linkedin.com/in/shawn-rhodes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin Profile"
              >
                <Linkedin className="icon" />
              </OutboundLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  toggleScrollLock: PropTypes.func.isRequired,
  headerVisible: PropTypes.bool.isRequired,
  headerHeight: PropTypes.string.isRequired,
};

export default Nav;
