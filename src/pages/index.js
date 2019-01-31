import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Background from '../components/Background';

import SEO from '../components/seo';

import education from '../data/education';
import employment from '../data/employment';

import Header from '../components/Header';

class IndexPage extends PureComponent {
  render() {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const projectArray = data.allMarkdownRemark.edges;
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Header />
        <About />
        <Portfolio data={projectArray} />
        {/* <section id="portfolio">
          <div className="section-title">Portfolio</div>
          {projectArray.map(({ node }) => (
            <Project key={node.fields.slug} projectData={node} />
          ))}
        </section> */}
        <Background education={education} employment={employment} />
      </Layout>
    );
  }
}

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
            codeLink
            liveLink
            icons
          }
        }
      }
    }
  }
`;
