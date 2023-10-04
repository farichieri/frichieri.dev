import Link from 'next/link';
import Date from '../../components/Layout/Date';
import { useMemo } from 'react';

const Posts = ({ posts }: { posts: Array<object> }) => {
  // let [actualPosts, setActualPosts] = useState(posts);

  // useEffect(() => {
  //   const fetchViews = () => {
  //     fetch('/api/views', {
  //       method: 'GET',
  //     })
  //       .then((res) => res.json())
  //       .then((views) => {
  //         const getBlogViews = (post: any) => {
  //           const match = views.find((blog: any) => blog.slug === post.id);
  //           if (match) {
  //             return match.counter;
  //           }
  //         };
  //         const postsWithViews = actualPosts.map((post) => ({
  //           ...post,
  //           views: getBlogViews(post),
  //         }));
  //         setActualPosts(postsWithViews);
  //       });
  //   };
  //   fetchViews();
  // }, [posts]);

  const actualPosts = useMemo(() => {
    return posts;
  }, [posts]);

  return (
    <div className='flex my-2 h-full'>
      {actualPosts.length > 0 ? (
        <table className=' border-spacing-y-2 border-separate'>
          <thead></thead>
          <tbody>
            {actualPosts.map((post: any) => (
              <tr className='post' key={post.id}>
                <td>
                  <Date dateString={post.date} />
                </td>
                <td>
                  <Link
                    href={`blog/${post.id}`}
                    className='opacity-50 hover:opacity-100 duration-300'
                  >
                    {post.title}
                  </Link>
                </td>
                <td>
                  {/* <span>{post.views > 0 && <>views: {post.views}</>}</span> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ color: 'gray' }}>No posts found.</p>
      )}
    </div>
  );
};

export default Posts;
