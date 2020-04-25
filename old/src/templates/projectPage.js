import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import RehypeReact from 'rehype-react';

import CodeLinks from './CodeLinks';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import skillIcons from '../data/skillIcons';

import { ReactComponent as LeftArrow } from '../content/assets/icons/arrow-left-light.svg';
import { ReactComponent as RightArrow } from '../content/assets/icons/arrow-right-light.svg';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { 'code-links': CodeLinks },
}).Compiler;

class BlogPostTemplate extends PureComponent {
  render() {
    const {
      data: {
        site: {
          siteMetadata: { title },
        },
        markdownRemark,
      },
      pageContext: { previous, next },
    } = this.props;

    return (
      <Layout indexPage={false} title={title}>
        <SEO
          title={markdownRemark.frontmatter.title}
          description={markdownRemark.excerpt}
        />
        <div className="template-container">
          <div className="project-content">
            <div className="title">{markdownRemark.frontmatter.title}</div>
            <div className="icon-container">
              {markdownRemark.frontmatter.icons.map(iconName => (
                <div key={iconName} className="icon-holder">
                  <img
                    className="icon"
                    src={skillIcons[iconName].icon}
                    alt={skillIcons[iconName].title}
                  />
                  <div>{skillIcons[iconName].title}</div>
                </div>
              ))}
            </div>
            <hr />
            <div className="content">{renderAst(markdownRemark.htmlAst)}</div>
          </div>

          <hr />

          <ul className="post-links" style={{}}>
            <li className="previous">
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <LeftArrow className="icon" />
                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li className="next">
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title}
                  <RightArrow className="icon" />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}

BlogPostTemplate.defaultProps = {
  pageContext: {
    previous: null,
    next: null,
  },
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    markdownRemark: PropTypes.shape({
      htmlAst: PropTypes.shape({}).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        icons: PropTypes.arrayOf(PropTypes.string.isRequired),
      }).isRequired,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    previous: PropTypes.shape({
      fields: PropTypes.shape({ slug: PropTypes.string }),
    }),
    next: PropTypes.shape({
      fields: PropTypes.shape({ slug: PropTypes.string }),
    }),
  }),
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        icons
      }
    }
  }
`;
