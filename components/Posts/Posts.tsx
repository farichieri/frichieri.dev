import Link from 'next/link';
import Date from '../../components/Layout/Date';

const Posts = ({ posts }: { posts: Array<object> }) => {
  console.log({ posts });
  return (
    <div className='posts-container'>
      {posts.length > 0 ? (
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
      ) : (
        <p style={{ color: 'gray' }}>No posts found.</p>
      )}
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
          border-collapse: separate;
          border-spacing: 0 0.5rem;
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
