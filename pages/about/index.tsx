import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/Layout/MainLayout';

export default function About() {
  return (
    <MainLayout withPadding={true}>
      <section>
        <h1>About Me</h1>
        <span className='img--container'>
          <Image src={'/images/frichieri.jpg'} alt='Fabricio Richieri' fill />
        </span>
        <br />
        <p>
          I'm a Full Stack Web Developer who loves building fast, beautiful and
          productive web applications.
        </p>
        <br />
        <p>
          I enjoy learning every day and my focus is to grow personally and
          professionally each year.
        </p>
        <br />
        <p>
          I started learning programming with freeCodeCamp in May 2021 till now.
          I graduated from the SoyHenry Bootcamp in May 2022 and reached my
          first developer job in June 2022 and I'm currently working as a
          freelance.
        </p>
        <br />
        <p>
          I published the first version of this website in February 2023 with
          the idea of showing my last projects and to start writing a blog to
          share my path with the community and learn from the process.
        </p>
        <br />
        <p>
          At the moment, I have experience working with JavaScript, TypeScript,
          Next.js, React.js, Redux.js, HTML, CSS, Node.js, Express.js, MongoDB
          and Firebase among other technologies.
        </p>
        <br />
        <p>Follow me on:</p>
        <ul>
          <li>
            - Github:{' '}
            <Link href={'https://github.com/farichieri'} target='_blank'>
              @farichieri
            </Link>
          </li>
          <li>
            - Linkedin:{' '}
            <Link
              href={'https://www.linkedin.com/in/frichieri-dev/'}
              target='_blank'
            >
              @frichieri-dev
            </Link>
          </li>
        </ul>
        <div></div>
      </section>
      <style jsx>{`
        section {
          text-align: left;
        }
        h1 {
          padding: 0.1rem;
          font-size: 2rem;
        }
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 1rem 0;
        }
        .img--container {
          height: 150px;
          width: 150px;
          display: flex;
          position: relative;
          border-radius: 50%;
          overflow: auto;
          box-shadow: 0 0 10px 1px var(--box-shadow);
          margin: 1rem auto;
        }
      `}</style>
    </MainLayout>
  );
}
