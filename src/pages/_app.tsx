import "../index.css";
import type { AppProps } from "next/app";
import { SSRProvider, ThemeProvider } from "@primer/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <ThemeProvider colorMode="night">
        <Component {...pageProps} />
      </ThemeProvider>
    </SSRProvider>
  );
}
