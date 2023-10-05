import { FC } from 'react';
import Link from 'next/link';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { myPages } from '@/utils/myPages';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const MobileNav: FC<Props> = ({ isOpen, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`${
          isOpen
            ? 'fixed inset-0 bg-black/50 h-screen w-screen right-0'
            : 'right-full'
        } duration-300 transition-all`}
      ></div>
      <div
        className={`${
          isOpen ? 'right-0' : 'right-full'
        } absolute z-[90] top-0 pt-[var(--navHeight)] flex h-auto w-full text-[var(--textColor)] flex-col items-center dark:bg-black bg-white px-4 shadow-sm transition-all duration-300 dark:shadow-cyan-100/20 md:hidden `}
      >
        <div className='flex border-t w-full flex-col items-center justify-center gap-10 border-b text-base font-semibold'>
          <div className='flex w-full flex-col divide-y '>
            {myPages
              .filter((page) => !page.external)
              .map((page) => (
                <Link
                  href={page.path}
                  key={page.name}
                  className='w-full h-14 flex items-center duration-300 hover:bg-slate-500/10 hover:opacity-100'
                  onClick={onClick}
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
          <span className='text-[var(--textColor)] text-base '>Contact</span>
        </a>
        <ThemeSwitcher isMenu={true} />
      </div>
    </>
  );
};

export default MobileNav;
