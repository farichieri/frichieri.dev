export interface Project {
  description: string;
  githubUrl: string;
  id: number;
  image: string;
  technologies: string[];
  name: string;
  slug: string;
  stack: string;
  websiteUrl: string;
}

export interface Projects extends Array<Project> {}

export const Theme = {
  dark: 'dark',
  light: 'light',
} as const;
