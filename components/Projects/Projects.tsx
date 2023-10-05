import { Projects } from "../../types";
import ExternalLink from "../ExternalLink/ExternalLink";
import Image from "next/image";
import Technologies from "../Technologies/Technologies";

export default function Projects({
  projects,
  featured,
}: {
  projects: Projects;
  featured: boolean;
}) {
  const myProjects = featured ? projects.slice(0, 4) : projects;

  return (
    <div className="mx-auto flex max-w-5xl flex-col divide-y ">
      {myProjects.map((project) => (
        <div key={project.id}>
          <ExternalLink href={project.websiteUrl}>
            <div className="group my-8 flex flex-wrap gap-4 rounded-md border border-transparent p-4 duration-300 hover:border-gray-500/20 hover:bg-blue-300/20 md:flex-nowrap">
              <span className="mx-auto">
                <Image
                  alt={`Project ${project.name}`}
                  src={project.image}
                  width={500}
                  height={282}
                  className="flex rounded-md border shadow-lg dark:shadow-gray-800/20 md:h-[280px] md:w-[500px] md:basis-1/2 "
                />
              </span>
              <div className="flex w-full flex-col items-center justify-start gap-2 text-[var(--textColor)] md:basis-1/2">
                <h4 className="m-0 p-0 font-semibold group-hover:text-blue-400">
                  {project.name}
                </h4>
                <span className="opacity-50 group-hover:opacity-100">
                  {project.description}
                </span>
                <Technologies technologies={project.technologies} />
              </div>
            </div>
          </ExternalLink>
        </div>
      ))}
    </div>
  );
}
