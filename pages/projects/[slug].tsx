import { ArrowLeft, ExternalLink, GitHub, Lock } from "react-feather";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";

import { myProjects, readImages } from "@/utils";
import { Project } from "@/types";
import { Carousel, Technologies } from "@/components";

interface Props {
  project: Project;
  images: string[];
}

const Slug: React.FC<Props> = ({ project, images }) => {
  return (
    <section className="py-14">
      <Link
        href={project.websiteUrl}
        target={"_blank"}
        className="link mb-4 flex w-fit items-center text-4xl"
      >
        {project.name}
      </Link>
      <div className="flex w-full flex-col">
        <span className="">
          <Carousel images={images} />
        </span>

        <Link
          href={project.websiteUrl}
          target={"_blank"}
          className="link mx-auto my-4 flex items-center gap-1 text-lg"
        >
          See it live <ExternalLink className="h-4" />
        </Link>
        <div>
          <h2 className="text-3xl font-semibold">Description:</h2>
          <p>{project.description}</p>
          <br />
          <h2 className="mb-4 text-3xl font-semibold">Technologies:</h2>
          <Technologies technologies={project.technologies} />
          <br />
          <h2 className="flex items-center gap-2">
            Code:
            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target={"_blank"}
                className="p- rounded-full duration-300"
              >
                <GitHub />
              </Link>
            ) : (
              <Lock />
            )}
          </h2>
        </div>
        <Link
          href={"/projects"}
          className="mt-24 flex items-center opacity-50 duration-300 hover:opacity-100"
        >
          <ArrowLeft className="h-4" /> <span>Back to all projects</span>
        </Link>
      </div>
    </section>
  );
};

interface Params extends ParsedUrlQuery {
  pid: string;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths: Array<any> = [];
  myProjects.forEach((project) =>
    paths.push({ params: { slug: project.slug } }),
  );
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const project = myProjects.find((project) => project.slug === slug);
  const images = readImages(slug);

  return {
    props: { project, images },
  };
};

export default Slug;
