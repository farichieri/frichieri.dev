import Head from 'next/head';
import reset from '../../styles/reset';
import colors from '../../styles/colors';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import typography, { fonts } from '../../styles/typography';
import general from '../../styles/general';
import React, { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    let localTheme = window.localStorage.getItem('theme');
    if (!localTheme) {
      window.localStorage.setItem('theme', 'dark');
    }
    setTheme(String(localTheme));
  }, [theme]);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>frichieri.dev</title>
      </Head>
      {theme && (
        <div className={`${fonts.raleWay.className} ${theme}`}>
          <Nav theme={theme} setTheme={setTheme} />
          <main>{children}</main>
          <Footer />
        </div>
      )}
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
            min-height: 100vh;
            color: var(--textColor);
            padding-top: var(--navHeight);
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
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
