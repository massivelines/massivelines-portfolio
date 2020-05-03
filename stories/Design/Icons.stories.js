import React from 'react';
import Square from '../../src/components/Square';
import icons from '../../src/data/icons';
import skillIcons from '../../src/data/skillIcons';

export default {
  title: 'Design/Icons',
};

export const Icons = () => (
  <>
    <div>
      <h1>Icons</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(icons).map(key => (
          <div
            style={{
              width: '150px',
              border: 'solid 1px gray',
              marginRight: '20px',
              marginBottom: '20px',
              padding: '10px',
            }}
          >
            <Square>
              <img
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                src={icons[key]}
                alt={key}
              />
            </Square>
            <div>Key: {key}</div>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h1>Skill Icons</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(skillIcons).map(key => (
          <div
            style={{
              width: '150px',
              border: 'solid 1px gray',
              marginRight: '20px',
              marginBottom: '20px',
              padding: '10px',
            }}
          >
            <Square>
              <img
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                src={skillIcons[key].icon}
                alt={skillIcons[key].title}
              />
            </Square>
            <div>Title: {skillIcons[key].title}</div>
            <div>Key: {key}</div>
          </div>
        ))}
      </div>
    </div>
  </>
);
