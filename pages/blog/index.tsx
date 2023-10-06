import { Post, allPosts } from "@/.contentlayer/generated";
import { useState } from "react";
import dynamic from "next/dynamic";
import MainLayout from "../../components/Layout/MainLayout";
import Searchbar from "../../components/Searchbar/Searchbar";

const Posts = dynamic(() => import("../../components/Posts/Posts"), {
  ssr: false,
});

const Blog = ({ posts }: { posts: Post[] }) => {
  const [postsState, setPostsState] = useState(posts);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setPostsState(
      posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };

  return (
    <MainLayout>
      <h1 style={{ width: "100%", textAlign: "left" }}>Blog</h1>
      <Searchbar handleSearch={handleSearch} />
      <Posts posts={postsState} />
    </MainLayout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPostData = allPosts;
  return {
    props: { posts: allPostData },
  };
};
