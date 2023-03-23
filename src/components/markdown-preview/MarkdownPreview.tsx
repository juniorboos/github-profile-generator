import { Box, IconButton } from "@primer/react";
import { BiCopy, BiCheck } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { useInputs } from "../../context/inputsContext";
import { getMarkdown } from "../../utils";
import dynamic from "next/dynamic";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

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
    <Box className="flex relative p-4 flex-grow h-full md:h-[unset] min-h-[400px]">
      <MDEditor
        value={markdown}
        hideToolbar
        preview={isEditing ? "edit" : "preview"}
        className="min-h-full flex-grow h-[unset]"
        visibleDragbar={false}
        data-testid="markdown-preview"
      />
      <Box className="absolute top-6 right-9 flex gap-2">
        <IconButton
          icon={isEditing ? BsEyeSlash : BsEye}
          aria-label={`Go to ${isEditing ? "preview" : "edit"} mode`}
          onClick={() => setIsEditing((prevIsEditing) => !prevIsEditing)}
          size="large"
          title={`Go to ${isEditing ? "preview" : "edit"} mode`}
        />
        <IconButton
          icon={isClicked ? BiCheck : BiCopy}
          aria-label="Copy markdown"
          onClick={handleClick}
          size="large"
          title="Copy markdown"
        />
      </Box>
    </Box>
  );
};

export { MarkdownPreview };
