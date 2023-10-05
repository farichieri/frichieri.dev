import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/Layout/MainLayout';
import Technologies from '@/components/Technologies/Technologies';

export default function About() {
  const links = [
    {
      name: 'Github',
      url: 'https://github.com/farichieri',
      user: '@farichieri',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/frichieri/',
      user: '@frichieri',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/farichieri',
      user: '@farichieri',
    },
    {
      name: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/frichieri',
      user: '@frichieri',
    },
  ];

  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'Redux',
    'Firebase',
    'Node',
    'MongoDB',
    'HTML',
    'CSS',
  ];

  return (
    <MainLayout>
      <section className='flex flex-col gap-6'>
        <h1 style={{ width: '100%', textAlign: 'left' }}>About</h1>
        <div className='flex flex-col space-y-2'>
          <div className='flex justify-start gap-4 h-full w-full my-4'>
            <span className='flex relative h-36 w-36 rounded-full overflow-auto border border-gray-500/20'>
              <Image
                src={'/images/frichieri.png'}
                alt='Fabricio Richieri'
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                fill
                priority
              />
            </span>
            <div className=''>
              <h1 className='text-blue-400'>Fabricio Richieri</h1>
              <p>Full Stack Web Developer</p>
            </div>
          </div>
          <p>Based in Buenos Aires, Argentina. 🌎</p>
          <p>
            In my free time, I like to do exercises , I go to the gym 💪 and I
            also like to eat healthy 🥦
          </p>
          <p>
            I am currently seeking a position as a Front End or Full Stack
            developer, specializing in React, where I can further strengthen my
            skills, contribute based on my experience, and expand my career in
            an environment that fosters my personal and professional growth.
          </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-semibold text-blue-400 text-base'>Skills</h3>
          <Technologies technologies={technologies} />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold text-blue-400 text-base'>
            Follow me on:
          </h3>
          <ul className='my-0'>
            {links.map((link) => (
              <li key={link.name}>
                - {link.name}:{' '}
                <Link
                  href={link.url}
                  target='_blank'
                  className='opacity-50 hover:opacity-100 duration-300'
                >
                  {link.user}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-baseline gap-4'>
          <h3 className='font-semibold text-blue-400 text-base'>Contact:</h3>
          <a
            href='mailto:frichieri.dev@gmail.com'
            className='opacity-50 hover:opacity-100 duration-300'
          >
            frichieri.dev@gmail.com
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
