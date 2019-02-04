import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Background from '../components/Background';

import SEO from '../components/seo';

import education from '../data/education';
import employment from '../data/employment';

class IndexPage extends PureComponent {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const projectArray = data.allMarkdownRemark.edges;
    return (
      <Layout indexPage title={siteTitle}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <About />
        <Portfolio data={projectArray} />
        <Background education={education} employment={employment} />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
            frontmatter: PropTypes.shape({
              description: PropTypes.string.isRequired,
              thumbnail: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  sizes: PropTypes.shape({
                    aspectRatio: PropTypes.number.isRequired,
                    base64: PropTypes.string.isRequired,
                    sizes: PropTypes.string.isRequired,
                    src: PropTypes.string.isRequired,
                    srcSet: PropTypes.string.isRequired,
                  }).isRequired,
                }).isRequired,
              }).isRequired,
              title: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;

export const projectQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 768) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
