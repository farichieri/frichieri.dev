import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

import Footer from "./Footer";

const Nav = dynamic(() => import("./Nav"), { ssr: false });

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
      <div className={`${font.className} font-medium`}>
        <div className="mx-auto max-w-screen-lg">
          <span className="fixed bottom-[calc(100%-200px)] z-[-1] aspect-square w-full max-w-screen-lg rounded-full bg-gradient-to-b from-blue-200 via-blue-200 to-blue-200 opacity-60 blur-3xl filter dark:bottom-[calc(100%-180px)] dark:from-blue-900 dark:via-blue-900 dark:to-blue-900 dark:opacity-40"></span>
        </div>
        <Nav />
        <main className="z-50 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 pt-[var(--navHeight)]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
