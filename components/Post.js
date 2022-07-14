import React from "react";
import Link from "next/link";
import Date from "./Date";
import { useRouter } from "next/router";
const Post = ({ post, pageType, lang }) => {
  const router = useRouter();
  return (
    <>
      {pageType == "home" ? (
        <div className="flex pb-24 md:mb-0.5">
          <Link key={post.id} href={`/blog/${post.id}`}>
            <a className="w-full flex-col md:flex-row flex h-full md:h-68 md:justify-between">
              <div className="w-full md:w-408 h-full flex justify-center">
                <img
                  className="w-auto h-auto max-h-full rounded shadow-[8px_8px_0px_rgb(0,0,0,10%)]"
                  src={
                    process.env.URL_API +
                    post.attributes.photo.data.attributes.url
                  }
                  alt=""
                />
              </div>
              <div className="w-full md:w-408 h-full md:relative pt-4 md:pt-0">
                <p className="w-max text-slate-500 pt-3 md:pt-0 flex pb-4 md:pb-3.5">
                  {post.attributes.categories.data.map(
                    (x) => x.attributes.category_name
                  )}
                </p>
                <div className="text-left pb-6">
                  <h1 className="text-2xl font-bold pb-4 md:text-4xl">
                    {post.attributes.title}
                  </h1>

                  <p className="text-lg text-slate-500">
                    {post.attributes.content.substring(0, 100)}...
                  </p>
                </div>
                <div className=" pl-1 flex bottom-0 md:absolute mb-2">
                  <p className="text-lg py-auto my-auto pr-1">
                    {post.attributes.author.data.attributes.first_name}{" "}
                    {post.attributes.author.data.attributes.last_name}{" "}
                  </p>

                  <p className="text-slate-500 text-lg py-auto my-auto">
                    <Date dateString={post.attributes.createdAt} />
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ) : (
        <div className="md:mb-0.5 ">
          <div className="pb-4">
            <div className="flex justify-center h-59 md:h-[620px] mx-4">
              <img
                className="z-[99] w-auto h-auto max-h-full rounded shadow-[4px_4px_0px_rgb(0,0,0,10%)] md:shadow-[8px_8px_0px_rgb(0,0,0,10%)]"
                src={
                  process.env.URL_API +
                  post.attributes.photo.data.attributes.url
                }
                alt=""
              />
            </div>
            <div className="flex justify-center flex-col items-center mx-4 md:mx-64">
              <p className="pt-12 mt-1.5 text-gray-500">
                {post.attributes.categories.data.map(
                  (x) => x.attributes.category_name
                )}
              </p>
              <h4 className="text-4.5xl md:text-5xl font-bold pt-9 pb-7 md:pb-10 md:mb-0 mb-0.5">
                {post.attributes.title}
              </h4>
              <h4 className="text-xl md:text-2xl text-gray-500">
                {post.attributes.description}
              </h4>
              <div className="pt-9 flex justify-center w-full items-center text-center">
                <div className="text-lg py-auto my-auto mx-4">
                  {post.attributes.author.data.attributes.first_name}{" "}
                  {post.attributes.author.data.attributes.last_name}{" "}
                </div>
                <div className="text-lg text-slate-500 pl-1 my-auto">
                  <Date dateString={post.attributes.createdAt} />
                </div>
              </div>
              <p className="pt-[4.5rem] md:text-lg text-left">
                {post.attributes.content}
              </p>
              <div className="w-full md:w-408 h-full flex justify-center pt-12">
                <img
                  className="w-auto h-auto max-h-full rounded shadow-[8px_8px_0px_rgb(0,0,0,10%)]"
                  src={
                    process.env.URL_API +
                    post.attributes.photo.data.attributes.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="pt-[6rem] mx-[3rem] pb-[8rem]">
              <p className="text-lg font-bold pb-3">{lang.Share_this_post}</p>
              <div className="flex justify-center">
                <p>Twitter</p>
                <p className="px-3">Facebook</p>
                <p className="px-3">Pinterest</p>
                <p className="px-3">Zalo</p>
              </div>
            </div>
            <div className="border-t-2 border-solid mx-32 md:mx-[34rem] mb-[6rem]"></div>
            <div className="text-base pb-11">{lang.Written_by}</div>
            <div className="text-2xl font-bold py-auto my-auto mb-[6rem]">
              {post.attributes.author.data.attributes.first_name}{" "}
              {post.attributes.author.data.attributes.last_name}{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
