import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Github } from '../content/assets/icons/github-brands.svg';
import { ReactComponent as Ext } from '../content/assets/icons/external-link-light.svg';

const CodeLinks = ({ code, live }) => (
  <div className="code-links">
    {live && (
      <a href={live} target="_blank" rel="noopener noreferrer">
        <Ext className="icon" />
        Live
      </a>
    )}
    <a href={code} target="_blank" rel="noopener noreferrer">
      <Github className="icon" />
      Code
    </a>
  </div>
);

CodeLinks.defaultProps = {
  code: undefined,
  live: undefined,
};

CodeLinks.propTypes = {
  code: PropTypes.string,
  live: PropTypes.string,
};

export default CodeLinks;
