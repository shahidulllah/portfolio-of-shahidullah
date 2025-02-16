"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useTheme } from "next-themes";
import MenuOverlay from "../utils/MenuOverLay";
import NavLink from "../utils/NavLink";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Blog",
    path: "/blogs",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed border-b border-[#33353F] top-0 left-0 right-0 z-10 bg-gradient-to-r from-[#141330] to-[#57618c] dark:from-gray-900 dark:to-black py-1">
      <div className="flex flex-wrap items-center justify-between lg:max-w-7xl mx-auto px-4">
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="hero image"
            className="px-3 lg:px-0"
            width={65}
            height={65}
          />
        </Link>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="dark:bg-gray-800 lg:hidden"
          >
            {mounted && theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-yellow-500" />
            ) : (
              <MoonIcon className="h-5 w-5 text-slate-200" />
            )}
          </button>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="dark:bg-gray-800 hidden lg:flex"
            >
              {mounted && theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-slate-200" />
              )}
            </button>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
