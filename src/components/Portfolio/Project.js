import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import gatsby from '../../content/assets/skills/gatsby.svg';
import react from '../../content/assets/skills/react.svg';
import typescript from '../../content/assets/skills/typescript.svg';
import sass from '../../content/assets/skills/sass.svg';
import javascript from '../../content/assets/skills/javascript.svg';
import express from '../../content/assets/skills/express.svg';
import node from '../../content/assets/skills/nodejs-icon.svg';
import gulp from '../../content/assets/skills/gulp.svg';
import requirejs from '../../content/assets/skills/require-js.svg';
import HTML5 from '../../content/assets/skills/html5.svg';
import CSS3 from '../../content/assets/skills/css3.svg';
import bootstrap from '../../content/assets/skills/bootstrap-4.svg';
import foundation from '../../content/assets/skills/foundation.svg';
import router from '../../content/assets/skills/react-router.svg';
import apollo from '../../content/assets/skills/apollo.svg';
import graphql from '../../content/assets/skills/graphql.svg';

const skillIcons = {
  gatsby,
  react,
  typescript,
  sass,
  javascript,
  express,
  node,
  gulp,
  requirejs,
  HTML5,
  CSS3,
  bootstrap,
  foundation,
  router,
  apollo,
  graphql,
};

const Project = ({ projectData }) => {
  console.log(projectData);
  const title = projectData.frontmatter.title || projectData.fields.slug;
  const { thumbnail, codeLink, liveLink, icons } = projectData.frontmatter;
  return (
    <div
      className="project"
      style={{
        backgroundImage: `url(${thumbnail.childImageSharp.sizes.src})`,
      }}
    >
      {/* <Img
        className="thumbnail"
        sizes={projectData.frontmatter.thumbnail.childImageSharp.sizes}
      /> */}
      <div className="content">
        <div className="test">
          <Link to={projectData.fields.slug}>
            <div className="title">{title}</div>
          </Link>
          <div className="bar1" />
        </div>
        <div className="test2">
          <div className="fade-content">
            <p
              dangerouslySetInnerHTML={{
                __html: projectData.frontmatter.description,
              }}
            />
            <div>
              {icons.map(icon => (
                <span key={icon}>
                  <img className="icon" src={`${skillIcons[icon]}`} />
                </span>
              ))}
            </div>
            <div className="card-footer">
              <Link to={projectData.fields.slug}>More Info</Link>
            </div>
          </div>
        </div>
        <div className="bar1" />
      </div>
    </div>
  );
};

export default Project;
