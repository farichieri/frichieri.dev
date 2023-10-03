import { Projects } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import Technologies from '../Technologies/Technologies';

export default function Projects({
  projects,
  featured,
}: {
  projects: Projects;
  featured: boolean;
}) {
  const myProjects = featured ? projects.slice(0, 4) : projects;

  return (
    <div className='flex max-w-5xl mx-auto flex-col divide-y '>
      {myProjects.map((project) => (
        <div key={project.id}>
          <Link
            className='flex flex-wrap sm:flex-nowrap rounded-3xl my-2 p-4 gap-4 hover:bg-slate-500/20'
            href={`/projects/${project.slug}`}
          >
            <Image
              alt={`Project ${project.name}`}
              src={project.image}
              width={500}
              height={500}
              className='border rounded-xl flex sm:basis-1/2'
            />
            <div className='text-[var(--textColor)] gap-2 w-full sm:basis-1/2 flex flex-col justify-start items-center'>
              <h4 className='font-semibold p-0 m-0'>{project.name}</h4>
              <span>{project.description}</span>
              <Technologies technologies={project.technologies} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
