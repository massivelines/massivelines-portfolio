import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOnScreen from '../../hooks/useOnScreen';

const Section = ({ title, children, className }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref, '-10%');

  return (
    <div className="section">
      <div className="section-wrapper">
        <div className={`bar ${isVisible ? 'bar--raise' : ''}`} ref={ref} />
        <h2 className="section-title">{title}</h2>
        <div className={`section-content ${className || ''}`}>{children}</div>
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  className: undefined,
};

export default Section;
