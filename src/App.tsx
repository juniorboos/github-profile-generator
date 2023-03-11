import { useState } from "react";
import { Box, ThemeProvider } from "@primer/react";
import { OptionsProps, markdownBadges } from "./utils/markdownBadges";
import { MultiValue } from "react-select";
import { AboutMe } from "./components/AboutMe";
import { getMarkdown } from "./utils/getMarkdown";
import { TechStack } from "./components/TechStack";
import { MarkdownPreview } from "./components/MarkdownPreview";
import { GithubStats } from "./components/GithubStats";
import { ContactMe } from "./components/ContactMe";
import { useAboutMeHandler } from "./hooks/useAboutMeHandler";

function App() {
  const { inputs, ...inputHandlers } = useAboutMeHandler({
    text: "",
    emoji: "😃",
  });

  const [selectedTechs, setSelectedTechs] = useState<MultiValue<OptionsProps>>(
    []
  );

  const [githubUser, setGithubUser] = useState<string>("");

  const markdown = getMarkdown(inputs, selectedTechs, githubUser);

  const copyToClipboard = () => navigator.clipboard.writeText(markdown);

  return (
    <ThemeProvider>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "30% auto",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderRight: "1px solid gray",
          }}
        >
          <AboutMe inputs={inputs} {...inputHandlers} />
          <TechStack
            selectedTechs={selectedTechs}
            onChangeTechs={(badges) => setSelectedTechs(badges)}
            techOptions={markdownBadges}
          />
          <GithubStats
            value={githubUser}
            onChange={(e) => setGithubUser(e.target.value)}
          />
          <ContactMe />
        </Box>
        <MarkdownPreview onCopy={() => copyToClipboard()} markdown={markdown} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
