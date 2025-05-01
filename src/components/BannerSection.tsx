"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { DownloadIcon, Eye } from "lucide-react";

function BannerSection() {
  return (
    <section className="relative lg:py-20 py-10 px-6  dark:from-gray-900 dark:to-black text-white mt-[45px] lg:mt-[65px] border-b border-[#33353F]">
      <div className="grid grid-cols-1 lg:max-w-7xl mx-auto sm:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-5 lg:leading-tight font-extrabold">
            <span className="text-transparent text-4xl sm:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-br from-yellow-300 to-red-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Shahidullah",
                2500,
                "A Professional",
                300,
                "MERN Stack",
                500,
                "Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-3xl sm:text-3xl lg:text-4xl"
            />
          </h1>
          <p className="text-gray-200 text-base mb-6 lg:w-[650px] text-justify">
            Passionate junior web developer skilled in the MERN stack,
            experienced in creating dynamic web applications with HTML, CSS,
            Tailwind, JavaScript, React, Node.js, MongoDB, and Express. Eager to
            contribute to innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* Preview Resume */}
            <Link
              href="https://drive.google.com/file/d/1DAt5fkZ18TuYLom2LmUlzl03ANkksyU-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-yellow-700 via-orange-600 to-red-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Eye
                size={20}
                className="transition-transform duration-300 group-hover:rotate-6"
              />
              <span className="font-medium">Preview Resume</span>
            </Link>

            {/* Download Resume */}
            <a
              href="https://drive.google.com/uc?export=download&id=1DAt5fkZ18TuYLom2LmUlzl03ANkksyU-"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <DownloadIcon
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              <span className="font-medium">Download Resume</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
          className="rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 dark:bg-gray-800 w-[250px] h-[250px] lg:w-[360px] lg:h-[360px] relative col-span-4 place-self-center mt-4 lg:mt-0 hidden lg:block shadow-xl"
        >
          <Image
            src="/images/hero.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={350}
            height={350}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

export default BannerSection;
