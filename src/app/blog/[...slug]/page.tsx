import React from "react";
import Avatar from "@/shared/Avatar/Avatar";
import Badge from "@/shared/Badge/Badge";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import SocialsList from "@/shared/SocialsList/SocialsList";
import { _getImgRd, _getPersonNameRd, _getTitleRd } from "@/contains/fakeData";
import { Authors, Blog, allAuthors, allBlogs } from "contentlayer/generated";
import {
  allCoreContent,
  coreContent,
  sortPosts,
} from "pliny/utils/contentlayer";
import Page404 from "@/app/not-found";
import siteMetadata from "@/data/siteMetadata";
import { Metadata } from "next";
import { components } from "@/components/MDXComponents";
import dayjs from "dayjs";
import "dayjs/locale/th";
import PostRelated from "../renderPostRelated";
import * as _ from "lodash";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join("/"));
  const post = allBlogs.find((p) => p.slug === slug);
  const authorList = post?.authors || ["default"];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults as Authors);
  });
  if (!post) {
    return;
  }

  const publishedAt = new Date(post.date).toISOString();
  const modifiedAt = new Date(post.lastmod || post.date).toISOString();
  const authors = authorDetails.map((author) => author.name);
  let imageList = [siteMetadata.socialBanner];
  if (post.images) {
    imageList = typeof post.images === "string" ? [post.images] : post.images;
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes("http") ? img : siteMetadata.siteUrl + img,
    };
  });

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: "./",
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  };
}

export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split("/") }));

  return paths;
};

export default async function Page({ params }: { params: { slug: string[] } }) {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);

  const slug = decodeURI(params.slug.join("/"));
  // Filter out drafts in production
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs));
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    return <Page404></Page404>;
  }

  const post = allBlogs.find((p) => p.slug === slug) as Blog;
  const authorList = post?.authors || ["default"];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults as Authors);
  });
  const mainContent = coreContent(post);
  const jsonLd = post.structuredData;
  jsonLd["author"] = authorDetails.map((author) => {
    return {
      "@type": "Person",
      name: author.name,
    };
  });

  console.log({ post });

  const newsDate = dayjs(post.date)
    .locale("th")
    .add(543, "year")
    .format("DD MMMM YYYY");

  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          {post.tags.map((tag, index) => (
            <Badge className="mr-2" key={index} name={tag} />
          ))}
          <h1
            className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
            title="Quiet ingenuity: 120,000 lunches and counting"
          >
            {post.title}
          </h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
            {post.summary}
          </span>

          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
              <MDXLayoutRenderer
                cl
                code={post.body.code}
                components={components as any}
                toc={post.toc}
              />
            </div>
          </div>

          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
              <Avatar
                containerClassName="flex-shrink-0"
                sizeClass="w-8 h-8 sm:h-11 sm:w-11 "
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <a className="block font-semibold" href="##">
                    {post.authors?.join(" ")}
                  </a>
                </div>
                <div className="text-xs mt-[6px]">
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {newsDate}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-1.5 sm:ml-3">
              <SocialsList />
            </div>
          </div>
        </div>
      </header>
    );
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="nc-PageSingle pt-8 lg:pt-16 ">
        {renderHeader()}

        <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-24">
          <div className="container ">
            <h2 className="text-3xl font-semibold">ข่าวอื่นๆ ที่น่าสนใจ</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {_.shuffle(posts)
                .slice(0, 4)
                .map((p, index) => {
                  return <PostRelated key={index} post={p}></PostRelated>;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
