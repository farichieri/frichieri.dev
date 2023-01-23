import MainLayout from '../../components/Layout/MainLayout';
import Posts from '../../components/Posts/Posts';
import { getSortedPostData } from '../../utils/posts';

const Blog = ({ posts }: { posts: Array<object> }) => {
  return (
    <MainLayout withPadding={true}>
      <h1 style={{ width: '100%', textAlign: 'left' }}>Blog</h1>
      <Posts posts={posts} />
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
