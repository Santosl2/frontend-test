import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { TokenProvider } from "../context/TokenContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <TokenProvider>
        <Component {...pageProps} />
      </TokenProvider>
    </div>
  );
}

export default MyApp;
