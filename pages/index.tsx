import Image from 'next/image';
import Link from 'next/link';
import Date from '../components/Layout/Date';
import MainLayout from '../components/Layout/MainLayout';
import { myProjects } from '../utils/myProjects';
import { getSortedPostData } from '../utils/posts';

const Page = ({ posts }: { posts: Array<object> }) => {
  return (
    <MainLayout withPadding={true}>
      <div className='home'>
        <div className='home-header'>
          <div>
            <h1 className='name'>Fabricio Richieri</h1>
            <p className='build'>Web Developer</p>
            <div className='description'>
              <p>Welcome to my personal website!</p>
            </div>
          </div>
          <div>
            <span className='img--container'>
              <Image
                src={'/images/frichieri.jpg'}
                alt='Fabricio Richieri'
                fill
              />
            </span>
          </div>
        </div>
        <div className='featured-projects'>
          <div className='featured-title'>
            <h1>Featured Projects</h1>
            <Image
              alt='star-icon'
              src={'/images/star.png'}
              width={25}
              height={25}
            />
          </div>
          <div className='projects'>
            {myProjects.slice(0, 3).map((project) => (
              <div className='project' key={project.id}>
                <span className='img'>
                  {/* <Image alt={project.name} src={project.image} fill /> */}
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
          <Link href={'/projects'}>
            <span className='see-all'>See all projects</span>
          </Link>
        </div>
        <div className='featured-posts'>
          <div className='featured-title'>
            <h1>Featured Posts</h1>
            <Image
              alt='star-icon'
              src={'/images/star.png'}
              width={25}
              height={25}
            />
          </div>
          <table className='posts-table'>
            <thead></thead>
            <tbody>
              {posts.map((post: any) => (
                <tr className='post' key={post.id}>
                  <td>
                    <Date dateString={post.date} />
                  </td>
                  <td>
                    <Link href={`blog/${post.id}`}>{post.title}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link href={'/blog'}>
            <span className='see-all'>Read all posts</span>
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
          font-size: 3rem;
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
          display: flex;
          position: relative;
          border-radius: 50%;
          overflow: auto;
          box-shadow: 0 0 10px 1px var(--box-shadow);
          margin: 0.5rem 0;
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
        .see-all {
          transition: 0.3s;
        }
        .see-all:hover {
          color: var(--textColor);
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
