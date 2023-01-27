import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../components/Layout/MainLayout';
import Posts from '../components/Posts/Posts';
import Projects from '../components/Projects/Projects';
import { getSortedPostData } from '../utils/posts';
import { myProjects } from '../utils/myProjects';

const Page = ({ posts }: { posts: Array<object> }) => {
  return (
    <MainLayout withPadding={true}>
      <div className='home'>
        <div className='home-header'>
          <div>
            <h1 className='name'>Fabricio Richieri</h1>
            <p className='build'>Full Stack Web Developer</p>
            <div className='description'>
              <p style={{ color: 'gray' }}>
                Building fast, beautiful and productive web apps.
              </p>
            </div>
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
            <h1>Featured Projects</h1>
          </div>
          <Projects projects={myProjects} featured={true} />
          <Link href={'/projects'}>
            <span>See all projects</span>
          </Link>
        </div>
        <div className='featured-posts'>
          <div className='featured-title'>
            <h1>Featured Posts</h1>
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
        }
        .name {
          font-size: 2rem;
          font-weight: 700;
        }
        .build {
          font-size: 1.5rem;
          font-weight: 400;
        }
        .home-header {
          text-align: left;
          display: flex;
          height: 100%;
          width: 100%;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .description {
          padding: 1rem 0;
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
          box-shadow: 0 0 10px 1px var(--box-shadow);
        }
        .featured-projects,
        .featured-posts {
          height: 100%;
          width: 100%;
          text-align: left;
          margin: 1.5rem 0;
        }

        .featured-title {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .posts-table {
          margin: 1rem 0;
          width: 100%;
        }
      `}</style>
    </MainLayout>
  );
};

export default Page;

export const getStaticProps = async () => {
  const allPostData = getSortedPostData();

  return {
    props: { posts: allPostData },
  };
};

// Should implement getStaticProps for projects
