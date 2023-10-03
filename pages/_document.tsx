import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name='keywords'
          content='Frontend Developer, Full Stack Developer, Web Developer, React, NextJs, Software Developer'
        />
        <link rel='alternate' hrefLang='en' href='https://frichieri.dev' />
        {/* <link rel='manifest' href='/site.webmanifest' /> */}
        <meta name='author' content='Fabricio Richieri' />
        <meta name='google' content='notranslate' key='notranslate' />
        <meta name='robots' content='all' />
        <meta name='robots' content='max-image-preview:large' />

        <meta
          name='description'
          content={'Full Stack Developer, Fabricio Richieri'}
        />

        <meta name='twitter:creator' content='@farichieri' />
        <meta name='twitter:site' content='@farichieri' />
        <meta property='twitter:domain' content='frichieri.dev' />
        <meta property='twitter:url' content='frichieri.dev' />
        <meta name='twitter:title' content='frichieri.dev' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:description'
          content={'Full Stack Developer, Fabricio Richieri'}
        />
        <meta name='twitter:image' content='/images/frichieri.png' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://frichieri.dev' />
        <meta property='og:title' content={'Fabricio Richieri'} />
        <meta
          property='og:description'
          content={'Full Stack Developer, Fabricio Richieri'}
        />
        <meta property='og:image' content={'/images/frichieri.png'} />
        <meta property='og:image:height' content='1280' />
        <meta property='og:image:width' content='630' />
        <meta property='og:locale' content='en_US' key='locale' />
        <meta property='og:site_name' content='Fabricio Richieri' />
        <meta property='og:image:alt' content='Fabricio Richieri' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
