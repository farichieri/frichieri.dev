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
      <ul className='pages'>
        {myPages.map((page) => (
          <li key={page.name}>
            {page.external ? (
              <ExternalLink href={page.path}>
                <span className='link'>{page.name}</span>
              </ExternalLink>
            ) : (
              <Link href={page.path} target={page.target} passHref>
                <span className='link'>{page.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <style jsx>{`
        footer {
          border-top: 1px solid var(--box-shadow-light);
          display: flex;
          margin-top: auto;
          width: 100%;
          margin-top: auto;
          max-width: var(--max-width);
          padding-bottom: 1rem;
        }

        .pages {
          display: flex;
          flex-wrap: wrap;
          text-align: left;
          width: 100%;
          margin: auto;
          padding: 2rem 0 3rem 0;
        }

        li {
          width: 33%;
          padding: 0.5rem 2rem;
        }
        .link {
          transition: 0.3s;
        }
        .link:hover {
          color: var(--textColor);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
