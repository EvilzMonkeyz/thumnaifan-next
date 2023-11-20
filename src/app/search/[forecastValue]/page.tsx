"use client";

import { redirect, useRouter } from "next/navigation";
import Turnstile, { useTurnstile } from "react-turnstile";
import { useEffect, useState } from "react";
import Heading from "@/components/Heading/Heading";
import siteLogo from "@/images/logo.png";

import quotationImg from "@/images/quotation.png";
import quotationImg2 from "@/images/quotation2.png";
import Image from "next/image";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";

interface ResponseValue {
  results: string;
  luckyNumber: number[];
}

export default function DreamForecastValuePage({
  params,
}: {
  params: { forecastValue: string };
}) {
  const decodedThaiText = decodeURI(params.forecastValue);
  checkValue(decodedThaiText);
  const data: ResponseValue = {
    results: "",
    luckyNumber: [],
  };
  const [responseData, setResponseData] = useState(data);
  const [isVerify, setIsVerify] = useState(false);

  useEffect(() => {
    console.log({ isVerify });
    async function fetchData() {
      try {
        const data = await fetch(
          `/api/dream-forecast?input=${params.forecastValue}`
        );
        const response: ResponseValue = await data.json();
        setResponseData(response);
      } catch (error) {
        window.alert(
          "ไม่สามารถทำนายความฝันได้ในขณะนี้ กรุณาลองใหม่อีกครั้งภายหลัง"
        );
        redirect(`/`);
      }
    }
    if (isVerify) {
      fetchData();
    }
  }, [isVerify]);

  async function checkValue(value: string) {
    const regex = /^[ก-๙0-9]+$/;
    if (value) {
      if (!regex.test(value)) {
        redirect(`/dream-forecast`);
      }
    }
  }

  const turnstile = useTurnstile();
  const router = useRouter();

  const renderVerify = () => {
    return !isVerify ? (
      <div className="text-lg flex justify-center h-[796px] align-middle items-center">
        <Turnstile
          sitekey="0x4AAAAAAAMWwu20lIwERXCw"
          onVerify={async (token) => {
            setTimeout(() => {
              setIsVerify(!!token);
            }, 2000);
          }}
        />
      </div>
    ) : (
      renderResult()
    );
  };

  const renderResult = () => {
    return responseData?.results ? (
      <div className="nc-SectionClientSay relative flow-root my-4">
        <Image className="mx-auto my-7 w-52" src={siteLogo} alt="" />
        <Heading
          desc="ผลลัพธ์การทำนายความฝันอาจจะไม่เป็นไปดั่งใจหวัง ต้องขออภัยมา ณ ที่นี้"
          isCenter
        >
          นี่คือคำทำนายของคุณ
        </Heading>
        <div className="relative md:mb-16 max-w-2xl mx-auto">
          <div className={`mt-12 lg:mt-16 relative `}>
            <Image
              className="opacity-50 md:opacity-100 absolute -mr-16 lg:mr-3 right-full top-1"
              src={quotationImg}
              alt=""
            />
            <Image
              className="opacity-50 md:opacity-100 absolute -ml-16 lg:ml-3 left-full top-1"
              src={quotationImg2}
              alt=""
            />
            <div className="glide__track " data-glide-el="track">
              <ul className="glide__slides ">
                <li className="glide__slide flex flex-col items-center text-center">
                  <span className="block text-2xl">
                    {responseData?.results}
                  </span>
                  <span className="block mt-8 text-2xl font-semibold">
                    เลขเด็ดนำโชค :{" "}
                    {!!responseData?.luckyNumber &&
                      responseData.luckyNumber.join(", ")}
                  </span>

                  <div className=" py-20">
                    <ButtonPrimary href="/">กลับไปยังหน้าแรก</ButtonPrimary>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="text-lg flex justify-center h-[796px] align-middle items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  return <>{renderVerify()}</>;
}
