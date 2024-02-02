import Link from "next/link";
import { useMemo } from "react";

import { Post } from "@/.contentlayer/generated";
import Date from "./Date";

const Posts = ({ posts }: { posts: Post[] }) => {
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
    <div className="my-2 flex h-full">
      {actualPosts.length > 0 ? (
        <table className=" border-separate border-spacing-y-2">
          <thead></thead>
          <tbody>
            {actualPosts.map((post: Post) => (
              <Link
                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 duration-300 hover:border-gray-500/20 hover:bg-slate-500/20 hover:opacity-100"
                href={`blog/${post.slug}`}
                key={post._id}
              >
                <tr className="flex w-full justify-between">
                  <td className="min-w-fit">
                    <Date dateString={post.date} />
                  </td>
                  <td className="w-full pl-10 text-left opacity-50 group-hover:opacity-100 sm:pl-20">
                    {post.title}
                  </td>
                  <td>
                    {/* <span>{post.views > 0 && <>views: {post.views}</>}</span> */}
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ color: "gray" }}>No posts found.</p>
      )}
    </div>
  );
};

export default Posts;
