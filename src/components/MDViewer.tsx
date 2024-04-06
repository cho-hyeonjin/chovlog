import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

const MDViewer = ({ content }: { content: string }) => {
  return (
    <Markdown className="prose lg:prose-xl" remarkPlugins={[remarkGfm]}>
      {content}
    </Markdown>
  );
};

export default MDViewer;
