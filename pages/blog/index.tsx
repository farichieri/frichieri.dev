import Link from 'next/link';
import MainLayout from '../../components/Layout/MainLayout';
import { getSortedPostData } from '../../utils/posts';

const Blog = ({ posts }: { posts: Array<object> }) => {
  return (
    <MainLayout withPadding={true}>
      <div className='posts-container'>
        {posts.map((post: any) => (
          <Link href={`blog/${post.id}`}>
            <div className='post'>
              <p>{post.date}</p>
              <p>{post.title}</p>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .post {
          display: flex;
          gap: 1rem;
        }
      `}</style>
    </MainLayout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPostData = getSortedPostData();

  return {
    props: { posts: allPostData },
  };
};
