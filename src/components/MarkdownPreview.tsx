import { Box, Button } from "@primer/react";
import { MarkdownEditor } from "@primer/react/drafts";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import { BiCheck } from "@react-icons/all-files/bi/BiCheck";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import { useState } from "react";
import ReactDomServer from "react-dom/server";

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

  const renderMarkdown = async (markdown: string) =>
    ReactDomServer.renderToString(
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          a: ({ node, ...props }) => (
            <a className="inline-block w-fit" {...props} />
          ),
          img: ({ node, ...props }) => (
            <img
              className={
                props.alt === "GitHub Stats" ? "w-full" : "w-auto inline-block"
              }
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside" {...props}></ul>
          ),
        }}
      />
    );

  return (
    <Box className="relative p-4 flex-grow">
      <MarkdownEditor
        value={markdown}
        onChange={() => {}}
        onRenderPreview={renderMarkdown}
        viewMode={isEditing ? "edit" : "preview"}
        onChangeViewMode={(viewMode) => setIsEditing(viewMode === "edit")}
      >
        <MarkdownEditor.Label>Markdown</MarkdownEditor.Label>
        <MarkdownEditor.Toolbar></MarkdownEditor.Toolbar>
        <MarkdownEditor.Actions>
          <MarkdownEditor.ActionButton
            trailingIcon={isClicked ? BiCheck : BiCopy}
            aria-label="Copy markdown"
            onClick={handleClick}
            size="large"
          >
            Copy Markdown
          </MarkdownEditor.ActionButton>
        </MarkdownEditor.Actions>
      </MarkdownEditor>
    </Box>
  );
};

export { MarkdownPreview };
