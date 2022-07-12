import Link from "next/link";
import React from "react";

const Author = ({ allauthors }) => {
  return (
    <>
      <div className="w-1/4 flex flex-col fixed right-0 top-16 items-center justify-center">
        <div className="font-bold text-xl w-full text-left p-5">Authors</div>
        {allauthors.data.map((x) => (
          <Link href={`/category/${x.id}`} key={x.id}>
            <a className="text-lg p-3 w-full hover:bg-cyan-300 hover:text-white border-b border-slate-200 last:border-none">
              {x.attributes.first_name} {x.attributes.last_name}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Author;
