import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import MainLayout from '../../components/Layout/MainLayout';
import { myProjects } from '../../utils/myProjects';

const Slug = ({ project }: { project: any }) => {
  return (
    <MainLayout withPadding={true}>
      <p className='title'>Project: {project.name} </p>
      <span className='img'>
        <Image src={project.image} alt={project.name} fill />
      </span>
      <div>
        <p>Made with: {project.languages} </p>
        <p>
          See in live:{' '}
          <Link href={project.live} target={'_blank'}>
            <span className='live'>
              <Image src={'/images/live.png'} alt='live' fill />
            </span>
          </Link>
        </p>
        <p>
          Code:{' '}
          <Link href={project.github} target={'_blank'}>
            <span className='github'>
              <Image src={'/images/github.png'} alt='source' fill />
            </span>
          </Link>
        </p>
        <p>
          Back to all projects:
          <Link href={'/projects'}>
            <span className='back'>
              <Image src={'/images/back.png'} alt='back' fill />
            </span>
          </Link>
        </p>
      </div>
      <style jsx>{`
        .title {
          padding: 0.5rem;
        }
        div {
          padding: 1rem;
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
          background: white;
        }
        .live {
          background: none;
        }
        @media and only screen (min-width: 1400px) {
          .img {
            max-width: 1200px;
          }
        }
        @media and only screen (max-width: 500px) {
          .img {
            max-height: 300px;
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
