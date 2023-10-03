import { FC } from 'react';
import { Theme } from '@/types';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface Props {}

const ThemeSwitcher: FC<Props> = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (
      theme === 'dark' ||
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', '#fff');
      setTheme(Theme.light);
    } else {
      document.documentElement
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', '#000');
      setTheme(Theme.dark);
    }
  };

  if (!theme) return <></>;

  return (
    <button
      onClick={toggleTheme}
      className='flex ml-auto items-center justify-between gap-1 transition-all'
      aria-label='Toggle theme'
    >
      {theme === 'dark' ? (
        <Image alt='dark' src={'/images/dark.png'} width={20} height={20} />
      ) : (
        <Image alt='light' src={'/images/light.png'} width={20} height={20} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
