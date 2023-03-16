import { Box, FormControl, Button, TextInput, IconButton } from "@primer/react";
import { EmojiPicker } from "../index";
import { MdRemoveCircleOutline } from "@react-icons/all-files/md/MdRemoveCircleOutline";
import { MdAddCircleOutline } from "@react-icons/all-files/md/MdAddCircleOutline";
import { useAboutMeHandler } from "../../hooks";

const AboutMe = () => {
  const {
    about,
    isEmojisShown,
    handleShowEmojis,
    handleOnChange,
    handleRemoveInput,
    handleAddInput,
  } = useAboutMeHandler();

  return (
    <FormControl>
      <FormControl.Label>About Me</FormControl.Label>
      {about.map((singleInput, idx) => (
        <Box className="flex w-full gap-2" key={idx}>
          <EmojiPicker
            current={singleInput.emoji}
            isOpen={isEmojisShown === idx}
            onBtnClick={() => handleShowEmojis(idx)}
            onClickOutside={() => handleShowEmojis(-1)}
            handleEmojiUpdate={(e) => handleOnChange(e.native, idx, "emoji")}
          />
          <TextInput
            placeholder="Description"
            value={singleInput.text}
            onChange={(e) => handleOnChange(e.target.value, idx, "text")}
            className="flex-grow"
          />
          <IconButton
            aria-label="Remove"
            onClick={() => handleRemoveInput(idx)}
            icon={MdRemoveCircleOutline}
            variant="danger"
            className="h-auto"
          />
        </Box>
      ))}
      <Button
        onClick={() => handleAddInput()}
        leadingIcon={MdAddCircleOutline}
        variant="outline"
      >
        Add more
      </Button>
    </FormControl>
  );
};

export { AboutMe };
