import { Box, SSRProvider, ThemeProvider } from "@primer/react";
import { Analytics } from "@vercel/analytics/react";
import { MarkdownPreview, Inputs } from "../components";
import Primitives from "@primer/primitives";
import { InputsProvider } from "../context/InputsProvider";
import Head from "next/head";
const { colors } = Primitives;

function HomePage() {
  return (
    <>
      <Head>
        <title>GitHub Profile Generator</title>
        <meta
          name="description"
          content="Generate a dynamic GitHub profile with just a few clicks! Add your bio, tech stack, and social links and let our generator do the rest. Show off your skills and impress potential employers with a professional-looking profile."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Analytics />
      <SSRProvider>
        <ThemeProvider colorMode="night">
          <InputsProvider>
            <Box
              className="flex flex-col md:flex-row min-h-screen p-4"
              bg={colors.dark.canvas.default}
            >
              <Inputs />
              <MarkdownPreview />
            </Box>
          </InputsProvider>
        </ThemeProvider>
      </SSRProvider>
    </>
  );
}

export default HomePage;
