import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <Link href={'https://github.com/FARichieri'} target='_blank'>
        <>By frichieri</>
      </Link>
      <style jsx>{`
        footer {
          align-items: center;
          border-top: 1px solid var(--box-shadow-light);
          display: flex;
          height: var(--footerHeight);
          justify-content: center;
          margin-top: auto;
          width: 100%;
          font-size: 0.8em;
          margin-top: auto;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
