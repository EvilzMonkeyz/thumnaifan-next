import React from "react";
import Heading from "@/components/Heading/Heading";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import { DreamSuggession } from "@/components/DreamSuggession";
import { DreamForecastInput } from "@/components/dream-forecast-input";
import WidgetCategories from "./blog/WidgetCategories";
import WidgetPosts from "./blog/WidgetPosts";
import siteLogo from "@/images/logo.png";
import Image from "next/image";

function PageHome() {
  return (
    // <div className="nc-PageHome relative overflow-hidden">
    //   <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
    //     <SectionSliderProductCard
    //       data={[
    //         PRODUCTS[4],
    //         SPORT_PRODUCTS[5],
    //         PRODUCTS[7],
    //         SPORT_PRODUCTS[1],
    //         PRODUCTS[6],
    //       ]}
    //     />

    //     <div className="py-24 lg:py-32 border-t border-b border-slate-200 dark:border-slate-700">
    //       <SectionHowItWork />
    //     </div>
    //     <SectionPromo1 />

    //     <div className="relative py-24 lg:py-32">
    //       <BackgroundSection />
    //       <SectionGridMoreExplore />
    //     </div>

    //     <SectionSliderProductCard
    //       heading="Best Sellers"
    //       subHeading="Best selling of the month"
    //     />

    //     <SectionPromo2 />

    //     <SectionSliderLargeProduct cardStyle="style2" />

    //     <SectionSliderCategories />

    //     <SectionPromo3 />

    //     <SectionGridFeatureItems />

    //     <div className="relative py-24 lg:py-32">
    //       <BackgroundSection />
    //       <div>
    //         <Heading rightDescText="From the Ciseco blog">
    //           The latest news
    //         </Heading>
    //         <SectionMagazine5 />
    //         <div className="flex mt-16 justify-center">
    //           <ButtonSecondary>Show all blog articles</ButtonSecondary>
    //         </div>
    //       </div>
    //     </div>
    //     <SectionClientSay />
    //   </div>
    // </div>
    <>
      <div className={`nc-PageSearch`} data-nc-id="PageSearch">
        <div
          className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
        />
        <div className="container">
          <header className="max-w-2xl mx-auto -mt-10 flex flex-col lg:-mt-7">
            {/* <Heading
              className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50"
              fontClass="text-3xl md:text-4xl 2xl:text-5xl font-semibold"
              isCenter
              desc=""
            >
              ทำนายความฝัน
            </Heading> */}
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
}

export default PageHome;
