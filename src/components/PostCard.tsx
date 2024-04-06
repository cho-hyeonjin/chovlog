import { Post } from "@/service/posts";
import Link from "next/link";
import Image from "next/image";

type Props = { post: Post };

const PostCard = ({ post: { title, description, date, path } }: Props) => {
  return (
    <Link
      href={`/posts/${path}`}
      className="overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800"
    >
      <Image
        src={`/images/posts/${path}.jpg`}
        alt={title}
        width={300}
        height={300}
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="mb-2 flex w-full items-end">
          <p className="text-xl font-bold tracking-tight md:text-lg">{title}</p>
        </div>
        {/* <div className="mb-2 flex w-full items-end">{date}</div> */}
        <div className="mb-2 flex w-full items-end">{description}</div>
      </div>
    </Link>
  );
};

export default PostCard;
