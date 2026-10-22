import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarButtons from "./NavbarButtons";
import NavLinks from "./NavLinks";

const Navbar = () => {
  <NavLinks />;
  return (
    <div className="fixed w-full z-50 shadow-sm bg-black mb-5 ">
      <div className="navbar  bg-base-100  bg-black  container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#0f1014] rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Profile" width={30} height={30} />
            <a className=" text-xl font-black text-white ">FITLOG</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 px-1">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end flex gap-1">
          <NavbarButtons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
