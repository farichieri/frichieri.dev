import Link from 'next/link';
import { myPages } from '../../utils/myPages';
import DarkMode from '../DarkMode/DarkMode';

export default function Nav({ theme, setTheme }) {
  const pages = myPages;

  return (
    <nav>
      <DarkMode theme={theme} setTheme={setTheme} />
      <ul>
        {pages.map((page) => (
          <Link href={page.path} key={page.path}>
            <span>{page.name}</span>
          </Link>
        ))}
      </ul>
      <style jsx>
        {`
          nav {
            align-items: center;
            backdrop-filter: blur(12px);
            background: var(--navBgColor);
            border-bottom: 1px solid gray;
            display: flex;
            height: var(--navHeight);
            justify-content: center;
            position: fixed;
            width: 100%;
            z-index: 999;
          }
          ul {
            display: flex;
            gap: 1rem;
            padding: 0 2rem;
          }
        `}
      </style>
    </nav>
  );
}
