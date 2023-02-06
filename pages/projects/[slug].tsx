import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import MainLayout from '../../components/Layout/MainLayout';
import { myProjects } from '../../utils/myProjects';

const Slug = ({ project }: { project: any }) => {
  return (
    <MainLayout withPadding={true}>
      <h1 style={{ width: '100%', textAlign: 'left' }}>
        Project: {project.name}{' '}
      </h1>
      <div className='project-container'>
        <span className='img'>
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes='(max-width: 1920px) 100vw,
              (max-width: 960px) 50vw,
              33vw'
            priority
          />
        </span>
        <div>
          <h2>Description:</h2>
          <p>{project.description}</p>
          <br />
          <h2>Made with:</h2>
          <p> {project.languages} </p>
          <br />
          <h2 style={{ display: 'flex', alignItems: 'center' }}>
            See in live:
            <p>
              <Link href={project.live} target={'_blank'}>
                <span className='live'>
                  <Image
                    src={'/images/live.png'}
                    alt='live'
                    height={30}
                    width={30}
                  />
                </span>
              </Link>
            </p>
          </h2>
          <br />
          <h2 style={{ display: 'flex', alignItems: 'center' }}>
            Code:
            <p>
              {project.github ? (
                <Link href={project.github} target={'_blank'}>
                  <span className='github'>
                    <Image
                      src={'/images/github.png'}
                      alt='source'
                      height={30}
                      width={30}
                    />
                  </span>
                </Link>
              ) : (
                <Image
                  src={'/images/hidden.png'}
                  alt='source'
                  height={30}
                  width={30}
                />
              )}
            </p>
          </h2>
          <br />
        </div>
        <Link href={'/projects'}>{'<'} Back to all projects</Link>
      </div>

      <style jsx>{`
        .project-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        div {
          padding: 1rem 0;
        }
        .img {
          align-items: center;
          border-radius: 1rem;
          border: 2px solid var(--box-shadow-light);
          box-shadow: 0 0 10px 1px var(--box-shadow-light);
          height: 400px;
          max-width: 800px;
          overflow: auto;
          position: relative;
          width: 100%;
        }
        p {
          display: flex;
          margin: 0.5rem;
          align-items: center;
          gap: 0.5rem;
        }
        .github,
        .live,
        .back {
          position: relative;
          display: flex;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          transition: 0.3s;
          background: white;
        }
        .github:hover,
        .live:hover {
          transform: scale(1.1);
        }
        .live {
          background: none;
        }
        @media and only screen (max-width: 768px) {
          .img {
            max-height: 50vw;
          }
        }
        @media and only screen (max-width: 500px) {
          .img {
            max-height: 50vw;
          }
        }
      `}</style>
    </MainLayout>
  );
};

interface Params extends ParsedUrlQuery {
  pid: string;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths: Array<any> = [];
  myProjects.forEach((project) =>
    paths.push({ params: { slug: project.slug } })
  );
  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const project = myProjects.find((project) => project.slug === slug);
  return {
    props: { project },
  };
};

export default Slug;
