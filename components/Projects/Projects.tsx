import Image from 'next/image';
import Link from 'next/link';
import { myProjects } from '../../utils/myProjects';

export default function Projects({ featured }: { featured: boolean }) {
  const projects = featured ? myProjects.slice(0, 3) : myProjects;

  return (
    <div className='projects'>
      {projects.map((project) => (
        <div className='project-container'>
          <div className='project-image' key={project.id}>
            <span className='img'>
              <Image alt={project.name} src={project.image} fill />
            </span>
            <div className='cape'>
              <Link href={`/projects/${project.slug}`}>
                <div className='name-container'>
                  <p className='name'>{project.name}</p>
                </div>
              </Link>
            </div>
          </div>
          <div className='project-text'>
            <p>{project.name}</p>
          </div>
        </div>
      ))}
      <style jsx>
        {`
          .projects {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            height: 100%;
            width: 100%;
            gap: 1rem;
            margin: 2rem 0;
          }
          .project-container {
            display: flex;
            flex-direction: row;
            gap: 1rem;
          }
          .project-image {
            align-items: center;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: 0.75rem;
            overflow: auto;
            box-shadow: 0 0 10px 1px var(--box-shadow-light);
            width: 70%;
          }
          .project-image:hover > .cape {
            display: flex;
          }
          .project-image .img {
            width: 100%;
            height: 40vh;
            position: relative;
            display: flex;
            margin: auto;
          }
          .cape {
            align-items: center;
            display: none;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            position: absolute;
            width: 100%;
            background: #000000ed;
            animation: 0.3s normal appear;
          }
          .name-container {
            height: 100%;
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .name {
            font-size: 1.5vw;
            z-index: 1;
          }
          .project-text {
            width: 30%;
            display: flex;
          }

          @keyframes appear {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
