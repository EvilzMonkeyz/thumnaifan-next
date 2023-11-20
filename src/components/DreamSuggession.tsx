"use client";

import Nav from "@/shared/Nav/Nav";
import NavItem from "@/shared/NavItem/NavItem";
import { useRouter } from "next/navigation";
import React from "react";

export const DreamSuggession = () => {
  const router = useRouter();
  const resentRecommendList = [
    "ฝันว่าโดนงูกัด",
    "ฝันว่าท้อง",
    "ฝันว่าฟันหลุด",
    "ฝันว่าตัดผมสั้น",
    "ฝันว่ารถหาย",
    "ฝันว่าคลอดลูก",
    "ฝันถึงแฟนเก่า",
    "ฝันว่าไปงานศพ",
    "ฝันว่าตัวเองตาย",
    "ฝันว่าแฟนนอกใจ",
    "ฝันว่าโดนยิง",
    "ฝันว่าได้ทอง",
    "ฝันว่าจับปลา",
    "ฝันเห็นเลือด",
    "ฝันเห็นผี",
    "ฝันว่าได้เงิน",
    "ฝันเห็นแมว",
    "ฝันเห็นเพื่อนเก่า",
    "ฝันเห็นเสือ",
    "ฝันว่าได้จับปลา",
    "ฝันเห็นพระสงฆ์",
    "ฝันว่าตัดผมสั้น",
    "ฝันว่าตัวเองตาย",
    "ฝันเห็นเพื่อนเก่า",
    "ฝันว่าร้องไห้",
    "ฝันเห็นพระพิฆเนศ",
    "ฝันว่าแฟนนอกใจ",
    "ฝันว่ามีคนให้เงิน",
    "ฝันว่าจับขี้",
    "ฝันว่าจับปลา",
    "ฝันเห็นเลือด",
    "ฝันเห็นงูเห่า",
    "ฝันว่ารองเท้าหาย",
    "ฝันว่าพ่อเสียชีวิต",
    "ฝันเห็นงูตัวใหญ่",
  ];

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-3">
        {resentRecommendList.map((item, index) => (
          <button
            key={index}
            className="relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center align-middle
          text-sm font-semibold select-none overflow-hidden z-0 cursor-pointer border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
            onClick={() => {
              const encodedThaiText = encodeURI(item);
              router.push(`/search/${encodedThaiText}`);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
