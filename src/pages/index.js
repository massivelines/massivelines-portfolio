import React from 'react';
// import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Skill from '../components/Skill';
import Project from '../components/Project';
import {
  BackgroundItemSchool,
  BackgroundItemWork,
} from '../components/BackgroundItem';

import projects from '../data/projects';
import education from '../data/education';
import employment from '../data/employment';

const coreSkills = [
  'html',
  'css',
  'javascript',
  'react',
  // 'redux',
  'sass',
  'node',
  // 'mySQL',
  'graphql',
  'gatsby',
  'typescript',
  'webpack',
  'gulp',
  'photoshop',
];

const IndexPage = () => (
  <Layout homePage>
    <Section title="About" className="about">
      <div>
        <p>
          I am a front end developer and web designer based in Dallas, Texas. I
          take pride in code that is easy to read, well documented, and
          efficient behind the scenes. I always strive to have modern, pixel
          perfect, and user-friendly UX and UI designs.
        </p>
        <p>
          Most of my coding skills and knowledge are self-taught through online
          training courses, I change providers as needed for new challenges and
          always strive to learn new tech, workflows, and best practices.
        </p>
        <p>
          I love anything related to arts or pixels. My background before
          learning to code was in animation and graphic design.
        </p>
      </div>
      <div className="about__skills">
        <div className="title">Core Skills Include:</div>
        <div className="about__skills__list">
          {coreSkills.map(item => (
            <Skill key={item} skill={item} />
          ))}
        </div>
      </div>
    </Section>
    <Section title="Portfolio / Projects" className="projects">
      {projects.map(data => (
        <Project projectData={data} />
      ))}
    </Section>
    <Section title="Professional Experience">
      <div>
        {employment.map(work => (
          <BackgroundItemWork
            key={work.company}
            company={work.company}
            companyDescription={work.companyDescription}
            title={work.title}
            positionDescription={work.positionDescription}
            subCompany={work.subCompany}
            location={work.location}
            dates={work.dates}
            bullets={work.bullets}
          />
        ))}
      </div>
    </Section>
    <Section title="Education">
      <div>
        {education.map(edu => (
          <BackgroundItemSchool
            key={edu.school}
            school={edu.school}
            location={edu.location}
            dates={edu.dates}
            degree={edu.degree}
            study={edu.study}
          />
        ))}
      </div>
    </Section>
  </Layout>
);

export default IndexPage;

// {/* <Layout>
//   <SEO title="Home" />
//   <h1>Hi people</h1>
//   <p>Welcome to your new Gatsby site.</p>
//   <p>Now go build something great.</p>
//   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//     <Image />
//   </div>
//   <Link to="/page-2/">Go to page 2</Link>
// </Layout> */}
