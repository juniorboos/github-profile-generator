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
    <Box className="relative h-auto">
      <Button onClick={onBtnClick} className="h-full">
        {current}
      </Button>
      {isOpen && (
        <Box className="absolute top-full left-0 z-10" ref={ref}>
          <EmojiPickerReact onEmojiClick={handleEmojiUpdate} />
        </Box>
      )}
    </Box>
  );
};

export { EmojiPicker };
