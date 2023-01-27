// import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { UrlContextProvider } from "../context/UrlContext";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <UrlContextProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </UrlContextProvider>
  );
}

export default MyApp;
