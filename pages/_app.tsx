import '../styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import { db } from '../utils/firebase.config';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      db;
      const analytics = getAnalytics();
      logEvent(analytics, 'screen_view', {
        firebase_screen: router.asPath,
        firebase_screen_class: 'screenClass',
      });
    }
  }, [router]);

  return (
    <ThemeProvider attribute='class'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
