import "../index.css";
import type { AppProps } from "next/app";
import { BaseStyles, SSRProvider, ThemeProvider } from "@primer/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <ThemeProvider colorMode="night">
        <BaseStyles>
          <Component {...pageProps} />
        </BaseStyles>
      </ThemeProvider>
    </SSRProvider>
  );
}
