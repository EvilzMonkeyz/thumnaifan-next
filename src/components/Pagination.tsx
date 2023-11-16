"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const [focus, setFocus] = React.useState<"left" | "right" | "none">("right");
  const pathname = usePathname();
  const basePath = pathname.split("/")[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;
  const router = useRouter();

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5 w-full">
      <nav className="flex justify-between">
        <button
          className={`border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center ${
            focus === "left" ? "border-2" : ""
          }`}
          onClick={(e) => {
            if (prevPage) {
              router.push(
                currentPage - 1 === 1
                  ? `/${basePath}/`
                  : `/${basePath}/page/${currentPage - 1}`
              );
            }
          }}
          title="Prev"
          data-glide-dir="<"
          onMouseEnter={() => setFocus("left")}
          onMouseLeave={() => {
            if (focus === "left") {
              setFocus("none");
            }
          }}
          disabled={!prevPage}
        >
          <svg
            className="w-5 h-5 rtl:rotate-180"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5 12H3.67004"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          className={` border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center ${
            focus === "right" ? "border-2" : ""
          }`}
          onClick={(e) => {
            if (nextPage) {
              router.push(`/${basePath}/page/${currentPage + 1}`);
            }
          }}
          title="Next"
          data-glide-dir=">"
          onMouseEnter={() => setFocus("right")}
          onMouseLeave={() => {
            if (focus === "right") {
              setFocus("none");
            }
          }}
          disabled={!nextPage}
        >
          <svg
            className="w-5 h-5 rtl:rotate-180"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 12H20.33"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
