import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../components/Layout/MainLayout';
import Posts from '../components/Posts/Posts';
import Projects from '../components/Projects/Projects';
import { getSortedPostData } from '../utils/posts';
import { myProjects } from '../utils/myProjects';

const Page = ({
  posts,
  projects,
}: {
  posts: Array<object>;
  projects: Array<any>;
}) => {
  return (
    <MainLayout withPadding={true}>
      <div className='home'>
        <div className='home-header'>
          <div>
            <h1 className='name'>Fabricio Richieri</h1>
            <p style={{ color: 'gray' }}>
              Hello! I&apos;m Fabricio, and I build Web apps.
            </p>
          </div>
          <span className='img--container'>
            <Image
              src={'/images/frichieri.png'}
              alt='Fabricio Richieri'
              fill
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </span>
        </div>
        <div className='featured-projects'>
          <div className='featured-title'>
            <h2>Featured Projects</h2>
          </div>
          <Projects projects={projects} featured={true} />
          <Link href={'/projects'}>
            <span>See all projects</span>
          </Link>
        </div>
        <div className='featured-posts'>
          <div className='featured-title'>
            <h2>Featured Posts</h2>
          </div>
          <Posts posts={posts} />
          <Link href={'/blog'}>
            <span>Read all posts</span>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .home {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          width: 100%;
          gap: 1.5rem;
          padding-bottom: 2rem;
        }
        h1 {
          font-size: 2rem;
          font-weight: 700;
        }
        h2 {
          font-size: 1.5rem;
          font-weight: 400;
        }
        h3 {
          font-weight: 400;
        }
        p {
          padding: 0.25rem 0;
          margin: 0;
        }
        .home-header {
          text-align: left;
          display: flex;
          height: 100%;
          width: 100%;
          justify-content: space-between;
        }
        .img--container {
          height: 125px;
          width: 125px;
          min-width: 125px;
          min-height: 125px;
          display: flex;
          position: relative;
          border-radius: 50%;
          overflow: auto;
          box-shadow: 0 0 10px 1px var(--box-shadow-light);
          filter: grayscale(0);
          transition: 0.3s;
        }
        .img--container:hover {
          filter: grayscale(1);
        }
        .featured-projects,
        .featured-posts {
          height: 100%;
          width: 100%;
          text-align: left;
        }
        @media screen and (max-width: 500px) {
          h1 {
            font-size: 1.5rem;
          }
          h2 {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default Page;

export const getStaticProps = async () => {
  const allPostData = getSortedPostData();
  const projects = myProjects;

  return {
    props: { posts: allPostData, projects },
  };
};
