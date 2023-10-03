import MainLayout from '../../components/Layout/MainLayout';
import Posts from '../../components/Posts/Posts';
import Searchbar from '../../components/Searchbar/Searchbar';
import { getSortedPostData } from '../../utils/posts';
import { useState } from 'react';

const Blog = ({
  posts,
}: {
  posts: { title: string; id: string; date: string }[];
}) => {
  const [postsState, setPostsState] = useState(posts);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setPostsState(
      posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <MainLayout>
      <h1 style={{ width: '100%', textAlign: 'left' }}>Blog</h1>
      <Searchbar handleSearch={handleSearch} />
      <Posts posts={postsState} />
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
