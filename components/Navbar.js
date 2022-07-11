import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto py-4 uppercase font-semibold text-lg bg-black">
      <Link href="/">
        <a className="text-white pl-5">Home</a>
      </Link>
    </div>
  );
};

export default Navbar;
