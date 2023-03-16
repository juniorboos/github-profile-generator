import { Box, ThemeProvider } from "@primer/react";
import { MarkdownPreview, Inputs } from "./components";
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
          <Inputs />
          <MarkdownPreview />
        </Box>
      </InputsProvider>
    </ThemeProvider>
  );
}

export default App;
