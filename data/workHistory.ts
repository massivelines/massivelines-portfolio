export interface WorkEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationEntry {
  credential: string;
  institution: string;
  period: string;
}

export const workHistory: WorkEntry[] = [
  {
    role: "Senior Frontend Developer",
    company: "The Zebra",
    location: "Austin, TX (Remote)",
    period: "October 2020 – Present",
    bullets: [
      "Develop and maintain a monorepo containing reusable utilities and a shared design system used across the platform",
      "Led the full lifecycle design and launch of policy-link — a standalone authentication component built as an installable package, dropped into any app across the platform",
      "Focused on A/B experimentation to convert browsing users into applicants, shipping experiments on core user flows using Eppo — with a flexible architecture that let product add new variants without code changes",
      "Built integration with QuinStreet for dynamic pages, expanding platform reach and acquisition channels",
      "Improved developer experience for policy-link by building Storybook stories with mocked API requests, eliminating the need to run 9+ local services",
      "Integrated FullStory event tracking across policy-link to enable user journey analysis across multiple apps",
      "Reduced third-party API costs by refactoring policy-link to use a more efficient reconnect flow for login retries",
      "Mentored and onboarded multiple engineers through structured weekly sessions",
      "Currently working on a team focused on rapid AI-assisted prototyping",
    ],
  },
  {
    role: "Frontend Tech Lead",
    company: "Automatize",
    location: "Grapevine, TX",
    period: "April 2019 – June 2020",
    bullets: [
      "Implemented a developer environment using Storybook, ESLint, Prettier, and a custom Webpack config — increasing development speed, build speed, and code reusability",
      "Built custom React hooks to improve application performance and development speed",
      "Formed a testing strategy with Jest and Enzyme for unit and integration testing, Cypress for end-to-end testing, and Git hooks to trigger tests on commits",
      "Connected Storybook with Zeplin to create a single source of truth for designs",
    ],
  },
  {
    role: "Jr. Developer",
    company: "Creative Circle",
    location: "Dallas, TX",
    period: "November 2018 – January 2019",
    bullets: [
      "Developed a web app for an in-store sales team to increase sales and profit",
      "Refactored legacy code to meet current standards",
      "Created a system for cross-browser compatibility with legacy browsers",
    ],
  },
  {
    role: "Front End Web Developer",
    company: "Harbinger",
    location: "Plano, TX",
    period: "June 2018 – October 2018",
    bullets: [
      "Updated legacy React and Webpack code to current standards",
      "Introduced code splitting, hot reloading, and progressive web app best practices",
      "Built user role-based administration and personalization features",
      "Created a React Storybook system for developing and testing new components",
    ],
  },
  {
    role: "Independent Contractor",
    company: "Self-Employed",
    location: "Dallas, TX",
    period: "October 2015 – June 2018",
    bullets: [
      "Freelance frontend development and web design before transitioning to full-time roles",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    credential: "Front End Developer Program",
    institution: "Grow With Google Scholarship",
    period: "January 2018 – March 2018",
  },
  {
    credential: "Front End Development Certificate",
    institution: "freeCodeCamp",
    period: "March 2017 – June 2017",
  },
  {
    credential: "Bachelor of Arts — Art and Technology",
    institution: "University of Texas at Dallas",
    period: "August 2011 – December 2014",
  },
  {
    credential: "Associate of Applied Science",
    institution: "University of Arkansas Community College – Morrilton",
    period: "January 2004 – August 2005",
  },
];
