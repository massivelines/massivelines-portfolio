import React from 'react';

import Project from './Project';

const Portfolio = ({ data }) => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="section-title">Portfolio</div>
      <div className="projects-container">
        {data.map(({ node }) => (
          <Project key={node.fields.slug} projectData={node} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
