import React from 'react';
import Project from '.';

export default {
  title: 'Components/Project',
  component: Project,
};

const exampleProject = {
  title: 'React Role Based Admin Dashboard',
  image: 'https://via.placeholder.com/1920x1080?text=ReactRoleBased',
  altText: 'React Role Based Admin Dashboard',
  description:
    'Administration dashboard to assign users to a project and limit their access based on an assigned role. Sint esse enim voluptate ut velit occaecat consectetur deserunt velit qui eu. In eu officia aliquip esse cupidatat nisi.',
  techUsed: ['react', 'typescript', 'router', 'graphql', 'bootstrap'],
  liveLink: 'https://massivelines.github.io/role-based-admin',
  codeLink: 'https://github.com/massivelines/role-based-admin',
};

export const basic = () => <Project projectData={exampleProject} />;
