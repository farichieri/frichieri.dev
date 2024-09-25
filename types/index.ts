export interface Project {
  description: string;
  githubUrl: string;
  image: string;
  technologies: string[];
  name: string;
  slug: string;
  stack: string;
  websiteUrl: string;
}

export const Theme = {
  dark: "dark",
  light: "light",
} as const;
