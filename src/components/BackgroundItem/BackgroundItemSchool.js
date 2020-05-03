import React from 'react';
import PropTypes from 'prop-types';

const BackgroundItemSchool = ({ school, location, dates, degree, study }) => {
  return (
    <div className="background-item__school">
      <div className="background-item__school__header">
        <div className="background-item__school__school">{school}, </div>
        {location && (
          <div className="background-item__school__location">{location}, </div>
        )}
        <div className="background-item__school__dates">{dates}</div>
      </div>
      <div className="background-item__school__content">
        <div className="background-item__school__degree">{degree}</div>
        {study && (
          <div className="background-item__school__study">, {study}</div>
        )}
      </div>
    </div>
  );
};

BackgroundItemSchool.propTypes = {
  school: PropTypes.string.isRequired,
  location: PropTypes.string,
  dates: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  study: PropTypes.string,
};

BackgroundItemSchool.defaultProps = {
  location: null,
  study: null,
};

export default BackgroundItemSchool;
