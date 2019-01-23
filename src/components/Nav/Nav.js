import React, { Component } from 'react';

const pageLinks = [
  {
    title: 'Home',
    address: '#home',
  },
  {
    title: 'About',
    address: '#about',
  },
  {
    title: 'Portfolio',
    address: '#portfolio',
  },
  {
    title: 'Background',
    address: '#background',
  },
  {
    title: 'Contact',
    address: '#contact',
  },
  {
    title: 'Resume',
    address: '/resume',
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
    this.setState({ menuIsOpen: !menuIsOpen });
  }

  render() {
    const { menuIsOpen } = this.state;
    let delay = 1;

    return (
      <nav className={`${menuIsOpen && 'menu-open'}`} role="navigation">
        <a className="trigger" onClick={this.toggleMenuHandler} />
        <span className={`bar1 ${menuIsOpen && 'menu-open'}`} />
        <span className={`bar2 ${menuIsOpen && 'menu-open'}`} />
        <span className={`bar3 ${menuIsOpen && 'menu-open'}`} />
        <div className={`background ${menuIsOpen && 'menu-open'}`}>
          <div className={`link-container ${menuIsOpen && 'menu-open'}`}>
            <ul className="link-list">
              {pageLinks.map(linkData => {
                delay += 0.3;
                return (
                  <li key={linkData.title}>
                    <span className="test">
                      <a
                        href={linkData.address}
                        style={
                          menuIsOpen
                            ? { transitionDelay: `${delay}s` }
                            : { transitionDelay: `0s` }
                        }
                        className={`link ${menuIsOpen && 'menu-open'}`}
                      >
                        {linkData.title}
                      </a>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;

// {/* <div className="top-bar"> */ }
// {/* <div className="hamburger-container">
//             <a onClick={this.toggleMenuHandler}>
//               <span className="bar1" />
//               <span className="bar2" />
//               <span className="bar3" />
//             </a> */}
// {/* <button type="button" onClick={this.toggleMenuHandler}>
//               Menu
//             </button> */}
// {/* </div> */ }

// {/* </div> */ }
// {/* {menuIsOpen && (
//           <div className="menu">
//             <ul>
//               <li>
//                 <a href="#home">Home</a>
//               </li>
//               <li>
//                 <a href="#about">About</a>
//               </li>
//               <li>
//                 <a href="#portfolio">Portfolio</a>
//               </li>
//               <li>
//                 <a href="#background">Background</a>
//               </li>
//               <li>
//                 <a href="#contact">Contact</a>
//               </li>
//               <li>
//                 <a href="/resume">Resume</a>
//               </li>
//             </ul>
//           </div>
//         )} */}
