import { myProjects } from '../../utils/myProjects';

export default function Projects() {
  const projects = myProjects;

  return (
    <section>
      <div className='projects'>
        {projects.map((project) => (
          <div className='project'>
            <p>{project.name}</p>
            <img src={project.image} />
          </div>
        ))}
      </div>
      <style jsx>
        {`
          section {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .projects {
            width: 100%;
            display: grid;
            grid-auto-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
          .project {
          }
          img {
            height: 100px;
            width: 100px;
          }
        `}
      </style>
    </section>
  );
}
