import { AppProps } from 'next/app';

import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <span className='glowLight'></span>
      <span className='glowLight'></span>
      <Footer />
    </>
  );
}

export default MyApp;
