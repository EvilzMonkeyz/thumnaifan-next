import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import Badge from "@/shared/Badge/Badge";
import { _getImgRd, _getTagNameRd, _getTitleRd } from "@/contains/fakeData";
import PostCardMeta from "@/components/PostCardMeta/PostCardMeta";
import Link from "next/link";
import { CoreContent } from "pliny/utils/contentlayer";
import { Blog } from "contentlayer/generated";

export interface Card3Props {
  className?: string;
  post: CoreContent<Blog>;
}

const Card3: FC<Card3Props> = ({ post, className = "h-full" }) => {
  return (
    <div
      className={`nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group ${className}`}
      data-nc-id="Card3"
    >
      <div className="flex flex-col flex-grow">
        <div className="space-y-5 mb-4">
          {post.tags.map((tag, index) => (
            <Badge className="mr-2" key={index} name={tag} />
          ))}
          <div>
            <h2
              className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl`}
            >
              <Link
                href={`/${post.path}`}
                className="line-clamp-2 capitalize"
                title={"title"}
              >
                {post.title}
              </Link>
            </h2>
            <div className="hidden sm:block sm:mt-2">
              <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                {post.summary}
              </span>
            </div>
          </div>
          <PostCardMeta authors={post.authors} date={post.date} />
        </div>
      </div>

      <div
        className={`block flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0`}
      >
        <Link
          href={`/${post.path}`}
          className={`block w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 `}
        >
          <NcImage
            alt=""
            fill
            src={post.images[0]}
            containerClassName="absolute inset-0"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </Link>
      </div>
    </div>
  );
};

export default Card3;
