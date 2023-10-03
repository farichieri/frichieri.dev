import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import React from 'react';

const Nav = dynamic(() => import('../Nav/Nav'), { ssr: false });

const font = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>frichieri.dev</title>
      </Head>
      <div
        className={`${font.className} dark:app-bg-dark app-bg w-full flex flex-col justify-center items-center`}
      >
        <Nav />
        <main className='flex w-full items-center justify-center pt-[var(--navHeight)]'>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
