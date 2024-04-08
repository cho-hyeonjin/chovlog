import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import TestImg from "@/public/lego-techronaut.jpg";
import Image from "next/image";
import { Post } from "@/.contentlayer/generated";
import Link from "next/link";

interface IBlogCard {
  post: Post;
}

const BlogCard: React.FC<IBlogCard> = ({ post }) => {
  return (
    <Link href={`blogs/${post.slug}`}>
      <Card
        // className="bg-zinc-800 border-none min-h-[420px] dark text-white w-full overflow-hidden transform transition-transform hover:scale-105"
        // className="overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800"
        className="overflow-hidden rounded-xl bg-neutral-800 border-none text-neutral-200"
      >
        <Image
          width={420}
          height={268}
          src={TestImg}
          alt="Card Image"
          // className="rounded-tl-md rounded-tr-md"
          className="h-64 w-full object-cover"
        />
        <CardHeader className="h-[80px] ">
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="h-full md:h-[150px]">
          <CardDescription className="line-clamp-6 text-neutral-400">
            {post.description}
            {post.description}
            {post.description}
            {post.description}
            {post.description}
          </CardDescription>
        </CardContent>
        {/* <CardFooter className='flex justify-between'>
        </CardFooter> */}
      </Card>
    </Link>
  );
};

export default BlogCard;
