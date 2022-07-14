import Link from "next/link";
import React from "react";
import Date from "./Date";

const Author = ({ authordata, lang }) => {
  let postCount = 0;
  authordata.attributes.posts.data.map(() => {
    postCount++;
  });
  return (
    <>
      <div className="flex mx-3 my-3">
        <Link key={authordata.id} href={`/author/${authordata.id}`}>
          <a className="w-full">
            <div className="">
              <div className="flex flex-col md:flex-row md:py-8 text-center items-center justify-center">
                <div className="flex">
                  <img
                    className="w-[100px] h-[100px] rounded-[50%] shadow-[4px_4px_0px_rgb(0,0,0,10%)]"
                    src={
                      process.env.URL_API +
                      authordata.attributes.photo.data.attributes.url
                    }
                    alt=""
                  />
                </div>
                <div className="md:w-1/3 flex md:justify-between">
                  <div className="flex font-bold md:pl-5">
                    {authordata.attributes.first_name}{" "}
                    {authordata.attributes.last_name}
                  </div>
                </div>
                <div className="flex flex-col items-center md:text-left">
                  <div className="flex text-sm text-gray-600">
                    <label className="pr-2">{lang.Join_on}: </label>
                    <Date dateString={authordata.attributes.createdAt} />
                  </div>
                  <div className="flex text-sm text-gray-600">
                    <label className="pr-2">{lang.Total_posts}: </label>
                    {postCount}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Author;
