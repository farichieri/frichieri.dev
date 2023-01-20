import Image from 'next/image';
import Link from 'next/link';
import Form from '../../components/Form/Form';
import MainLayout from '../../components/Layout/MainLayout';

export default function Contact() {
  return (
    <MainLayout withPadding={true}>
      <h1>Contact Me</h1>
      <div className='contact-container'>
        <br />
        <Form />
        <div className='links'>
          <Link
            href={'https://www.linkedin.com/in/frichieri-dev/'}
            target='_blank'
          >
            <span>
              <Image
                src={'/images/linkedin.png'}
                alt='linkedin'
                width={38}
                height={38}
              />
            </span>
          </Link>
          <Link href={'https://github.com/FARichieri'} target='_blank'>
            <span className='github'>
              <Image
                src={'/images/github.png'}
                alt='github'
                width={32}
                height={32}
              />
            </span>
          </Link>
          <Link href='mailto:fabriciorichieri@yahoo.com'>
            <span className='email'>
              <Image
                src='/images/email.png'
                alt='email'
                width={32}
                height={32}
              />
            </span>
          </Link>
        </div>

        <style jsx>{`
          .contact-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
          }
          p {
            text-align: left;
            width: 100%;
          }
          .links {
            display: flex;
            gap: 1rem;
            align-items: center;
            margin-top: 1rem;
          }
          span {
            position: relative;
            display: flex;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
          }
          span img {
            border: none;
            outline: none;
          }
          .github {
            background: white;
          }
          .email {
            margin-left: 0.15rem;
          }
          span:hover {
            filter: brightness(1.5);
          }
        `}</style>
      </div>
    </MainLayout>
  );
}
