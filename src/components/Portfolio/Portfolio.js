import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Portfolio = ({ data }) => (
  <section id="portfolio" className="portfolio">
    <div className="section-title">Portfolio</div>
    <div className="projects-container">
      {data.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const { thumbnail } = node.frontmatter;
        return (
          <div className="project" key={node.fields.slug}>
            <div className="content">
              <Link to={node.fields.slug}>
                <Img
                  className="image"
                  sizes={thumbnail.childImageSharp.sizes}
                />
              </Link>
              <div className="details">
                <Link className="title" to={node.fields.slug}>
                  {title}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

Portfolio.propTypes = {
  data: PropTypes.arrayOf(
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
};

export default Portfolio;
