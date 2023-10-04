import { getSortedPostData } from '../utils/posts';
import { myProjects } from '../utils/myProjects';
import { Projects as ProjectsType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../components/Layout/MainLayout';
import Posts from '../components/Posts/Posts';
import Projects from '../components/Projects/Projects';

const Page = ({
  posts,
  projects,
}: {
  posts: Array<object>;
  projects: ProjectsType;
}) => {
  return (
    <MainLayout>
      <div className='flex items-center justify-center w-full h-full pb-4 flex-col'>
        <div className='rounded-3xl overflow-hidden relative h-auto text-left flex items-center w-full '>
          <div className='z-10 gap-4 p flex-wrap-reverse sm:flex-nowrap flex justify-between w-full p-4'>
            <div className=''>
              <h1 className='text-4xl font-bold'>
                hey, I&apos;m <span className='text-blue-400'>Fabricio</span> 👋
              </h1>
              <p className='opacity-70 text-lg'>
                I&apos;m a Full Stack Web Developer from Argentina, specializing
                in React, Next.js & TypeScript.
              </p>
            </div>
            <span className=''>
              <Image
                src={'/images/frichieri.png'}
                alt='Fabricio Richieri'
                height={125}
                width={125}
                className='flex rounded-full overflow-auto border border-gray-500/10 shadow-md min-w-[125px] min-h-[125px]'
              />
            </span>
          </div>
        </div>
        <div className='flex flex-col text-left h-full w-full  my-8 '>
          <div>
            <h2 className='font-semibold my-0 py-0'>Last Projects</h2>
          </div>
          <Projects projects={projects} featured={true} />
          <Link
            href={'/projects'}
            className='opacity-50 hover:opacity-100 duration-300'
          >
            See all projects {'>'}
          </Link>
        </div>
        <div className='flex flex-col text-left h-full w-full '>
          <div>
            <h2 className='font-semibold'>Last Posts</h2>
          </div>
          <Posts posts={posts} />
          <Link
            href={'/blog'}
            className='opacity-50 hover:opacity-100 duration-300 my-3'
          >
            Read all posts {'>'}
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;

export const getStaticProps = async () => {
  const allPostData = getSortedPostData();
  const projects = myProjects;

  return {
    props: { posts: allPostData, projects },
  };
};
