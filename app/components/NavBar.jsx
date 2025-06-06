import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Moon, MoonIcon, Sun, SunDim, ArrowUpRight, SunMedium, Menu, X } from 'lucide-react';

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {/* <div className="fixed top-0 right-0 w-11/12 z-10 translate-y-[80%] dark:hidden ">
        <Image src={assets.header_bg_color} alt="" className="w-full " />
      </div> */}
      <nav
        className={`w-full fixed px-5 lg:px-12 xl:px-[8%] py-4 flex items-center justify-between z-50  ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : " "
        }`}
      >
        {/* Background image */}
        {!isScroll && (
          <div className="absolute inset-0 -z-10 dark:hidden">
            <Image
              src={assets.header_bg_color}
              alt="header background"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <a href="#top" className="">
          <Image src={assets.logo} alt="" className="w-48 cursor-pointer " />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3   ${
            isScroll ? "" : "bg-zinc-50 text-black font-semibold border border-white  shadow-sm opacity-50 "
          }  `}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About Me{" "}
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)} className="w-6">
            {/* <Image
              // src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              src={isDarkMode ? <SunIcon/> : <Moon/>}
              alt=""
              className="w-6"
            /> */}
            {isDarkMode ? <SunMedium/> : <MoonIcon/> }
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact <ArrowUpRight/> {" "}
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            {/* <Image src={assets.menu_black} alt="" className="w-6" /> */}
            <Menu/>
          </button>
        </div>

        {/* mobile-menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            
            <X className="w-5 cursor-pointer" size={28} strokeWidth={6}/>
          </div>
          <li>
            <a href="#top" className="font-Ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo" onClick={closeMenu}>
              About Me{" "}
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
