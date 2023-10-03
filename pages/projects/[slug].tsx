import { GetStaticPaths, GetStaticProps } from 'next';
import { myProjects } from '../../utils/myProjects';
import { ParsedUrlQuery } from 'querystring';
import { Project } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/Layout/MainLayout';
import Technologies from '@/components/Technologies/Technologies';

const Slug = ({ project }: { project: Project }) => {
  return (
    <MainLayout>
      <h1 className='font-bold text-xl'>{project.name} </h1>
      <div className='flex w-full flex-col'>
        <span className='w-full flex relative h-auto mx-auto '>
          <Image
            src={project.image}
            alt={project.name}
            height={1200}
            width={900}
            priority
            className='rounded-xl flex mx-auto'
          />
        </span>
        <div>
          <h2>Description:</h2>
          <p>{project.description}</p>
          <br />
          <h2>Made with:</h2>
          <Technologies technologies={project.technologies} />
          <br />
          <h2 style={{ display: 'flex', alignItems: 'center' }}>
            See live:
            <p>
              <Link href={project.websiteUrl} target={'_blank'}>
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
              {project.githubUrl ? (
                <Link href={project.githubUrl} target={'_blank'}>
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
