"use client";

import React, { FC } from "react";
import Heading from "@/components/Heading/Heading";
import { usePathname } from "next/navigation";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import WidgetCategories from "./WidgetCategories";
import WidgetPosts from "./WidgetPosts";
import Card3 from "./Card3";
import { allBlogs, Blog } from "contentlayer/generated";
import {
  sortPosts,
  allCoreContent,
  CoreContent,
} from "pliny/utils/contentlayer";
import { PaginationProps, Pagination } from "@/components/Pagination";
// import tagData from "../tag-data.json";

const MAX_DISPLAY = 5;

//
export interface SectionLatestPostsProps {
  className?: string;
  postCardName?: "card3";
  pagination?: PaginationProps;
  posts: CoreContent<Blog>[];
  initialDisplayPosts?: CoreContent<Blog>[];
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  postCardName = "card3",
  className = "",
  initialDisplayPosts = [],
  posts,
  pagination,
}) => {
  const displayPosts =
    initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  return (
    <div className={`nc-SectionLatestPosts relative ${className}`}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
          <Heading>ข่าวน่าสนใจ 🎈</Heading>
          <div className={`grid gap-6 md:gap-8 grid-cols-1`}>
            {displayPosts.slice(0, MAX_DISPLAY).map((post, index) => (
              <Card3 post={post} key={index} className="" />
            ))}
          </div>
          <div className="flex flex-col mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            {/* <Pagination /> */}
            {/* <ButtonPrimary>Show me more</ButtonPrimary> */}
            {pagination && pagination.totalPages > 1 && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
              />
            )}
          </div>
        </div>
        <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
          <WidgetCategories />
          <WidgetPosts />
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
