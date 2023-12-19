import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Footer from "../Footer/Footer";
import Head from "next/head";
import React from "react";

const Nav = dynamic(() => import("../Nav/Nav"), { ssr: false });

const font = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>frichieri.dev</title>
      </Head>
      <div className={`${font.className} bg-white font-medium dark:bg-black`}>
        <div className="mx-auto max-w-screen-lg">
          <span className="fixed bottom-[calc(100%-200px)] z-50 aspect-square w-full max-w-screen-lg rounded-full bg-gradient-to-b from-blue-400 via-blue-400 to-blue-400 opacity-60 blur-3xl filter dark:bottom-[calc(100%-180px)] dark:from-blue-900 dark:via-blue-900 dark:to-blue-900 dark:opacity-40"></span>
        </div>
        <Nav />
        <main className="flex w-full items-center justify-center pt-[var(--navHeight)]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
