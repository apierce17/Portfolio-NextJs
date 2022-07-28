import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  usePageViews();
  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Ashton Pierce"
        description='This is the homepage for Front End Developer and UI Designer, Ashton Pierce.'
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'http://portfolio-next-js-apierce17.vercel.app/seo/favicon.ico',
          },
        ]}
        openGraph={{
          type: 'website',
          url: 'https://www.apierce.me/',
          title: 'Ashton Pierce Portfolio',
          description: 'This is the homepage for Front End Developer and UI Designer, Ashton Pierce.',
          images: [
            {
              url: 'https://portfolio-next-js-apierce17.vercel.app/seo/web-thumbnail.png',
              width: 800,
              height: 600,
              alt: 'Preview Image of apierce.me',
            },
            {
              url: 'https://www.apierce.me/seo/web-thumbnail.png',
              width: 800,
              height: 600,
              alt: 'Preview Image of apierce.me',
            },
          ],
        }}
      />
      <GoogleAnalytics />
      <Navbar />
      <Component {...pageProps} />
      <span className='glowLight'></span>
      <span className='glowLight'></span>
      <Footer />
    </>
  );
}

export default MyApp;
