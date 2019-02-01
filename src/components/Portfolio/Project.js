import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import skillIcons from '../../data/skillIcons';

const Project = ({ projectData }) => {
  // console.log(projectData);
  const title = projectData.frontmatter.title || projectData.fields.slug;
  const { thumbnail, codeLink, liveLink, icons } = projectData.frontmatter;
  return (
    <div className="project">
      <div className="content">
        <Link to={projectData.fields.slug}>
          <div
            className="image"
            style={{
              backgroundImage: `url(${thumbnail.childImageSharp.sizes.src})`,
            }}
          />
        </Link>
        <div className="details">
          <Link className="title" to={projectData.fields.slug}>
            {title}
          </Link>
          <div className="bar1" />
          <div className="fade-content">
            <p
              dangerouslySetInnerHTML={{
                __html: projectData.frontmatter.description,
              }}
            />
            <div>
              {icons.map(iconName => {
                return (
                  <span key={iconName}>
                    <img
                      className="icon"
                      src={`${skillIcons[iconName].icon}`}
                      alt={skillIcons[iconName].title}
                    />
                  </span>
                );
              })}
            </div>
            <div className="card-footer">
              <Link to={projectData.fields.slug}>More Info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
