"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/tv.png";
import { CiSearch } from "react-icons/ci";
import { FaEquals } from "react-icons/fa";
import { useState, useEffect } from "react";
import LogoP from "./LogoP";
const NavBar = () => {
  const [navBar, setNav] = useState(false);
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 50) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div
      className={` z-10 text-white w-full fixed top-0 ${
        navBar ? "bg-black" : ""
      }   py-4 px-10  `}
    >
      <div className="mx-auto container  flex justify-between items-center font-Dm_sans  ">
        <LogoP Logo={Logo} />

        <form>
          <div className="hidden sm:flex items-center relative  ">
            <input
              type="search"
              suppressHydrationWarning
              placeholder="what do you want to watch?"
              className="bg-secondary px-6 py-3   border-white border-2  rounded-lg w-[250px] sm:w-[370px]  md:w-[400px] lg:w-[550px]  outline-none bg-transparent "
            />
            <span className="absolute right-0 px-2">
              <CiSearch />
            </span>
          </div>
        </form>

        <div className="hidden sm:flex items-center space-x-4 ">
          <p>Sign in</p>
          <span className="w-10 h-10 rounded-full bg-[#BE123C] flex items-center justify-center text-white">
            <FaEquals />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
