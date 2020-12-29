import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import "../styles/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
