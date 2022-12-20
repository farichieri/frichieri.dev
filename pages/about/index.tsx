import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/Layout/MainLayout';

export default function About() {
  return (
    <MainLayout withPadding={true}>
      <section>
        <div>
          <span className='img--container'>
            <Image src={'/images/pxArt.png'} alt='Fabricio Richieri' fill />
          </span>
          <h1>👋 I&rsquo;m Fabricio Richieri,</h1>
          <h1>a Web Developer</h1>
          <h4>from Buenos Aires, Argentina</h4>
        </div>
        <div className='working'>
          <p>
            I&rsquo;m currently working at{' '}
            <Link href={'https://www.sundevs.com/'} target={'_blank'}>
              Sundevs Inc
            </Link>
          </p>
        </div>
        <div className='technologies'>
          <p>
            I have experience working with JavaScript, TypeScript, Node.js,
            Next.js, React.js, Redux.js, HTML, CSS, APIs.
          </p>
        </div>
      </section>
      <style jsx>{`
        section {
          max-width: 600px;
          text-align: center;
        }
        h1,
        h4 {
          padding: 0.1rem;
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
          margin: 0.5rem 0;
        }
      `}</style>
    </MainLayout>
  );
}
