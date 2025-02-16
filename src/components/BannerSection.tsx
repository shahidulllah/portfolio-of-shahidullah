"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function BannerSection() {
  return (
    <section className="relative lg:py-20 py-10 px-6 bg-gradient-to-r from-[#141330] to-[#57618c] dark:from-gray-900 dark:to-black text-white mt-[45px] lg:mt-[65px]">
      <div className="grid grid-cols-1 lg:max-w-7xl mx-auto sm:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
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
          <div>
            <Link
              href="https://drive.google.com/file/d/1kgnMEap6qKHCua06XVxvQJYIpu6AuRqW/view?usp=sharing"
              className="px-1 inline-block py-1 sm:w-fit rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 hover:bg-opacity-80 text-white mt-3 shadow-lg"
            >
              <span className="block bg-black dark:bg-gray-800 hover:bg-opacity-90 rounded-full px-5 py-2">
                Download Resume
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 dark:bg-gray-800 w-[250px] h-[250px] lg:w-[360px] lg:h-[360px] relative col-span-4 place-self-center mt-4 lg:mt-0 hidden lg:block shadow-xl"
        >
          <Image
            src="/images/hero.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={350}
            height={350}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default BannerSection;
