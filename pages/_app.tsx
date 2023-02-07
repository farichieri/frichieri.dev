import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { db } from '../utils/firebase.config';

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
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
