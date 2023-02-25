import Link from 'next/link';
import { myPages } from '../../utils/myPages';

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: JSX.Element;
}) => (
  <a target='_blank' rel='noopener noreferrer' href={href}>
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer>
      <ul>
        {myPages.map((page) => (
          <li key={page.name}>
            {page.external ? (
              <ExternalLink href={page.path}>
                <span>{page.name}</span>
              </ExternalLink>
            ) : (
              <Link href={page.path} target={page.target} passHref>
                <span>{page.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <Link
        className='copyright'
        href={'https://github.com/farichieri'}
        target={'_blank'}
      >
        Designed and developed by frichieri - © 2023
      </Link>
      <style jsx>{`
        footer {
          border-top: 1px solid var(--box-shadow-light);
          display: flex;
          width: 100%;
          margin-top: auto;
          max-width: var(--max-width);
          padding: 2rem;
          flex-direction: column;
          gap: 2rem;
        }
        ul,
        ol {
          list-style: none;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          text-align: left;
          width: 100%;
          margin: auto;
        }
        li {
          width: 25%;
          padding: 0.25rem 1rem;
        }
        span {
          transition: 0.3s;
        }
        span:hover {
          color: var(--textColor);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
