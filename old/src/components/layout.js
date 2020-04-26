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
    // if mobile set height of header to innerHeight to counter the top bar
    if (isMobile) {
      this.setState({ headerHeight: `${window.innerHeight}px` });
    }
  }

  headerOffScreen(visData) {
    // set true if header is offscreen to change menu bar colors
    this.setState({
      headerVisible: visData,
    });
  }

  toggleScrollLock() {
    // toggle scroll lock when menu is open
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
        render={(data) => (
          <>
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
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  indexPage: PropTypes.bool.isRequired,
};

export default Layout;
