import { Box, IconButton } from "@primer/react";
import { BiCopy, BiCheck, BiTrash } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { useInputs, useInputsDispatch } from "../../context/inputsContext";
import { getMarkdown } from "../../utils";
import dynamic from "next/dynamic";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { initialState } from "../../context/contants";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

const MarkdownPreview = () => {
  const [isCopyClicked, setIsCopyClicked] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState(false);
  const state = useInputs();
  const dispatch = useInputsDispatch();

  const markdown = getMarkdown(state);

  const handleCopy = () => {
    setIsCopyClicked(true);
    navigator.clipboard.writeText(markdown);
    // Change back to the initial icon after 3 seconds
    setTimeout(() => setIsCopyClicked(false), 3000);
  };

  const handleClear = () =>
    dispatch({ type: "SET_STORE", payload: initialState });

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
      <Box className="absolute top-6 right-9 flex gap-2 flex-col">
        <IconButton
          icon={isEditing ? BsEyeSlash : BsEye}
          aria-label={`Go to ${isEditing ? "preview" : "edit"} mode`}
          onClick={() => setIsEditing((prevIsEditing) => !prevIsEditing)}
          size="large"
          title={`Go to ${isEditing ? "preview" : "edit"} mode`}
        />
        <IconButton
          icon={isCopyClicked ? BiCheck : BiCopy}
          aria-label="Copy markdown"
          onClick={handleCopy}
          size="large"
          title="Copy markdown"
        />
        <IconButton
          icon={BiTrash}
          aria-label="Clear inputs"
          onClick={handleClear}
          size="large"
          title="Clear inputs"
        />
      </Box>
    </Box>
  );
};

export { MarkdownPreview };
