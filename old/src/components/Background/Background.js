import React from 'react';
import PropTypes from 'prop-types';

const Background = ({ education, employment }) => (
  <section id="background" className="background">
    <div className="section-title">Background</div>

    <div className="employment-container">
      <h4>Employment</h4>
      {employment.map((empData) => (
        <div key={empData.title} className="job-container">
          <div className="title">{empData.title}</div>
          <div className="location">{empData.location}</div>
          <div className="dates">{empData.dates}</div>
          <ul className="bullets-container">
            {empData.bullets.map((bullet) => (
              <li key={bullet} className="bullet">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="education-container">
      <h4>Education</h4>
      {education.map((eduData) => (
        <div key={eduData.title} className="school-container">
          <div className="title">{eduData.title}</div>
          <div className="location">{eduData.location}</div>
          <div className="dates">{eduData.dates}</div>
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
