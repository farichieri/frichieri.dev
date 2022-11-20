import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/Layout/MainLayout';
import { myProjects } from '../../utils/myProjects';

export default function Projects() {
  const projects = myProjects;

  return (
    <MainLayout>
      <div className='projects'>
        {projects.map((project) => (
          <div className='project' key={project.id}>
            <span className='img'>
              <Image alt={project.name} src={project.image} fill />
            </span>
            <div className='cape'>
              <p className='name'>{project.name}</p>
              <Link href={`/projects/${project.slug}`}>
                <p>Details</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .projects {
            width: 100%;
            display: grid;
            height: 100%;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          }
          .project {
            align-items: center;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            height: auto;
            max-height: auto;
          }
          .project:hover > .cape {
            display: flex;
          }
          .cape {
            align-items: center;
            display: none;
            flex-direction: column;
            gap: 1rem;
            height: 100%;
            justify-content: center;
            position: absolute;
            width: 100%;
          }
          .name {
            font-size: 1.5vw;
            z-index: 1;
          }
          .img {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            margin: auto;
          }
          @media and only screen (max-width: 600px) {
            .projects {
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            }
          }
        `}
      </style>
    </MainLayout>
  );
}
