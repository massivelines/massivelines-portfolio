import React from 'react';
import PropTypes from 'prop-types';

const Background = ({ education, employment }) => (
  <section className="background">
    <h3>Background</h3>

    <div className="employment-container">
      <h4>Employment</h4>
      {employment.map(empData => (
        <div key={empData.title}>
          <div>{empData.title}</div>
          <div>{empData.location}</div>
          <div>{empData.dates}</div>
          <div>
            {empData.bullets.map(bullet => (
              <div key={bullet}>{bullet}</div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="education-container">
      <h4>Education</h4>
      {education.map(eduData => (
        <div key={eduData.title}>
          <div>{eduData.title}</div>
          <div>{eduData.location}</div>
          <div>{eduData.dates}</div>
        </div>
      ))}
    </div>
  </section>
);

Background.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      dates: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  employment: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      dates: PropTypes.string.isRequired,
      bullets: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Background;
