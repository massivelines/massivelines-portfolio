import React from 'react';
import PropTypes from 'prop-types';

const BackgroundItemWork = ({
  company,
  subCompany,
  location,
  dates,
  companyDescription,
  title,
  positionDescription,
  bullets,
}) => {
  return (
    <div className="background-item__work">
      <div className="background-item__work__header">
        <div className="background-item__work__company">{company},</div>
        {subCompany && (
          <div className="background-item__work__subCompany">
            &#40;{subCompany}&#41;
          </div>
        )}
        <div className="background-item__work__location">{location}</div>
        <div className="background-item__work__dates">{dates}</div>
        {companyDescription && (
          <div className="background-item__work__company-description">
            {companyDescription}
          </div>
        )}
      </div>
      <div className="background-item__work__content">
        <div className="background-item__work__title">{title}</div>
        {positionDescription && (
          <div className="background-item__work__position-description">
            {positionDescription}
          </div>
        )}
        <ul className="background-item__work__bullets-container">
          {bullets &&
            bullets.map(point => (
              <li key={point} className="background-item__work__bullet">
                {point}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

BackgroundItemWork.propTypes = {
  company: PropTypes.string.isRequired,
  subCompany: PropTypes.string,
  location: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  companyDescription: PropTypes.string,
  title: PropTypes.string.isRequired,
  positionDescription: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

BackgroundItemWork.defaultProps = {
  subCompany: null,
  companyDescription: null,
  positionDescription: null,
};
export default BackgroundItemWork;
