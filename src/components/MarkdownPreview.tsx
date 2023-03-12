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
    <Box className="relative p-4 flex-grow">
      <Button
        trailingIcon={isClicked ? BiCheck : BiCopy}
        aria-label="Copy markdown"
        onClick={handleClick}
        className="absolute top-4 right-4"
      >
        Copy markdown
      </Button>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside" {...props}></ul>
          ),
        }}
      />
    </Box>
  );
};

export { MarkdownPreview };
