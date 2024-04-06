import {
  defineDocumentType,
  FieldDefs,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";

const fields: FieldDefs = {
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  date: { type: "date", required: true },
  category: { type: "string" },
  path: { type: "string" },
  imagPpath: { type: "string" },
  featured: { type: "boolean" },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields,
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    readingMinutes: {
      type: "string",
      resolve: (post) => Math.ceil(readingTime(post.body.raw).minutes),
    },
    wordCount: {
      type: "number",
      resolve: (post) => post.body.raw.split(/\s+/gu).length,
    },
  },
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });
