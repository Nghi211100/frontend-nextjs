import Link from "next/link";
import React from "react";

const Header = ({ postpage }) => {
  return (
    <>
      <div
        className={
          postpage == true
            ? "h-130 md:h-140 bg-orange-50 flex flex-col items-center"
            : "h-76 md:h-80 bg-red-50 flex flex-col items-center absolute left-0 right-0 -z-10"
        }
      >
        <div className={postpage == true ? "pt-10" : "pt-9 md:pt-11"}>
          {postpage == true ? (
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
              postpage == true
                ? "font-mono text-5xl md:text-6xl font-black text-center tracking-tighter mb-10 md:mb-11"
                : "font-mono text-3xl md:text-4.5xl font-black text-center tracking-tighter mb-1 md:mb-3"
            }
          >
            Demo Project
          </h1>
          {postpage == true ? (
            <p
              className={
                "font-mono text-4xl md:text-4.5xl text-center tracking-tighter mb-11 md:mb-12 text-zinc-700 px-8 md:px-0"
              }
            >
              The project demo by Vo Van Nghi
            </p>
          ) : (
            <></>
          )}
        </div>
        <div
          className={
            postpage == true
              ? "text-xl text-black flex justify-between md:w-1/4"
              : "text-base w-3/5 text-black flex justify-between md:w-1/4 md:text-xl"
          }
        >
          <Link href="/">
            <a className="px-2 py-1 hover:rounded-2xl hover:bg-red-100">Blog</a>
          </Link>
          <Link href="/author">
            <a className="px-2 py-1 hover:rounded-2xl hover:bg-red-100">
              Author
            </a>
          </Link>
          <Link href="/about">
            <a className="px-2 py-1 hover:rounded-full hover:bg-red-100">
              About
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
