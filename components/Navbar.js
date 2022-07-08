import Link from "next/Link";
import React from "react";
import Style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={Style.navbar}>
      <Link href="/">
        <a className={Style.home_link}>Home</a>
      </Link>
    </div>
  );
};

export default Navbar;
