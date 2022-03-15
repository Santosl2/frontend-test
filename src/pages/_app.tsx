import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { TokenProvider } from "../context/TokenContext";
import { Head } from "next/document";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Klever Test</title>
      </Head>

      <TokenProvider>
        <Component {...pageProps} />
      </TokenProvider>
    </div>
  );
}

export default MyApp;
