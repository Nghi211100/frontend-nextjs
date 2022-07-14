import Link from "next/link";
import React from "react";

const Menu = ({ lang, allcategories }) => {
  return (
    <>
      <div className="w-1/4 flex flex-col fixed left-0 top-16 items-center justify-center">
        <div className="font-bold text-xl w-full text-left p-5">
          {lang.Categories}
        </div>
        {allcategories.data.map((x) => (
          <Link href={`/category/${x.id}`} key={x.id}>
            <a className="text-lg p-3 w-full hover:bg-cyan-300 hover:text-white border-b border-slate-200 last:border-none">
              {x.attributes.category_name}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;
