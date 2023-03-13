import { Box, IconButton } from "@primer/react";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import { BiCheck } from "@react-icons/all-files/bi/BiCheck";
import { BsEye } from "@react-icons/all-files/bs/BsEye";
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

interface MarkdownPreviewProps {
  onCopy: () => void;
  markdown: string;
}

const MarkdownPreview = ({ onCopy, markdown }: MarkdownPreviewProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onCopy();
    // Change back to the initial icon after 3 seconds
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <Box className="relative p-4 flex-grow min-h-full">
      <MDEditor
        value={markdown}
        hideToolbar
        preview={isEditing ? "edit" : "preview"}
        className="min-h-full"
        visibleDragbar={false}
      />
      <Box className="absolute top-6 right-9 flex gap-2">
        <IconButton
          icon={isEditing ? BsEyeSlash : BsEye}
          aria-label={`Go to ${isEditing ? "preview" : "edit"} mode`}
          onClick={() => setIsEditing((prevIsEditing) => !prevIsEditing)}
          size="large"
        />
        <IconButton
          icon={isClicked ? BiCheck : BiCopy}
          aria-label="Copy markdown"
          onClick={handleClick}
          size="large"
        />
      </Box>
    </Box>
  );
};

export { MarkdownPreview };
