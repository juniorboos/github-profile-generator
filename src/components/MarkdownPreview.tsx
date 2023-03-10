import { Box, IconButton } from "@primer/react";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownPreviewProps {
  onCopy: () => void;
  markdown: string;
}

const MarkdownPreview = ({ onCopy, markdown }: MarkdownPreviewProps) => {
  return (
    <Box
      sx={{
        width: "50%",
        padding: "2rem",
        position: "relative",
      }}
    >
      <IconButton
        aria-label="Copy"
        icon={BiCopy}
        sx={{ position: "absolute", top: 2, right: 2 }}
        onClick={onCopy}
      />
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </Box>
  );
};

export { MarkdownPreview };
