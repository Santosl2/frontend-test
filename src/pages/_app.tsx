import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { TokenProvider } from "../context/TokenContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Klever Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TokenProvider>
        <Component {...pageProps} />
      </TokenProvider>
    </div>
  );
}

export default MyApp;
