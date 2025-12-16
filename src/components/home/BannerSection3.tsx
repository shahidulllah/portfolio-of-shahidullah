"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";

export default function BannerSection3() {
  return (
    <section className="relative w-full pt-28 sm:pt-32 lg:pt-40 pb-16 dark:bg-[#282b36] text-black dark:text-white overflow-hidden">
      
      {/* Glow Light */}
      <div className="absolute top-1/2 left-1/2 sm:left-1/3 w-[320px] sm:w-[450px] lg:w-[600px] h-[320px] sm:h-[450px] lg:h-[600px] bg-purple-600/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center relative z-10">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="rounded-3xl overflow-hidden shadow-[0_0_60px_-15px] shadow-purple-400/40"
          >
            <Image
              src="/images/profile.png"
              alt="Shahidullah"
              width={380}
              height={380}
              priority
              className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-auto rounded-3xl"
            />
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Hey, I&apos;m{" "}
            <span className="dark:text-purple-300 text-purple-900">
              Shahidullah
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "A Professional",
              2000,
              "Full Stack Developer",
              4000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            className="block mt-3 text-lg sm:text-xl lg:text-3xl dark:text-purple-200 text-purple-600 font-bold"
          />

          <p className="mt-5 text-sm sm:text-base dark:text-slate-300 max-w-xl mx-auto md:mx-0">
            Passionate Full Stack Developer skilled in backend and frontend,
            experienced in building dynamic web applications using HTML, CSS,
            Tailwind, JavaScript, React, Next.js, Node.js, MongoDB, Mongoose,
            and Express. Eager to contribute to innovative projects.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-7 justify-center md:justify-start">
            <Link
              href="https://drive.google.com/file/d/1DAt5fkZ18TuYLom2LmUlzl03ANkksyU-/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] text-gray-900 shadow-lg border border-slate-500 dark:text-white transition-all duration-300 hover:scale-105"
            >
              <Eye size={18} />
              Preview Resume
            </Link>

            <a
              href="https://drive.google.com/uc?export=download&id=1DAt5fkZ18TuYLom2LmUlzl03ANkksyU-"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] text-gray-900 shadow-lg border border-slate-500 dark:text-white transition-all duration-300 hover:scale-105"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
