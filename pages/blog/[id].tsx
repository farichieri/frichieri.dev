import Head from "next/head";
import Link from "next/link";
import React from "react";

import { Post, allPosts } from "@/.contentlayer/generated";
import { Mdx, Date } from "@/components";

const Post = ({ data }: { data: Post }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <article className="px-2">
        <div className="mb-10">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1 className="text-4xl font-bold text-blue-400">{data.title}</h1>
            {/* <Views /> */}
          </div>
          <span style={{ opacity: ".7" }}>
            <Date dateString={data.date} />
          </span>
        </div>
        <Mdx code={data.body.code} />
      </article>
      <div className="my-10">
        <Link
          href={"/blog"}
          className="opacity-50 duration-300 hover:opacity-100"
        >
          {"<"} All Posts
        </Link>
      </div>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const paths = allPosts.map((doc) => ({
    params: {
      id: doc.slugAsParams,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const data = allPosts.find((doc) => doc.slugAsParams === params.id);
  return {
    props: {
      data,
    },
  };
};
