import { Box, FormControl, Button, TextInput, IconButton } from "@primer/react";
import { EmojiPicker } from "./EmojiPicker";
import { MdRemoveCircleOutline } from "@react-icons/all-files/md/MdRemoveCircleOutline";
import { MdAddCircleOutline } from "@react-icons/all-files/md/MdAddCircleOutline";
import { AboutMeHandlerProps } from "../hooks/useAboutMeHandler";

const AboutMe = ({
  inputs,
  isEmojisShown,
  handleInputAdd,
  handleInputChange,
  handleInputRemove,
  handleShowEmojis,
}: AboutMeHandlerProps) => {
  return (
    <FormControl>
      <FormControl.Label>About Me</FormControl.Label>
      {inputs.map((singleInput, idx) => (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: "0.5rem",
          }}
          key={idx}
        >
          <EmojiPicker
            current={singleInput.emoji}
            isOpen={isEmojisShown === idx}
            onBtnClick={() => handleShowEmojis(idx)}
            onClickOutside={() => handleShowEmojis(-1)}
            handleEmojiUpdate={(e) => handleInputChange(e.emoji, idx, "emoji")}
          />
          <TextInput
            placeholder="Text"
            value={singleInput.text}
            onChange={(e) => handleInputChange(e.target.value, idx, "text")}
            sx={{ flexGrow: 1 }}
          />
          <IconButton
            aria-label="Remove"
            onClick={() => handleInputRemove(idx)}
            icon={MdRemoveCircleOutline}
            variant="danger"
            sx={{ height: "auto" }}
          />
        </Box>
      ))}
      <Button
        onClick={() => handleInputAdd()}
        leadingIcon={MdAddCircleOutline}
        variant="outline"
      >
        Add more
      </Button>
    </FormControl>
  );
};

export { AboutMe };
