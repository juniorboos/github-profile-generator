import { Box, Button } from "@primer/react";
import { useEffect, useRef } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

interface EmojiProps {
  id: string;
  name: string;
  native: string;
}

interface EmojiPickerProps {
  current: string;
  isOpen: boolean;
  onBtnClick: () => void;
  onClickOutside: () => void;
  handleEmojiUpdate: (emoji: EmojiProps) => void;
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
  }, [ref, onClickOutside]);

  return (
    <Box className="relative h-auto">
      <Button onClick={onBtnClick} className="h-full" aria-label="Select emoji">
        {current}
      </Button>
      {isOpen && (
        <Box className="absolute top-full left-0 z-10" ref={ref} role="dialog">
          <Picker
            data={data}
            onEmojiSelect={(e: EmojiProps) => handleEmojiUpdate(e)}
          />
        </Box>
      )}
    </Box>
  );
};

export { EmojiPicker };
export type { EmojiProps };
