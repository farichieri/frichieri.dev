import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <Link href={'https://github.com/FARichieri'} target='_blank'>
        <span>By frichieri</span>
      </Link>
      <style jsx>{`
        footer {
          align-items: center;
          box-shadow: 0 0 10px 1px var(--box-shadow-light);
          display: flex;
          height: var(--footerHeight);
          justify-content: center;
          margin-top: auto;
          width: 100%;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
