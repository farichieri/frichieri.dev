import Link from 'next/link';
import { myPages } from '../../utils/myPages';

const Footer = () => {
  return (
    <footer>
      <ul className='pages'>
        {myPages.map((page) => (
          <li key={page.name}>
            <Link href={page.path}>
              <span className='link'>{page.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        footer {
          align-items: center;
          border-top: 1px solid var(--box-shadow-light);
          display: flex;
          justify-content: center;
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
          max-width: 600px;
          margin: auto;
          padding: 2rem 0 3rem 0;
        }

        li {
          width: 33%;
          padding: 0.5rem 3rem;
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
