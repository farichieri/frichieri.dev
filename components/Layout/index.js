import Head from 'next/head';
import reset from '../../styles/reset';
import colors from '../../styles/colors';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import typography, { fonts } from '../../styles/typography';
import general from '../../styles/general';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    let localTheme = window.localStorage.getItem('theme');
    if (!localTheme) {
      window.localStorage.setItem('theme', 'dark');
    }
    setTheme(localTheme);
  }, [theme]);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>frichieri.dev</title>
      </Head>
      <div className={`${fonts.orbitron.className} ${theme}`}>
        <Nav theme={theme} setTheme={setTheme} />
        <main>{children}</main>
        <Footer />
      </div>
      <style jsx>{`
        div {
          align-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          margin: auto;
          min-height: 100vh;
          text-align: center;
          color: var(--textColor);
          background: var(--bgColor);
        }
      `}</style>
      <style jsx global>
        {`
          main {
            background: var(--bgColor);
            height: 100%;
            height: 100vh;
            padding-top: var(--footerHeight);
            width: 100%;
          }
        `}
      </style>
      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {general}
      </style>
      <style jsx global>
        {typography}
      </style>
      <style jsx global>
        {colors}
      </style>
    </>
  );
}
