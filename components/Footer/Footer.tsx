import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full flex justify-center items-center border-t max-w-5xl mx-auto border-[var(--box-shadow-light)]'>
      <div className='flex w-full mt-auto max-w-4xl px-8 py-10 gap-8 flex-col'>
        <Link
          className='mx-auto'
          href={'https://github.com/farichieri'}
          target={'_blank'}
        >
          © 2023 Fabricio Richieri
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
