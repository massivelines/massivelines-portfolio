import React from 'react';
import PropTypes from 'prop-types';
import Square from '../Square';

import skillIcons from '../../data/skillIcons';

// import XD from '../../content/assets/skills/adobe-xd.svg'

const Skill = ({ skill }) => {
  const { title, icon } = skillIcons[skill];

  return (
    <div className="skill">
      <Square>
        <div className="skill__icon">{icon}</div>
      </Square>
      <div className="skill__title">{title}</div>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default Skill;
