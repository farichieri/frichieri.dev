import fs from "fs";
import path from "path";

export const readImages = (projectSlug: string): string[] => {
  const imagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "projects",
    projectSlug,
  );
  const imageNames = fs.readdirSync(imagesDirectory);

  return imageNames.map((name) => `/images/projects/${projectSlug}/${name}`);
};
