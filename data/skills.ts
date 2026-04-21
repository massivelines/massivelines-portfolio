export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Core",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Framework & Build",
    items: ["React", "Next.js", "Redux", "Sass / CSS Modules", "Storybook"],
  },
  {
    category: "Data & APIs",
    items: ["GraphQL", "REST"],
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library"],
  },
  {
    category: "Tooling & Experimentation",
    items: ["Eppo", "FullStory"],
  },
  {
    category: "Design",
    items: ["Figma"],
  },
];
