import React from "react";
import Link from "next/link";
import Date from "./Date";
const Post = ({ post, postpage }) => {
  return (
    <div className="flex py-3 border-b boder-solid md:p-5">
      {postpage == true ? (
        <>
          <Link key={post.id} href={`/blog/${post.id}`}>
            <a className="w-full flex-col md:flex-row flex h-full md:h-60">
              <div className="w-full md:w-1/2 h-full flex justify-center md:pr-5">
                <img
                  className="w-auto h-auto max-h-full rounded shadow-[8px_8px_0px_rgb(0,0,0,10%)]"
                  src={
                    process.env.URL_API +
                    post.attributes.photo.data.attributes.url
                  }
                  alt=""
                />
              </div>
              <div className="w-full md:w-1/2 h-full md:relative">
                <p className="w-max text-slate-500 pt-3 md:pt-0">
                  {post.attributes.categories.data.map(
                    (x) => x.attributes.category_name
                  )}
                </p>
                <div className="pb-4 text-left pb-2">
                  <h1 className="text-2xl font-bold pb-2">
                    {post.attributes.title}
                  </h1>

                  <p>{post.attributes.content.substring(0, 100)}...</p>
                </div>
                <div className="text-sm text-slate-500 pl-1 flex bottom-0 md:absolute">
                  <p className="text-lg text-cyan-400 py-auto my-auto pr-1">
                    {post.attributes.author.data.attributes.first_name}{" "}
                    {post.attributes.author.data.attributes.last_name}{" "}
                  </p>

                  <p className="py-auto my-auto">
                    {" - "}
                    <Date dateString={post.attributes.createdAt} />
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </>
      ) : (
        <>
          <div className="pb-4">
            <div className="flex item-center pb-4 ">
              <p className="text-xl text-cyan-400 py-auto my-auto">
                {post.attributes.author.data.attributes.first_name}{" "}
                {post.attributes.author.data.attributes.last_name}{" "}
              </p>
              <p className="text-sm text-slate-500 pl-1 my-auto mr-auto">
                {"- "}
                <Date dateString={post.attributes.createdAt} />
              </p>
              <p className=" bg-slate-300 rounded-md p-2">
                {post.attributes.categories.data.map(
                  (x) => x.attributes.category_name
                )}
              </p>
            </div>
            <h4>{post.attributes.description}</h4>

            <p>{post.attributes.content}</p>
          </div>
          <div className="shadow rounded-sm flex justify-center max-h-96 h-auto bg-slate-300">
            <img
              className="max-h-96"
              src={
                process.env.URL_API + post.attributes.photo.data.attributes.url
              }
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
