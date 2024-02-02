import { useState } from "react";
import dynamic from "next/dynamic";

import { Post, allPosts } from "@/.contentlayer/generated";
import { Searchbar } from "@/components";

const Posts = dynamic(() => import("../../components/Posts"), {
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
    <>
      <h1 style={{ width: "100%", textAlign: "left" }}>Blog</h1>
      <Searchbar handleSearch={handleSearch} />
      <Posts posts={postsState} />
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPostData = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );
  return {
    props: { posts: allPostData },
  };
};
