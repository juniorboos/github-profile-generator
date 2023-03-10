import { Box, FormControl, Button, TextInput } from "@primer/react";
import { InputHandlerProps } from "../hooks/useInputHandler";
import { EmojiPicker } from "./EmojiPicker";
import { MdRemoveCircleOutline } from "@react-icons/all-files/md/MdRemoveCircleOutline";
import { MdAddCircleOutline } from "@react-icons/all-files/md/MdAddCircleOutline";

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
    <FormControl>
      <FormControl.Label>Description</FormControl.Label>
      {inputList.map((singleInput, idx) => (
        <Box display="flex" sx={{ gap: "0.5rem", width: "100%" }}>
          <EmojiPicker
            current={singleInput.emoji}
            isOpen={isEmojisShown === idx}
            onBtnClick={() => handleShowEmojis(idx)}
            onClickOutside={() => handleShowEmojis(-1)}
            handleEmojiUpdate={(e) => handleEmojiChange(e.emoji, idx)}
          />
          <TextInput
            placeholder="Text"
            value={singleInput.text}
            onChange={(e) => handleInputChange(e, idx)}
            sx={{ flexGrow: 1 }}
          />
          <Button
            onClick={() => handleInputRemove(idx)}
            leadingIcon={MdRemoveCircleOutline}
            variant="danger"
          >
            Remove
          </Button>
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
