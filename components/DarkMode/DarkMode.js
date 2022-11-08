'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function DarkMode({ theme, setTheme }) {
  useEffect(() => {
    let localTheme = window.localStorage.getItem('theme');
    if (!localTheme) {
      window.localStorage.setItem('theme', 'dark');
    }
    setTheme(localTheme);
  }, [theme]);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };
  return (
    <span onClick={switchTheme}>
      {theme === 'dark' ? (
        <Image alt='dark' src={'/images/dark.png'} width={25} height={25} />
      ) : (
        <Image alt='light' src={'/images/light.png'} width={25} height={25} />
      )}
      <style jsx>
        {`
          span {
            align-items: center;
            background: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            position: relative;
            height: 25px;
            width: 25px;
            margin: 0 1rem;
            cursor: pointer;
          }
        `}
      </style>
    </span>
  );
}
