import { Box, FormControl, Button, TextInput } from "@primer/react";
import EmojiPicker from "emoji-picker-react";
import { InputHandlerProps } from "../hooks/useInputHandler";

const AboutMe = ({
  inputList,
  isEmojisShown,
  handleEmojiChange,
  handleInputAdd,
  handleInputChange,
  handleInputRemove,
  handleShowEmojis,
}: InputHandlerProps) => {
  return (
    <Box>
      {inputList.map((singleInput, idx) => (
        <FormControl key={idx}>
          <FormControl.Label>Description</FormControl.Label>
          <Box display="flex" sx={{ gap: "0.5rem", marginBottom: "1rem" }}>
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
            <TextInput
              placeholder="Text"
              value={singleInput.text}
              onChange={(e) => handleInputChange(e, idx)}
            />

            <Button onClick={() => handleInputRemove(idx)}>Remove</Button>
          </Box>
        </FormControl>
      ))}
      <Button onClick={() => handleInputAdd()}>Add more</Button>
    </Box>
  );
};

export { AboutMe };
