import React, { PureComponent } from 'react';
import { Link, graphql } from 'gatsby';
import rehypeReact from 'rehype-react';

import CodeLinks from './CodeLinks';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import skillIcons from '../data/skillIcons';

import { ReactComponent as LeftArrow } from '../content/assets/icons/arrow-left-light.svg';
import { ReactComponent as RightArrow } from '../content/assets/icons/arrow-right-light.svg';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'code-links': CodeLinks },
}).Compiler;

class BlogPostTemplate extends PureComponent {
  render() {
    console.log(this.props);
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const { location } = this.props;

    return (
      <Layout indexPage={false} location={location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className="template-container">
          <div className="project-content">
            <div className="title">{post.frontmatter.title}</div>
            <div className="icon-container">
              {post.frontmatter.icons.map(iconName => (
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
            <div className="content">{renderAst(post.htmlAst)}</div>
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

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        codeLink
        liveLink
        icons
      }
    }
  }
`;
