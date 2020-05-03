import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ children }) => {
  return (
    <div className="square">
      <div className="square-content">{children}</div>
    </div>
  );
};

Square.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Square;
