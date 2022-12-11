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
          border-top: 1px solid var(--box-shadow-light);
          display: flex;
          height: var(--footerHeight);
          justify-content: center;
          margin-top: auto;
          width: 100%;
        }
        span {
          font-size: 0.8em;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
