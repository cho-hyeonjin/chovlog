import { Post } from "@/service/posts";
import PostCard from "./PostCard";

type Props = { posts: Post[] };
const PostsGrid = ({ posts }: Props) => {
  return (
    <ul className="grid gap-6 md:grid-cols-4">
      {posts.map((post) => (
        <li
          key={post.path}
          className="overflow-hidden rounded-xl bg-neutral-200"
        >
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
