import Link from 'next/link';
import { useState } from 'react';
import { fonts } from '../../styles/typography';
import { myPages } from '../../utils/myPages';
import DarkMode from '../DarkMode/DarkMode';
import Logo from '../Logo/Logo';

const Nav = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const pages = myPages;

  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <nav>
      <Logo />
      <DarkMode theme={theme} setTheme={setTheme} />
      <div className='hamburger' onClick={() => setOpenDrawer(!openDrawer)}>
        -
      </div>
      {openDrawer && (
        <ul>
          {pages.map((page) => (
            <Link href={page.path} key={page.path}>
              <span>{page.name}</span>
            </Link>
          ))}
        </ul>
      )}
      <style jsx>
        {`
          nav {
            align-items: center;
            backdrop-filter: blur(12px);
            background: var(--navBgColor);
            box-shadow: 0 0 10px 1px var(--box-shadow-light);
            display: flex;
            height: var(--navHeight);
            justify-content: space-between;
            margin: 0 10rem;
            position: fixed;
            width: 100%;
            z-index: 999;
            font-family: ${fonts.orbitron.style.fontFamily};
            padding: 0 2rem;
          }
          ul {
            display: flex;
            gap: 1rem;
            min-width: fit-content;
            margin-left: auto;
          }
          .hamburger {
            z-index: 999;
            display: none;
          }
          @media (max-width: 768px) {
            .hamburger {
              display: inline-block;
            }
            ul {
              position: absolute;
              background: black;
              height: 100vh;
              left: 0;
              right: 0;
              top: 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Nav;
