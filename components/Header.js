import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
            ? "h-[665px] md:h-[718px] bg-[#FDF9F6] flex flex-col items-center"
            : pageType == "detailPost"
            ? "h-[328px] md:h-[347px] bg-[#FDF9F6] flex flex-col items-center absolute left-0 right-0 top-0"
            : pageType == "author"
            ? "h-[10.5rem] md:h-80 bg-[#FDF9F6] flex flex-col items-center absolute left-0 right-0 top-0"
            : ""
        }
      >
        <div className="container md:max-w-[900px] md:mx-auto px-4 text-center">
          <div
            className={pageType == "home" ? "pt-10 relative" : "pt-9 md:pt-11 "}
          >
            {pageType == "home" ? (
              <div className="flex justify-center pb-[3.22rem] pt-10">
                <img
                  src="/images/christin-hume-Hcfwew744z4-unsplash-1.jpg"
                  className="rounded shadow-[4px_4px_0px_rgb(0,0,0,10%)] md:shadow-[8px_8px_0px_rgb(0,0,0,10%)] w-180 h-180 md:w-60 md:h-60 lg:w-70 lg:h-70"
                />
              </div>
            ) : (
              <></>
            )}
            <h1
              className={
                pageType == "home"
                  ? "font-mono text-5xl md:text-6xl font-black text-center tracking-tighter mb-[2.4rem] md:mb-[2.8rem]"
                  : "font-mono text-3xl md:text-4.5xl font-black text-center tracking-tighter mb-1 md:mb-[0.6rem]"
              }
            >
              {lang.Demo_Project}
            </h1>
            {pageType == "home" ? (
              <p
                className={
                  "font-mono text-[2.15rem] md:text-[44px] text-center leading-[2.4rem] tracking-tighter mb-[2.95rem] md:mb-[3.3rem] text-[#1B1B1B] px-8 md:px-0"
                }
              >
                {lang.The_project_demo_by_Vo_Van_Nghi}.
              </p>
            ) : (
              <></>
            )}
          </div>
          <div
            className={
              pageType == "home"
                ? "text-[1.15rem] text-center md:text-xl text-black flex justify-center gap-4 md:w-[45%] mx-auto"
                : "text-[1.15rem] text-center md:text-xl text-black flex justify-center gap-4 md:w-[45%] mx-auto"
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
            <Link href="/about">
              <a
                className={
                  router.pathname == "/styleguide"
                    ? "font-bold px-2 py-1 hover:rounded-2xl hover:bg-red-100"
                    : "px-2 py-1 hover:rounded-2xl hover:bg-red-100"
                }
              >
                {lang.About}
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
                {lang.Style_Guide}
              </a>
            </Link>
          </div>
          <div className="md:pt-1">
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: 17, color: "black" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
