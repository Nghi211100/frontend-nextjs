import React from "react";
import Link from "next/link";
const Post = ({ post, home }) => {
  return (
    <div className="shadow rounded-sm text-left p-4 max-w-3xl mx-auto m-2">
      <div className="flex item-center pb-4 ">
        <p className="text-xl text-cyan-400 py-auto my-auto">
          {post.attributes.author.data.attributes.first_name}{" "}
          {post.attributes.author.data.attributes.last_name}{" "}
        </p>
        <p className="text-sm text-slate-500 pl-1 my-auto">
          {"- "}
          {post.attributes.title}
        </p>
      </div>
      {home == true ? (
        <>
          <Link key={post.id} href={`/posts/${post.id}`}>
            <a>
              <div className="pb-4">
                <h4>{post.attributes.description}</h4>

                <p>{post.attributes.content.substring(0, 100)}...</p>
              </div>
              <div className="shadow rounded-sm flex justify-center max-h-96 h-auto bg-slate-300">
                <img
                  className="max-h-96"
                  src={
                    process.env.URL_API +
                    post.attributes.photo.data.attributes.url
                  }
                  alt=""
                />
              </div>
            </a>
          </Link>
        </>
      ) : (
        <>
          <div className="pb-4">
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
