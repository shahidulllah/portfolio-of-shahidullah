"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";

export default function BannerSectionV2() {
  return (
    <section className="relative w-full lg:pt-40 py-16 bg-[#282b36] text-white overflow-hidden">
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
              src="/images/hero.png"
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
            Hey, I&apos;m <span className="text-purple-300">Shahidullah</span>
            <br />
            <TypeAnimation
              sequence={[
                "A MERN Stack Developer",
                2000,
                "A Professional Coder",
                2000,
                "A JavaScript Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="text-purple-200 block mt-3"
            />
          </h1>

          <p className="mt-5 text-slate-300 max-w-xl">
            I build modern, fast, scalable web applications using MERN stack
            with clean UI and smooth UX.
          </p>

          <div className="flex flex-wrap gap-4 mt-7">
            <Link
              href="https://drive.google.com/file/d/1DAt5fkZ18TuYLom2LmUlzl03ANkksyU-/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-400 transition text-white shadow-lg"
            >
              <Eye size={18} />
              Preview Resume
            </Link>

            <a
              href="https://drive.google.com/uc?export=download&id=1DAt5fkZ18TuYLom2LmUlzl03ANkksyU-"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black shadow-lg hover:scale-105 transition"
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
