import { FormEvent, useState } from "react";
import {
  Button,
  Box,
  TextInput,
  ThemeProvider,
  FormControl,
} from "@primer/react";
import { useInputHandler } from "./hooks/useInputHandler";
import EmojiPicker from "emoji-picker-react";
import { BadgesProps, markdownBadges } from "./utils/markdownBadges";
import Select, { MultiValue } from "react-select";

function App() {
  const {
    inputList,
    isEmojisShown,
    handleInputAdd,
    handleInputChange,
    handleEmojiChange,
    handleInputRemove,
    handleShowEmojis,
  } = useInputHandler({ text: "", emoji: "😃" });

  const [selectedBadges, setSelectedBadges] = useState<MultiValue<BadgesProps>>(
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ThemeProvider>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "2rem",
        }}
      >
        <Box
          as="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Box>
            {inputList.map((singleInput, idx) => (
              <FormControl key={idx}>
                <FormControl.Label>Description</FormControl.Label>
                <Box
                  display="flex"
                  sx={{ gap: "0.5rem", marginBottom: "1rem" }}
                >
                  <TextInput
                    placeholder="Text"
                    value={singleInput.text}
                    onChange={(e) => handleInputChange(e, idx)}
                  />
                  <Box sx={{ position: "relative" }}>
                    <Button onClick={() => handleShowEmojis(idx)}>
                      {singleInput.emoji}
                    </Button>
                    {isEmojisShown === idx && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          zIndex: 2,
                        }}
                      >
                        <EmojiPicker
                          onEmojiClick={(e) => handleEmojiChange(e.emoji, idx)}
                        />
                      </Box>
                    )}
                  </Box>

                  <Button onClick={() => handleInputRemove(idx)}>Remove</Button>
                </Box>
              </FormControl>
            ))}
            <Button onClick={() => handleInputAdd()}>Add more</Button>
          </Box>
          <FormControl>
            <FormControl.Label>TextInputWithTokens</FormControl.Label>
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
        <hr style={{ width: "100%" }} />
        <Box>
          {inputList.length > 0 && (
            <div>
              <p># About me</p>
              {inputList.map((singleInput, idx) => (
                <p key={idx}>
                  - {` ${singleInput.emoji}`} {` ${singleInput.text}`}
                </p>
              ))}
            </div>
          )}

          <p># Tech Stack</p>
          <p>
            {selectedBadges.map((badge) => (
              <span>{badge.value} </span>
            ))}
          </p>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
