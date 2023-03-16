import { Box, IconButton } from "@primer/react";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import { BiCheck } from "@react-icons/all-files/bi/BiCheck";
import { BsEye } from "@react-icons/all-files/bs/BsEye";
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useInputs } from "../context/inputsContext";
import { getMarkdown } from "../utils";

const MarkdownPreview = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState(false);
  const { about, techs, githubUser, socials } = useInputs();

  const markdown = getMarkdown(about, techs, githubUser, socials);

  const handleClick = () => {
    setIsClicked(true);
    navigator.clipboard.writeText(markdown);
    // Change back to the initial icon after 3 seconds
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <Box className="flex relative p-4 flex-grow min-h-full">
      <MDEditor
        value={markdown}
        hideToolbar
        preview={isEditing ? "edit" : "preview"}
        className="min-h-full flex-grow h-[unset]"
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
