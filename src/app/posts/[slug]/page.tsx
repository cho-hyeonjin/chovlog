import { getPostData } from "@/service/posts";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);

  return (
    <>
      <div>{post.title}</div>
      <pre>{post.content}</pre>
    </>
  );
};

export default PostPage;
