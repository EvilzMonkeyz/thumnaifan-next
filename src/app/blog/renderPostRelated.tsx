import { _getImgRd, _getTitleRd, _getPersonNameRd } from "@/contains/fakeData";
import Badge from "@/shared/Badge/Badge";
import { Blog } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { CoreContent } from "pliny/utils/contentlayer";
import { FC } from "react";
import dayjs from "dayjs";
import "dayjs/locale/th";

export interface PostRelatedProps {
  post: CoreContent<Blog>;
}

const PostRelated: FC<PostRelatedProps> = ({ post }) => {
  const newsDate = dayjs(post.date)
    .locale("th")
    .add(543, "year")
    .format("DD MMMM YYYY");
  return (
    <>
      <div className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group">
        <Link href={`/${post.path}`} />
        <Image
          alt="Related"
          fill
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          src={post.images[0]}
          sizes="400px"
        />
        <div>
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
        </div>
        <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
          <Badge name={post.tags[0]} />

          <h2 className="block text-lg font-semibold text-white ">
            <span className="line-clamp-2">{post.title}</span>
          </h2>

          <div className="flex">
            <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {post.authors?.join(" ")}
            </span>
            <span className="mx-1.5 font-medium">·</span>
            <span className="font-normal truncate">{newsDate}</span>
          </div>
        </div>
        <Link href={`/${post.path}`} />
      </div>
    </>
  );
};

export default PostRelated;
