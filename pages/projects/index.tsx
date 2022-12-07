import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/Layout/MainLayout';
import { myProjects } from '../../utils/myProjects';

export default function Projects() {
  const projects = myProjects;

  return (
    <MainLayout withPadding={false}>
      <div className='projects'>
        {projects.map((project) => (
          <div className='project' key={project.id}>
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
        ))}
      </div>
      <style jsx>
        {`
          .projects {
            width: 100%;
            display: grid;
            height: 100%;
            grid-template-columns: repeat(auto-fit, minmax(33vw, 1fr));
          }
          .project {
            align-items: center;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            height: auto;
            max-height: 50vh;
          }
          .project:hover > .cape {
            display: flex;
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
          .img {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            margin: auto;
          }
          @keyframes appear {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }
          @media and only screen (max-width: 1200px) {
            .projects {
              grid-template-columns: repeat(auto-fit, minmax(45vw, 1fr));
            }
          }
          @media and only screen (max-width: 600px) {
            .projects {
              grid-template-columns: repeat(auto-fit, minmax(100vw, 1fr));
            }
          }
        `}
      </style>
    </MainLayout>
  );
}
