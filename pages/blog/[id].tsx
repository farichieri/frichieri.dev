import Head from 'next/head';
import React from 'react';
import Date from '../../components/Layout/Date';
import MainLayout from '../../components/Layout/MainLayout';
import { getAllPostsIds, getPostData } from '../../utils/posts';

const Post = ({ postData }: { postData: any }) => {
  console.log({ postData });
  return (
    <MainLayout withPadding={true}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <p>{postData.title}</p>
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </MainLayout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
