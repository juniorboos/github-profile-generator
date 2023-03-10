import { FormEvent, useState } from "react";
import { Box, ThemeProvider, FormControl, IconButton } from "@primer/react";
import { useInputHandler } from "./hooks/useInputHandler";
import { BadgesProps, markdownBadges } from "./utils/markdownBadges";
import Select, { MultiValue } from "react-select";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import { AboutMe } from "./components/AboutMe";

function App() {
  const { inputList, ...inputHandlers } = useInputHandler({
    text: "",
    emoji: "😃",
  });

  const [selectedBadges, setSelectedBadges] = useState<MultiValue<BadgesProps>>(
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const markdownContent = `# Hello there 👋
# About Me
${inputList.map((singleInput) => `- ${singleInput.emoji} ${singleInput.text}`)
  .join(`
`)}
# Tech Stack
${selectedBadges.map((badge) => `${badge.value} `).join("")}
`;

  const copyToClipboard = () => navigator.clipboard.writeText(markdownContent);

  return (
    <ThemeProvider>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Box
          as="form"
          onSubmit={handleSubmit}
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
          <FormControl>
            <FormControl.Label>Tech Stack</FormControl.Label>
            <Select
              isMulti
              name="markdown-badges"
              options={markdownBadges}
              styles={{ container: (base) => ({ ...base, width: 500 }) }}
              value={selectedBadges}
              onChange={(badges) => setSelectedBadges(badges)}
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            width: "50%",
            padding: "2rem",
            position: "relative",
          }}
        >
          <IconButton
            aria-label="Copy"
            icon={BiCopy}
            sx={{ position: "absolute", top: 2, right: 2 }}
            onClick={() => copyToClipboard()}
          />
          <ReactMarkdown
            children={markdownContent}
            remarkPlugins={[remarkGfm]}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
