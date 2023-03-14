import { Box, ThemeProvider } from "@primer/react";
import { AboutMe } from "./components/AboutMe";
import { TechStack } from "./components/TechStack";
import { MarkdownPreview } from "./components/MarkdownPreview";
import { GithubStats } from "./components/GithubStats";
import { ContactMe } from "./components/ContactMe";
import Primitives from "@primer/primitives";
import { InputsProvider } from "./context/InputsProvider";
const { colors } = Primitives;

function App() {
  return (
    <ThemeProvider colorMode="night">
      <InputsProvider>
        <Box
          className="flex flex-col md:flex-row min-h-screen p-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-700"
          bg={colors.dark.canvas.default}
        >
          <Box className="flex p-4 flex-col gap-4 md:min-w-[500px]">
            <AboutMe />
            <TechStack />
            <GithubStats />
            <ContactMe />
          </Box>
          <MarkdownPreview />
        </Box>
      </InputsProvider>
    </ThemeProvider>
  );
}

export default App;
