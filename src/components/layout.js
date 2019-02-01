import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.headerOffScreen = this.headerOffScreen.bind(this);

    this.state = {
      headerVisible: true,
    };
  }

  headerOffScreen(visData) {
    // console.log(visData);
    this.setState({
      headerVisible: visData,
    });
  }

  render() {
    const { children, indexPage } = this.props;
    const { headerVisible } = this.state;
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
              <Nav headerVisible={headerVisible} />

              <Header
                offScreen={this.headerOffScreen}
                indexPage={indexPage}
                siteTitle={data.site.siteMetadata.title}
              />

              {children}
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
