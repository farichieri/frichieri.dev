import Image from 'next/image';
import Link from 'next/link';

export default function Projects({
  projects,
  featured,
}: {
  projects: { id: number; name: string; image: string; slug: string }[];
  featured: boolean;
}) {
  const myProjects = featured ? projects.slice(0, 3) : projects;

  return (
    <div className='projects'>
      {myProjects.map((project) => (
        <div key={project.id} className='project-container'>
          <div className='project-image' key={project.id}>
            <span className='img'>
              <Image
                alt={`Project ${project.name}`}
                src={project.image}
                fill
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
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
            <Link href={`/projects/${project.slug}`}>See project</Link>
          </div>
        </div>
      ))}
      <style jsx>
        {`
          .projects {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            gap: 1.5rem;
            margin: 2rem 0;
          }
          .project-container {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            height: 100%;
            width: 100%;
            align-items: center;
          }
          .project-image {
            align-items: center;
            border-radius: 0.5rem;
            border: 2px solid var(--box-shadow-light);
            box-shadow: 0 0 10px 1px var(--box-shadow-light);
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: auto;
            position: relative;
            height: ${featured ? '216px' : '30vh'};
            width: ${featured ? '384px' : '80vw'};
          }
          .project-image:hover > .cape {
            display: flex;
          }
          .project-image .img {
            display: flex;
            height: 100%;
            margin: auto;
            position: relative;
            width: 100%;
          }
          .cape {
            align-items: center;
            animation: 0.3s normal appear;
            background: #000000ed;
            display: none;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            position: absolute;
            width: 100%;
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
            font-size: 1rem;
            z-index: 1;
          }
          .project-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-height: ${featured ? '150px' : '100%'};
            text-align: left;
            height: ${featured ? '15vh' : '30vh'};
            width: ${featured ? '10vw' : '20vw'};
          }

          @media screen and (max-width: 768px) {
            .project-image {
              width: 70vw;
              height: 40vw;
            }

            .project-text {
              width: 30vw;
              height: 40vw;
            }
          }

          @media screen and (max-width: 500px) {
            .projects {
              gap: 0.5rem;
              font-size: 80%;
            }
            .project-container {
              gap: 1rem;
            }
            .project-image {
              width: 70vw;
            }
            .project-text {
              width: 20vw;
              height: 20vh;
            }
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
