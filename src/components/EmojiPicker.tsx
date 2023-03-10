import { Box, Button } from "@primer/react";
import EmojiPickerReact, { EmojiClickData } from "emoji-picker-react";
import { useEffect, useRef } from "react";

interface EmojiPickerProps {
  current: string;
  isOpen: boolean;
  onBtnClick: () => void;
  onClickOutside: () => void;
  handleEmojiUpdate: (e: EmojiClickData) => void;
}

const EmojiPicker = ({
  current,
  onBtnClick,
  onClickOutside,
  handleEmojiUpdate,
  isOpen,
}: EmojiPickerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        onClickOutside();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <Box sx={{ position: "relative" }} ref={ref}>
      <Button onClick={onBtnClick}>{current}</Button>
      {isOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 2,
          }}
        >
          <EmojiPickerReact onEmojiClick={handleEmojiUpdate} />
        </Box>
      )}
    </Box>
  );
};

export { EmojiPicker };
