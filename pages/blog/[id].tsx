import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Date from '../../components/Layout/Date';
import MainLayout from '../../components/Layout/MainLayout';
import { getAllPostsIds, getPostData } from '../../utils/posts';

const Post = ({ postData }: { postData: any }) => {
  return (
    <MainLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div className='post-header'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h1>{postData.title}</h1>
            {/* <Views /> */}
          </div>
          <span style={{ opacity: '.7' }}>
            <Date dateString={postData.date} />
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className='post-back'>
        <Link
          href={'/blog'}
          className='opacity-50 hover:opacity-100 duration-300'
        >
          {'<'} All Posts
        </Link>
      </div>
      <style jsx>{`
        article {
          text-align: left;
          width: 100%;
        }
        .post-header {
          margin-bottom: 2rem;
        }
        .post-back {
          text-align: left;
          width: 100%;
          margin: 4rem 0;
        }
      `}</style>
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
