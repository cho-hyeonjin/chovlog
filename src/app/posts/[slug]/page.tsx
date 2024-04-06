import MDViewer from "@/components/MDViewer";
import Hr from "@/components/common/Hr";
import { getPostData } from "@/service/posts";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const { title, description, date, imagePath, path, content } =
    await getPostData(slug);

  return (
    <article className="relative pb-16 overflow-hidden">
      <section>
        {/* Layout - PostPage Header */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl mx-auto mb-4 max-w-3xl text-center">
            {title}
          </h1>
          <div className="mt-2 flex justify-center gap-1">
            <span className="text-sm font-medium underline underline-offset-4 sm:text-base">
              {description}
            </span>
          </div>
          <div className="mt-2 flex w-full flex-col justify-between md:flex-row md:items-center">
            {/* <div className="mx-auto flex gap-2 text-neutral-600 dark:text-neutral-400">
            <div>날짜</div>
            <div>읽는데 걸리는 시간</div>
          </div> */}
            <Hr className="mt-4" />
          </div>
        </div>

        {/* Layout - PostPage Contents */}
        <div className="relative gap-8 lg:flex">
          {/* Layout - MD Contents */}
          <div className="prose prose-neutral w-full max-w-3xl font-spoqa dark:prose-dark">
            <MDViewer content={content} />
          </div>
          {/* Layout - TOC of This MD Contents */}
          <div className="mt-12 ml-auto">
            <div className="sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block">
              {/* TOCBanner Component */}
              <div className="overflow-hidden rounded-xl border text-center border-neutral-200 transition-all">
                <div className="text-xl font-extrabold">
                  <h1 className="">TOC</h1>
                  <span className="text-sm font-medium">TOC 자리</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default PostPage;
