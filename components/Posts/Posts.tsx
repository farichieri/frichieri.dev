import Link from 'next/link';
import Date from '../../components/Layout/Date';

const Posts = ({ posts }: { posts: Array<object> }) => {
  return (
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
      <style jsx>{`
        .posts-container {
          height: 100%;
          display: flex;
          margin: 1rem 0;
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
    </div>
  );
};

export default Posts;
