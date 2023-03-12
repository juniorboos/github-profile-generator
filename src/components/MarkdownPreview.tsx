import { Box, Button } from "@primer/react";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import { BiCheck } from "@react-icons/all-files/bi/BiCheck";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import { useState } from "react";

interface MarkdownPreviewProps {
  onCopy: () => void;
  markdown: string;
}

const MarkdownPreview = ({ onCopy, markdown }: MarkdownPreviewProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(true);
    onCopy();
    // Change back to the initial icon after 3 seconds
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <Box
      sx={{
        p: 3,
        position: "relative",
        flexGrow: 1,
      }}
    >
      <Button
        trailingIcon={isClicked ? BiCheck : BiCopy}
        aria-label="Copy markdown"
        sx={{ position: "absolute", top: 2, right: 2 }}
        onClick={handleClick}
      >
        Copy markdown
      </Button>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          img: ({ node, ...props }) => (
            <img
              style={{ width: props.alt === "GitHub Stats" ? "100%" : "auto" }}
              {...props}
            />
          ),
        }}
      />
    </Box>
  );
};

export { MarkdownPreview };
