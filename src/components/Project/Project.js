import React from 'react';
// import Skill from '../Skill';
import PropTypes from 'prop-types';
import Square from '../Square';
import { ExternalLinkLight, GithubBrands } from '../../data/icons';
import skillIcons from '../../data/skillIcons';

const Project = ({ projectData }) => {
  const {
    title,
    image,
    altText,
    description,
    techUsed,
    liveLink,
    codeLink,
  } = projectData;

  return (
    <div className="project">
      <div className="project__image-wrapper">
        <img
          className="project__image-wrapper__image"
          src={image}
          alt={altText}
        />
      </div>

      <div className="project__body">
        <div className="project__body__title">{title}</div>
        <div className="project__body__description">{description}</div>
        <div className="project__body__tech-used">
          <div className="project__body__tech-used__title">Primary Tech:</div>
          <div className="project__body__tech-used__list">
            {techUsed.map(tech => (
              <>
                <div className="project__body__tech-used__item">
                  {skillIcons[tech].title}
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="project__body__link-wrapper">
          <a
            className="project__body__link-wrapper__link"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Square>
              <ExternalLinkLight className="project__body__link-wrapper__link__icon" />
            </Square>
            Live
          </a>
          <a
            className="project__body__link-wrapper__link"
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Square>
              <GithubBrands className="project__body__link-wrapper__link__icon" />
            </Square>
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  projectData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveLink: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
