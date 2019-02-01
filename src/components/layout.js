import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Locky from 'react-locky';
import { isMobile } from 'react-device-detect';

import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.headerOffScreen = this.headerOffScreen.bind(this);
    this.toggleScrollLock = this.toggleScrollLock.bind(this);

    this.state = {
      headerVisible: true,
      enabledScrollLock: false,
      headerHeight: '100vh',
    };
  }

  componentDidMount() {
    if (isMobile) {
      this.setState({ headerHeight: `${window.innerHeight}px` });
    }
  }

  headerOffScreen(visData) {
    // console.log(visData);
    this.setState({
      headerVisible: visData,
    });
  }

  toggleScrollLock() {
    const { enabledScrollLock } = this.state;
    this.setState({ enabledScrollLock: !enabledScrollLock });
  }

  render() {
    const { children, indexPage } = this.props;
    const { headerVisible, enabledScrollLock, headerHeight } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          // console.log(data);
          return (
            <>
              {/* todo: change to when svg is visible */}
              <Nav
                headerHeight={headerHeight}
                headerVisible={headerVisible}
                toggleScrollLock={this.toggleScrollLock}
              />
              <Header
                headerHeight={headerHeight}
                offScreen={this.headerOffScreen}
                indexPage={indexPage}
                siteTitle={data.site.siteMetadata.title}
              />

              <Locky
                enabled={enabledScrollLock}
                events={{ click: false, touchstart: false }}
              >
                {children}
              </Locky>
              <Footer />
            </>
          );
        }}
      />
    );
  }
}

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => {
//       console.log(data);
//       return (
//         <>
//           <Nav />
//           <Header siteTitle={data.site.siteMetadata.title} />
//           {children}
//           <Footer />
//         </>
//       );
//     }}
//   />
// );

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  indexPage: PropTypes.bool.isRequired,
};

export default Layout;
