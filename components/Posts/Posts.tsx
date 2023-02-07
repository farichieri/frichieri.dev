import Link from 'next/link';
import Date from '../../components/Layout/Date';
import { useEffect, useState } from 'react';

const Posts = ({ posts }: { posts: Array<object> }) => {
  let [actualPosts, setActualPosts] = useState(posts);

  useEffect(() => {
    const fetchViews = () => {
      fetch('/api/views', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((views) => {
          const getBlogViews = (post: any) => {
            const match = views.find((blog: any) => blog.slug === post.id);
            if (match) {
              return match.counter;
            }
          };
          const postsWithViews = actualPosts.map((post) => ({
            ...post,
            views: getBlogViews(post),
          }));
          setActualPosts(postsWithViews);
        });
    };
    fetchViews();
  }, []);

  return (
    <div className='posts-container'>
      {actualPosts.length > 0 ? (
        <table>
          <thead></thead>
          <tbody>
            {actualPosts.map((post: any) => (
              <tr className='post' key={post.id}>
                <td>
                  <Date dateString={post.date} />
                </td>
                <td>
                  <Link href={`blog/${post.id}`}>{post.title}</Link>
                </td>
                <td>
                  <span>{post.views > 0 && <>views: {post.views}</>}</span>
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
          margin: 0.5rem 0;
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
        td:last-child {
          width: 15%;
        }
        td span {
          height: 100%;
          font-size: 80%;
          color: gray;
          font-style: italic;
          justify-content: right;
          min-width: max-content;
        }
        @media screen and (max-width: 500px) {
          .posts-container {
            font-size: 80%;
          }
        }
      `}</style>
    </div>
  );
};

export default Posts;
