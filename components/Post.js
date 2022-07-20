import React from "react";
import Link from "next/link";
import Date from "./Date";
import ReactMarkdown from "react-markdown";
const Post = ({ post, pageType, lang }) => {
  return (
    <>
      {pageType == "home" ? (
        <div className="flex pb-24 md:mb-0.5">
          <Link key={post.id} href={`/blog/${post.id}`}>
            <a className="w-full flex-col md:flex-row flex h-full md:h-[278px] md:justify-between">
              {post.attributes.photo.data ? (
                <div className="w-full md:w-408 h-full flex justify-center">
                  <img
                    className="w-auto h-auto max-h-full rounded shadow-[8px_8px_0px_rgb(0,0,0,10%)]"
                    src={post.attributes.photo.data.attributes.url}
                    alt=""
                  />
                </div>
              ) : (
                <></>
              )}

              <div className="w-full md:w-408 h-full md:relative pt-4 md:pt-0">
                <p className="w-max text-slate-500 pt-[0.98rem] md:pt-0 flex pb-4 md:pb-3.5">
                  {post.attributes.categories.data.map(
                    (x) => x.attributes.category_name
                  )}
                </p>
                <div className="text-left pb-6">
                  <h1 className="text-2xl text-black font-bold pb-[0.85rem] md:text-[33px] md:pt-[3.1px]">
                    {post.attributes.title}
                  </h1>

                  <p className="text-lg md:text-[20px] md:pt-[8px] text-slate-500 md:leading-[30px] leading-[27.2px]">
                    {post.attributes.description}
                  </p>
                </div>
                <div className="text-[17px] pt-[0.19rem] pl-1 flex bottom-0 mb-2">
                  <div className="py-auto my-auto pr-8 flex items-center text-zinc-600">
                    <div className="w-[32px] mr-2">
                      <img
                        className="w-auto h-auto max-h-full rounded-full"
                        src={
                          post.attributes.author.data.attributes.photo.data
                            .attributes.url
                        }
                        alt=""
                      />
                    </div>
                    <div>
                      {post.attributes.author.data.attributes.first_name}{" "}
                      {post.attributes.author.data.attributes.last_name}{" "}
                    </div>
                  </div>

                  <p className="text-slate-500 py-auto my-auto">
                    <Date dateString={post.attributes.createdAt} />
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ) : (
        <div className="pb-4 md:max-w-[calc(660px_+_2rem)] px-4 md:px-0 mx-auto">
          <div className="flex justify-center mx-auto">
            <img
              className="z-[99] rounded shadow-[4px_4px_0px_rgb(0,0,0,10%)] md:shadow-[8px_8px_0px_rgb(0,0,0,10%)]"
              src={post.attributes.photo.data.attributes.url}
              alt=""
            />
          </div>
          <div className="flex justify-center flex-col items-center md:px-4">
            <p className="pt-12 mt-1.5 text-gray-500">
              {post.attributes.categories.data.map(
                (x) => x.attributes.category_name
              )}
            </p>
            <h4 className="text-4.5xl md:text-5xl font-bold pt-[1.8rem] pb-[1.9rem] md:pb-[2.6rem] md:pt-[2.15rem] md:mb-0 mb-0.5 leading-[3.05rem]">
              {post.attributes.title}
            </h4>
            <h4 className="text-xl md:text-[1.55rem] text-gray-500 leading-[30px] md:leading-[34.8px]">
              {post.attributes.description}
            </h4>
            <div className="pt-[2.15rem] flex justify-center w-full items-center text-center">
              <div className="text-[16px] py-auto my-auto flex items-center ">
                <div className="w-[32px] mr-2">
                  <img
                    className="w-auto h-auto max-h-full rounded-full"
                    src={
                      post.attributes.author.data.attributes.photo.data
                        .attributes.url
                    }
                    alt=""
                  />
                </div>
                <div>
                  {post.attributes.author.data.attributes.first_name}{" "}
                  {post.attributes.author.data.attributes.last_name}{" "}
                </div>
              </div>
              <div className="text-lg text-slate-500 pl-1 my-auto">
                <Date dateString={post.attributes.createdAt} />
              </div>
            </div>
            <div className="pt-[4.5rem] md:text-lg text-left">
              <ReactMarkdown children={post.attributes.content} />
            </div>
            <div className="w-full md:w-408 h-full flex justify-center pt-12">
              <img
                className="w-auto h-auto max-h-full rounded shadow-[8px_8px_0px_rgb(0,0,0,10%)]"
                src={
                  process.env.URL_API +
                  "post.attributes.photo.data.attributes.url"
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
      )}
    </>
  );
};

export default Post;
