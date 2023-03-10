import { useState } from "react";
import { Box, ThemeProvider } from "@primer/react";
import { useInputHandler } from "./hooks/useInputHandler";
import { OptionsProps, markdownBadges } from "./utils/markdownBadges";
import { MultiValue } from "react-select";
import { AboutMe } from "./components/AboutMe";
import { getMarkdown } from "./utils/getMarkdown";
import { TechStack } from "./components/TechStack";
import { MarkdownPreview } from "./components/MarkdownPreview";

function App() {
  const { inputList, ...inputHandlers } = useInputHandler({
    text: "",
    emoji: "😃",
  });

  const [selectedTechs, setSelectedTechs] = useState<MultiValue<OptionsProps>>(
    []
  );

  const markdown = getMarkdown(inputList, selectedTechs);

  const copyToClipboard = () => navigator.clipboard.writeText(markdown);

  return (
    <ThemeProvider>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Box
          sx={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderRight: "1px solid gray",
            width: "50%",
          }}
        >
          <AboutMe inputList={inputList} {...inputHandlers} />
          <TechStack
            selectedTechs={selectedTechs}
            onChangeTechs={(badges) => setSelectedTechs(badges)}
            techOptions={markdownBadges}
          />
        </Box>
        <MarkdownPreview onCopy={() => copyToClipboard()} markdown={markdown} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
