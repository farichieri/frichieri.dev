import { FC, useEffect, useState } from 'react';
import { myPages } from '@/utils/myPages';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import MobileNav from './MobileNav';

const ThemeSwitcher = dynamic(
  () => import('@/components/ThemeSwitcher/ThemeSwitcher'),
  {
    ssr: false,
  }
);

interface Props {}

const NavBar: FC<Props> = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY === 0) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastYPos(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastYPos]);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-black dark:bg-white transition ease transform duration-300`;

  return (
    <nav
      className={`fixed top-0 z-50 flex duration-300 w-full select-none items-center justify-center border-gray-500/20 px-2 backdrop-blur-md dark:border-gray-400/10   ${
        show
          ? 'border-b bg-white/80 dark:bg-black/50'
          : 'border-none bg-transparent'
      }`}
    >
      <div
        className={`z-50 flex h-[var(--navHeight)] w-full max-w-7xl items-center justify-between gap-4 border-gray-500/20 px-2 dark:border-gray-400/10`}
      >
        <div className='hidden basis-1/3 items-center justify-center gap-4 text-xs font-medium sm:text-base md:flex md:gap-10'>
          {myPages
            .filter((page) => !page.external)
            .map((page) => (
              <Link
                href={page.path}
                key={page.name}
                className={`rounded-3xl text-sm px-3 py-1 duration-300 hover:opacity-100 ${
                  router.asPath === page.path ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <span className='text-[var(--textColor)]'>{page.name}</span>
              </Link>
            ))}
        </div>
        <div className='flex w-fit min-w-fit basis-1/3 items-center justify-end gap-4 text-xs xs:gap-5 sm:gap-10 sm:text-xl'>
          <div className='hidden md:flex'>
            <ThemeSwitcher />
          </div>
        </div>
        <div className='cursor-pointer md:hidden left-auto'>
          <button
            className='flex flex-col h-12 w-12 rounded justify-center items-center group'
            onClick={(e) => {
              e.preventDefault();
              handleMenu();
            }}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'rotate-45 translate-y-0 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            />

            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? '-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            />
          </button>
        </div>
        <MobileNav isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
