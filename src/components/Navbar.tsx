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
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Projects", path: "/projects" },
  { title: "Blog", path: "/blogs" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 border-b border-gray-600 bg-gradient-to-r from-[#141330] to-[#57618c] dark:from-gray-900 dark:to-black py-2">
      <div className="flex items-center justify-between lg:max-w-7xl mx-auto px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="px-3 lg:px-0"
            width={65}
            height={65}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative px-1 py-1 text-white transition duration-300 hover:text-white ${
                pathname === link.path ? "border-b-2 border-[#d7e05b] " : ""
              }`}
            >
              {link.title}
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden lg:flex"
          >
            {mounted && theme === "dark" ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-slate-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className=""
          >
            {mounted && theme === "dark" ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-slate-200" />
            )}
          </button>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 rounded-md text-white border border-gray-400"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {navbarOpen && (
        <div className="absolute top-[57px] left-0 w-full bg-[#141330] dark:bg-black border-t border-gray-600 shadow-md md:hidden text-center">
          <ul className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`px-3 py-1 justify-center text-gray-300 text-lg transition duration-300 hover:text-white ${
                    pathname === link.path
                      ? "border-b-2 border-yellow-500 text-yellow-500"
                      : ""
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
