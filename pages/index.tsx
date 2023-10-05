import { Post, allPosts } from "@/.contentlayer/generated";
import { myProjects } from "../utils/myProjects";
import { Projects as ProjectsType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/Layout/MainLayout";
import Posts from "../components/Posts/Posts";
import Projects from "../components/Projects/Projects";

const Page = ({
  posts,
  projects,
}: {
  posts: Post[];
  projects: ProjectsType;
}) => {
  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col items-center justify-center pb-4">
        <div className="relative flex h-auto w-full items-center overflow-hidden rounded-3xl text-left ">
          <div className="z-10 flex w-full flex-wrap-reverse justify-between gap-4 py-4 sm:flex-nowrap">
            <div className="">
              <h1 className="text-4xl font-bold">
                hey, I&apos;m <span className="text-blue-400">Fabricio</span> 👋
              </h1>
              <p className="text-lg opacity-70">
                I&apos;m a Full Stack Web Developer from Argentina, specializing
                in Next.js, React, TypeScript & Tailwind.
              </p>
            </div>
            <span className="">
              <Image
                src={"/images/frichieri.png"}
                alt="Fabricio Richieri"
                height={125}
                width={125}
                className="flex min-h-[125px] min-w-[125px] overflow-auto rounded-full border border-gray-500/10 shadow-md"
              />
            </span>
          </div>
        </div>
        <div className="my-8 flex h-full w-full flex-col  text-left ">
          <div>
            <h2 className="my-0 py-0 font-semibold">Last Projects</h2>
          </div>
          <Projects projects={projects} featured={true} />
          <Link
            href={"/projects"}
            className="opacity-50 duration-300 hover:opacity-100"
          >
            See all projects {">"}
          </Link>
        </div>
        <div className="flex h-full w-full flex-col text-left ">
          <div>
            <h2 className="font-semibold">Last Posts</h2>
          </div>
          <Posts posts={posts} />
          <Link
            href={"/blog"}
            className="my-3  opacity-50 duration-300 hover:opacity-100"
          >
            Read all posts {">"}
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;

export const getStaticProps = async () => {
  const allPostData = allPosts;
  const projects = myProjects;

  return {
    props: { posts: allPostData, projects },
  };
};
