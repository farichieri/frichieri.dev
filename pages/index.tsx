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
      <div className=' flex items-center justify-center w-full h-full pb-4 flex-col'>
        <div className='rounded-3xl overflow-hidden relative h-auto text-left flex items-center w-full '>
          <div className='z-10 gap-4 p flex-wrap-reverse sm:flex-nowrap flex justify-between w-full p-4'>
            <div className=''>
              <h1 className='text-3xl font-bold'>hey, I&apos;m Fabricio 👋</h1>
              <p className='opacity-70'>
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
                className='flex rounded-full overflow-auto border border-gray-500/50 min-w-[125px] min-h-[125px]'
              />
            </span>
          </div>
        </div>
        <div className='flex flex-col text-left h-full w-full gap-2.5 my-8 '>
          <div>
            <h2 className='font-semibold my-0 py-0'>Featured Projects</h2>
          </div>
          <Projects projects={projects} featured={true} />
          <Link href={'/projects'}>
            <span>See all projects {'>'}</span>
          </Link>
        </div>
        <div className='flex flex-col text-left h-full w-full gap-2.5'>
          <div>
            <h2 className='font-semibold'>Featured Posts</h2>
          </div>
          <Posts posts={posts} />
          <Link href={'/blog'}>
            <span>Read all posts {'>'}</span>
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
