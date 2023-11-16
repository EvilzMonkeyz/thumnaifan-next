import React, { FC } from "react";
import Avatar from "@/shared/Avatar/Avatar";
import { _getPersonNameRd } from "@/contains/fakeData";
import Link from "next/link";
import { IsoDateTimeString } from "contentlayer/core";
import dayjs from "dayjs";
import "dayjs/locale/th";

export interface PostCardMetaProps {
  className?: string;
  hiddenAvatar?: boolean;
  authors?: string[];
  date?: IsoDateTimeString;
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "leading-none",
  hiddenAvatar = false,
  authors,
  date,
}) => {
  const newsDate = dayjs(date)
    .locale("th")
    .add(543, "year")
    .format("DD MMMM YYYY");

  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm ${className}`}
      data-nc-id="PostCardMeta"
    >
      <Link
        href=""
        className="flex-shrink-0 relative flex items-center space-x-2"
      >
        {!hiddenAvatar && (
          <Avatar radius="rounded-full" sizeClass={"h-7 w-7 text-sm"} />
        )}
        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
          {authors?.join(" ")}
        </span>
      </Link>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
          {newsDate}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
