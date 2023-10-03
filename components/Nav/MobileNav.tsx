import { FC } from 'react';
import Link from 'next/link';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { myPages } from '@/utils/myPages';

interface Props {
  isOpen: boolean;
}

const MobileNav: FC<Props> = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? 'right-0' : 'right-full'
      } absolute top-[var(--navHeight)] flex h-screen w-full text-[var(--textColor)] flex-col items-center bg-[var(--bgColor)] px-4 shadow-sm transition-all duration-300 dark:shadow-cyan-100/20 md:hidden `}
    >
      <div className='flex w-full flex-col items-center justify-center gap-10 border-b text-base font-semibold'>
        <div className='flex w-full flex-col divide-y '>
          {myPages
            .filter((page) => !page.external)
            .map((page) => (
              <Link
                href={page.path}
                key={page.name}
                className='w-full h-14 flex items-center duration-300 hover:bg-slate-500/10 hover:opacity-100'
              >
                <span className='text-[var(--textColor)]'>{page.name}</span>
              </Link>
            ))}
        </div>
      </div>

      <a
        className='flex w-full justify-between border-b py-3 font-semibold duration-300 hover:bg-slate-500/10 hover:opacity-100'
        href='mailto:frichieri.dev@gmail.com'
      >
        <span>Contact</span>
      </a>
      <div className='flex w-full items-center justify-center gap-2 border-b h-14 font-semibold duration-300 hover:bg-slate-500/10 hover:opacity-100'>
        <span>Theme</span>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default MobileNav;
