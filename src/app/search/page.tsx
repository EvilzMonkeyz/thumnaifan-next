"use client";

import React from "react";
import { DreamForecastInput } from "@/components/dream-forecast-input";
import { DreamSuggession } from "@/components/DreamSuggession";
import Heading from "@/components/Heading/Heading";
import WidgetCategories from "../blog/WidgetCategories";
import WidgetPosts from "../blog/WidgetPosts";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import Image from "next/image";
import siteLogo from "@/images/logo.png";

const PageSearch = ({}) => {
  return (
    <>
      <div className={`nc-PageSearch`} data-nc-id="PageSearch">
        <div
          className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
        />
        <div className="container">
          <header className="max-w-2xl mx-auto -mt-10 flex flex-col lg:-mt-7">
            <Heading
              className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50"
              fontClass="text-3xl md:text-4xl 2xl:text-5xl font-semibold"
              isCenter
              desc=""
            >
              ทำนายความฝัน
            </Heading>
          </header>
        </div>
      </div>

      <div className="nc-BlogPage overflow-hidden relative mb-8">
        <BgGlassmorphism />
        <div className="container relative">
          <div className={`nc-SectionLatestPosts relative`}>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14 p-2">
                <DreamForecastInput></DreamForecastInput>
                <DreamSuggession></DreamSuggession>

                <Image className="mx-auto my-7 w-[450px] opacity-20" src={siteLogo} alt="" />
              </div>
              <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 p-2 ">
                <WidgetCategories />
                <WidgetPosts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSearch;
