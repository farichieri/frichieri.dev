import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "react-feather";

import { Post, allPosts } from "@/.contentlayer/generated";
import { Projects as ProjectsType } from "@/types";
import { myProjects } from "@/utils/";
import { ExternalLink, Projects } from "@/components/";

const Posts = dynamic(() => import("../components/Posts"), {
  ssr: false,
});

const Page = ({
  posts,
  projects,
}: {
  posts: Post[];
  projects: ProjectsType;
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center pb-24">
      <div className="relative flex h-auto w-full items-center overflow-hidden rounded-3xl text-left ">
        <div className="z-10 flex w-full flex-wrap-reverse justify-between gap-4 py-4 sm:flex-nowrap">
          <div className="">
            <h1 className="text-4xl font-bold">
              hey, I&apos;m <span className="text-blue-400">Fabricio</span> 👋
            </h1>
            <p className="text-lg opacity-70">
              I&apos;m a 💻 Full Stack JavaScript Developer from Buenos Aires,
              Argentina.
            </p>
            <p className="text-lg">
              <span className="opacity-70">
                Do you have a project in mind? Hire me on
              </span>{" "}
              <ExternalLink
                className="font-semibold text-green-400 duration-300 hover:text-green-600 hover:underline"
                href="https://www.upwork.com/freelancers/frichieri"
              >
                Upwork
              </ExternalLink>
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
          className="flex items-center opacity-50 duration-300 hover:opacity-100"
        >
          See all projects <ArrowRight className="h-4" />
        </Link>
      </div>
      <div className="flex h-full w-full flex-col text-left">
        <div>
          <h2 className="font-semibold">Last Posts</h2>
        </div>
        <Posts posts={posts} />
        <Link
          href={"/blog"}
          className="mt-3 flex items-center opacity-50 duration-300 hover:opacity-100"
        >
          Read all posts <ArrowRight className="h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Page;

export const getStaticProps = async () => {
  const allPostData = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );
  const projects = myProjects;

  return {
    props: { posts: allPostData, projects },
  };
};
