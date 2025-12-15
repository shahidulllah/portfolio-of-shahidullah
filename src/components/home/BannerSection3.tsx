"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";

export default function BannerSection3() {
  return (
    <section className="relative w-full lg:pt-44 py-20 dark:bg-[#282b36]  text-black dark:text-white overflow-hidden">
      {/* Glow Light */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 relative z-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="rounded-3xl overflow-hidden shadow-[0_0_60px_-15px] shadow-purple-400/40"
          >
            <Image
              src="/images/phero.png"
              alt="Me"
              width={380}
              height={380}
              className="rounded-3xl"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Hey, I&apos;m <span className="dark:text-purple-300 text-purple-900">Shahidullah</span>
            <br />
            <TypeAnimation
              sequence={["A Professional", 2000, "Full Stack Developer",4000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="dark:text-purple-200 text-purple-600 block mt-3"
            />
          </h1>

          <p className="mt-5 dark:text-slate-300 max-w-xl">
            Passionate Full Stack Developer skilled in the backend and frontend,
            experienced in creating dynamic web applications with HTML, CSS,
            Tailwind, JavaScript, React, Next.js, Node.js, MongoDB with mongose
            and Express. Eager to contribute to innovative projects.
          </p>

          <div className="flex flex-wrap gap-4 mt-7">
            <Link
              href="https://drive.google.com/file/d/1DAt5fkZ18TuYLom2LmUlzl03ANkksyU-/view?usp=sharing"
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] text-gray-900 shadow-lg shadow-slate-700 border border-slate-500 dark:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Eye size={18} />
              Preview Resume
            </Link>

            <a
              href="https://drive.google.com/uc?export=download&id=1DAt5fkZ18TuYLom2LmUlzl03ANkksyU-"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] text-gray-900 shadow-lg shadow-slate-700 border border-slate-500 dark:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
