import React, { Component } from 'react';

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
    this.setState({ menuIsOpen: !menuIsOpen });
  }

  render() {
    const { menuIsOpen } = this.state;

    return (
      <nav>
        <div className="top-bar">
          <a href="/#">Shawn Rhodes</a>
          <div>
            <button type="button" onClick={this.toggleMenuHandler}>
              Menu
            </button>
          </div>
        </div>
        {menuIsOpen && (
          <div className="menu">
            <ul>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/#background">Background</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
              <li>
                <a href="/#resume">Resume</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  }
}

export default Nav;
