import Image from "next/image";
import Link from "next/link";

import Technologies from "./Technologies";
import { Project } from "@/types";

export default function Projects({
  projects,
  featured,
}: {
  projects: Project[];
  featured: boolean;
}) {
  const myProjects = featured ? projects.slice(0, 3) : projects;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col divide-y ">
      {myProjects.map((project) => (
        <div key={project.slug}>
          <Link href={`/projects/${project.slug}`}>
            <div className="group my-8 flex flex-wrap gap-4 rounded-md border border-transparent p-4 duration-300 hover:border-gray-500/20 hover:bg-slate-500/20 md:flex-nowrap">
              <span className="mx-auto">
                <Image
                  alt={`Project ${project.name}`}
                  src={project.image}
                  width={500}
                  height={282}
                  className="flex w-[500px] rounded-xl border object-fill shadow-lg dark:shadow-gray-800/20 md:h-[282px] md:basis-1/2 "
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
          </Link>
        </div>
      ))}
    </div>
  );
}
