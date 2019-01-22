import React from 'react';
import { Link } from 'gatsby';

const Project = ({ projectData }) => {
  // console.log(projectData);
  const title = projectData.frontmatter.title || projectData.fields.slug;
  const { thumbnail, codeLink, liveLink, icons } = projectData.frontmatter;
  return (
    <div className="project-container">
      <img src={thumbnail} />
      <Link to={projectData.fields.slug}>
        <h4>{title}</h4>
      </Link>
      <p
        dangerouslySetInnerHTML={{
          __html: projectData.frontmatter.description,
        }}
      />
      <div>
        {icons.map(icon => (
          <span key={icon}>{icon}</span>
        ))}
      </div>
      <div className="card-footer">
        <a href={codeLink}>Code Link</a>
        {liveLink && <a href={liveLink}>Live Link</a>}
      </div>
    </div>
  );
};

export default Project;
