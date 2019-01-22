import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import About from '../components/About';
import Project from '../components/Project';
import Background from '../components/Background';

import SEO from '../components/seo';

import education from '../data/education';
import employment from '../data/employment';

class IndexPage extends PureComponent {
  render() {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const projectArray = data.allMarkdownRemark.edges;
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <About />
        <section>
          <h3>Portfolio</h3>
          {projectArray.map(({ node }) => (
            <Project key={node.fields.slug} projectData={node} />
          ))}
        </section>
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
            thumbnail
            codeLink
            liveLink
            icons
          }
        }
      }
    }
  }
`;
