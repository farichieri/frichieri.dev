import Link from 'next/link';
import Date from '../../components/Layout/Date';
import MainLayout from '../../components/Layout/MainLayout';
import { getSortedPostData } from '../../utils/posts';

const Blog = ({ posts }: { posts: Array<object> }) => {
  return (
    <MainLayout withPadding={true}>
      <div className='posts-container'>
        <table>
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
      </div>
      <style jsx>{`
        .posts-container {
        }
        .posts-container,
        table,
        tbody {
          width: 100%;
        }
        table {
        }
        tr {
          text-align: left;
        }
        td {
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
