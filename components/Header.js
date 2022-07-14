import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Header = ({ pageType, lang }) => {
  const router = useRouter();
  return (
    <>
      <div className="absolute top-0 right-8 w-16 flex justify-between z-[99]">
        <Link href={router.asPath} locale="en">
          <a className={router.locale == "en" ? "font-bold text-cyan-500" : ""}>
            EN
          </a>
        </Link>
        <Link href={router.asPath} locale="vn">
          <a className={router.locale == "vn" ? "font-bold text-cyan-500" : ""}>
            VN
          </a>
        </Link>
      </div>
      <div
        className={
          pageType == "home"
            ? "h-130 md:h-140 bg-orange-50 flex flex-col items-center"
            : pageType == "detailPost"
            ? "h-76 md:h-80 bg-red-50 flex flex-col items-center absolute left-0 right-0 top-0"
            : pageType == "author"
            ? "h-[10.5rem] md:h-80 bg-red-50 flex flex-col items-center absolute left-0 right-0 top-0"
            : ""
        }
      >
        <div
          className={pageType == "home" ? "pt-10 relative" : "pt-9 md:pt-11 "}
        >
          {pageType == "home" ? (
            <div className="flex justify-center pt-10 md:pt-10 pb-12 md:pb-14">
              <img
                src="/images/image_header.jpg"
                className="rounded shadow-[4px_4px_0px_rgb(0,0,0,10%)] md:shadow-[8px_8px_0px_rgb(0,0,0,10%)] w-180 h-180 md:w-60 md:h-60 lg:w-70 lg:h-70"
              />
            </div>
          ) : (
            <></>
          )}
          <h1
            className={
              pageType == "home"
                ? "font-mono text-5xl md:text-6xl font-black text-center tracking-tighter mb-10 md:mb-11"
                : "font-mono text-3xl md:text-4.5xl font-black text-center tracking-tighter mb-1 md:mb-3"
            }
          >
            {lang.Demo_Project}
          </h1>
          {pageType == "home" ? (
            <p
              className={
                "font-mono text-4xl md:text-4.5xl text-center tracking-tighter mb-11 md:mb-12 text-zinc-700 px-8 md:px-0"
              }
            >
              {lang.The_project_demo_by_Vo_Van_Nghi}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div
          className={
            pageType == "home"
              ? "text-xl text-black flex justify-between md:w-1/4"
              : "text-base w-3/5 text-black flex justify-between md:w-1/4 md:text-xl"
          }
        >
          <Link href="/">
            <a
              className={
                router.pathname == "/"
                  ? "font-bold px-2 py-1 hover:rounded-2xl hover:bg-red-100"
                  : "px-2 py-1 hover:rounded-2xl hover:bg-red-100"
              }
            >
              {lang.Blog}
            </a>
          </Link>
          <Link href="/author">
            <a
              className={
                router.pathname == "/author"
                  ? "font-bold px-2 py-1 hover:rounded-2xl hover:bg-red-100"
                  : "px-2 py-1 hover:rounded-2xl hover:bg-red-100"
              }
            >
              {lang.Author}
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                router.pathname == "/about"
                  ? "font-bold px-2 py-1 hover:rounded-2xl hover:bg-red-100"
                  : "px-2 py-1 hover:rounded-2xl hover:bg-red-100"
              }
            >
              {lang.About}
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
