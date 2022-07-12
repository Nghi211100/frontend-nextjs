import Link from "next/link";
import React from "react";

const Header = ({ postpage }) => {
  return (
    <>
      <div className="h-80 bg-red-50 flex flex-col items-center">
        <div className="pt-10">
          {postpage ? (
            <div className="flex justify-center p-10">
              <img
                src="/images/image_header.jpg"
                className="rounded shadow-[8px_8px_0px_rgb(0,0,0,10%)] w-52 h-52 md:w-60 md:h-60 lg:w-70 lg:h-70"
              />
            </div>
          ) : (
            <></>
          )}
          <h1 className="font-mono text-4xl md:text-3xl font-extrabold ">
            Demo Project
          </h1>
        </div>
        <div className="text-2xl text-black flex justify-between">
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
