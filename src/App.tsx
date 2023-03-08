import { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Box,
  TextInput,
  ThemeProvider,
  FormControl,
} from "@primer/react";
import { useInputHandler } from "./hooks/useInputHandler";
import EmojiPicker from "emoji-picker-react";

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ThemeProvider>
      <Box as="form" onSubmit={handleSubmit}>
        {inputList.map((singleInput, idx) => (
          <FormControl key={idx}>
            <FormControl.Label>Label</FormControl.Label>
            <Box display="flex" sx={{ gap: "0.5rem", marginBottom: "1rem" }}>
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
      <Box>
        <p># About me</p>
        {inputList.map((singleInput, idx) => (
          <p key={idx}>
            - {` ${singleInput.emoji}`} {` ${singleInput.text}`}
          </p>
        ))}
      </Box>
    </ThemeProvider>
  );
}

export default App;
