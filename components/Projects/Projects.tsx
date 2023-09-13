import Image from 'next/image';
import Link from 'next/link';

export default function Projects({
  projects,
  featured,
}: {
  projects: { id: number; name: string; image: string; slug: string }[];
  featured: boolean;
}) {
  const myProjects = featured ? projects.slice(0, 4) : projects;

  return (
    <div className='projects'>
      {myProjects.map((project) => (
        <div key={project.id} className='project-container'>
          <div className='project-text'>
            <span>{project.name}</span>
          </div>
          <div className='project-image' key={project.id}>
            <span className='img'>
              <Image
                alt={`Project ${project.name}`}
                src={project.image}
                width={500}
                height={500}
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
        </div>
      ))}
      <style jsx>
        {`
          .projects {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            margin: 1.5rem 0;
            border-radius: 5px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .project-container {
            display: flex;
            flex-direction: column;
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
            height: auto;
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
            color: whitesmoke;
          }
          .project-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            text-overflow: ellipsis;
            font-weight: 500;
            font-size: 20px;
          }

          @media screen and (max-width: 768px) {
            .projects {
            display: flex;
          }
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
