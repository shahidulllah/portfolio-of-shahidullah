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
import { useSession, signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

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
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

          {/* Login/Profile Section */}
          {!session ? (
            <Link href='/login'>
              <button className="bg-white text-black px-4 py-2 rounded-full">
                Login
              </button>
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2"
              >
                <Image
                  src={session.user?.image || "/images/default-profile.png"}
                  alt="User"
                  width={35}
                  height={35}
                  className="rounded-full border border-gray-400"
                  priority
                />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-[#4e5b91] dark:bg-gray-900 shadow-lg rounded-lg py-3 px-4 z-50 transition-all duration-300">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-center text-white dark:text-white">
                      {session.user?.name || "User Name"}
                    </h4>
                    <p className="text-sm text-gray-400 text-center ">
                      {session.user?.email || "user@example.com"}
                    </p>
                  </div>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-white hover:bg-gray-500 dark:hover:bg-gray-800 hover:rounded-md border-b-2 "
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-500 dark:hover:bg-gray-800"
                  >
                    <LogOut className="inline-block w-5 h-5 mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
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
