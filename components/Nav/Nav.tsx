import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { myPages } from '../../utils/myPages';
import DarkMode from '../DarkMode/DarkMode';

const Nav = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const handleMenu = () => {
    setHamburgerActive(!hamburgerActive);
  };

  const route = useRouter();

  return (
    <nav>
      <div className='nav-content'>
        <div
          onClick={handleMenu}
          className={`hamburger ${hamburgerActive && 'active'}`}
        >
          <div className='bar'></div>
        </div>
        <ul className={`${hamburgerActive && 'active'}`}>
          {myPages.map((page) => (
            <li
              key={page.name}
              className={route.pathname === page.path ? 'this-route' : ''}
            >
              <Link href={page.path} onClick={handleMenu}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
        <DarkMode theme={theme} setTheme={setTheme} />
      </div>
      <style jsx>
        {`
          nav {
            align-items: center;
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--box-shadow-light);
            display: flex;
            height: var(--navHeight);
            justify-content: space-between;
            position: fixed;
            width: 100%;
            z-index: 999;
            padding: 2rem;
            max-width: var(--max-width);
          }
          .nav-content {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin: auto;
            align-items: center;
            height: 100%;
          }

          .this-route {
            text-shadow: 0 0 6px var(--link-color);
          }

          .logo,
          .logo:hover {
            color: inherit;
          }

          ul {
            display: flex;
            gap: 1rem;
            text-transform: capitalize;
          }
          a {
            transition: 0.3s;
          }
          a:hover {
            color: white;
            filter: brightness(2);
          }

          ul li {
            display: inline-block;
            border-radius: 8px;
            padding: 0.25rem;
          }

          ul li:hover {
            background: #77777747;
          }

          ul li a {
            font-size: 1rem;
            min-width: fit-content;
            letter-spacing: 0.2rem;
            display: block;
            border-bottom: 2px solid transparent;
            transition: 0.3s;
          }

          li {
            text-transform: capitalize;
            margin: 0 0.2rem;
          }

          .hamburger {
            height: 60px;
            width: 60px;
            display: inline-block;
            border-radius: 50%;
            position: relative;
            align-items: center;
            justify-content: center;
            z-index: 100;
            cursor: pointer;
            transform: scale(0.8);
            animation-duration: 2s;
            animation-name: appear;
            z-index: 3;
            display: none;
          }

          .hamburger::after {
            position: absolute;
            content: '';
            height: 100%;
            width: 100%;
          }

          .hamburger .bar {
            height: 2px;
            width: 30px;
            position: relative;
            background-color: var(--link-color);
            z-index: 4;
          }

          .hamburger .bar::after,
          .hamburger .bar::before {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            background-color: var(--link-color);
            transition: 0.3s linear;
            transition-property: top, bottom;
          }

          .hamburger .bar::after {
            top: 8px;
          }

          .hamburger .bar::before {
            bottom: 8px;
          }

          .hamburger.active .bar::before {
            bottom: 0;
          }

          .hamburger.active .bar::after {
            top: 0;
          }

          h1 {
            filter: brightness(2);
            font-size: 2rem;
            min-width: fit-content;
            font-weight: 400;
          }
          @media only screen and (max-width: 900px) {
            .hamburger {
              display: flex;
            }
            nav {
              padding: 0 1rem;
            }
            h1 {
              font-size: 2vh;
            }
            ul {
              position: fixed;
              list-style: none;
              background-color: var(--nav-background-color);
              opacity: 0.95;
              width: 100vw;
              height: 100vh;
              left: -100%;
              top: 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              z-index: 2;
              overflow-x: hidden;
              transition: 0.3s linear left;
              min-width: 100vw;
            }
            ul.active {
              left: 0;
              margin: 0;
              padding: 0;
              min-width: 100vw;
            }
            ul a {
              font-size: 2.5rem;
              font-weight: 500;
              letter-spacing: 0.2rem;
              text-transform: uppercase;
              display: block;
              border-bottom: 2px solid transparent;
              transition: 0.3s;
            }
          }
          @media only screen and (max-width: 400px) {
            nav {
              padding: 0 0.5rem;
            }
            h1 {
              font-size: 1.6vh;
            }
          }
          @keyframes appear {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Nav;