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
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'React',
    'Redux',
    'Firebase',
    'Node',
    'MongoDB',
    'Stripe',
    'HTML',
    'CSS',
  ];

  return (
    <MainLayout>
      <section>
        <h1 style={{ width: '100%', textAlign: 'left' }}>About</h1>
        <div className='header'>
          <span className='img--container'>
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
          <div className='text'>
            <h1>Fabricio Richieri</h1>
            <p>Full Stack Web Developer</p>
          </div>
        </div>
        <p>Based in Buenos Aires, Argentina.</p>
        <p>
          In my free time, I like to do exercise. 💪 I lift weights in the gym
          and I do spinning for cardio, I also like to eat healthy 🥦
        </p>
        <div className='flex'>
          <Technologies technologies={technologies} />
        </div>
        <p>Follow me on:</p>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              - {link.name}:{' '}
              <Link href={link.url} target='_blank'>
                {link.user}
              </Link>
            </li>
          ))}
        </ul>
        <div className='header'>
          <p>Contact:</p>
          <a href='mailto:frichieri.dev@gmail.com'>frichieri.dev@gmail.com</a>
        </div>
      </section>
      <style jsx>{`
        section {
          text-align: left;
        }

        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .header {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: left;
          gap: 1rem;
        }
        .header .text {
          display: flex;
          align-items: start;
        }
        .header h1 {
          font-size: 1.5rem;
        }

        .img--container {
          height: 150px;
          width: 150px;
          min-width: 150px;
          display: flex;
          position: relative;
          border-radius: 50%;
          overflow: auto;
          box-shadow: 0 0 10px 1px var(--box-shadow);
          margin: 1rem 0;
          filter: grayscale(0);
          transition: 0.3s;
        }
        .img--container:hover {
          filter: grayscale(1);
        }
        ul,
        ol {
          list-style: none;
        }
      `}</style>
    </MainLayout>
  );
}
