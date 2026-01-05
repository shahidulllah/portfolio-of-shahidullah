"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";

export default function BannerSection4() {
  return (
    <section className="relative w-full min-h-screen bg-[#0f1d2e] text-white py-20 px-6 overflow-hidden">
      {/* Neon Edges */}
      <div className="absolute inset-0 border-t-2 border-b-2 border-cyan-500/20" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Image with Glass Circle */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-white/10 backdrop-blur-xl border border-cyan-300/30 shadow-[0_0_60px_-15px] shadow-cyan-300/50 overflow-hidden flex items-center justify-center">
            <Image
              src="/images/hero.png"
              alt="My Photo"
              width={450}
              height={450}
              className="rounded-full"
            />
          </div>

          {/* Buttons Under Image */}
          <div className="flex gap-4 mt-6 justify-center">
            <Link
              href="https://drive.google.com/file/d/1DAt5fkZ18TuYLom2LmUlzl03ANkksyU-/view?usp=sharing"
              target="_blank"
              className="px-5 py-2 rounded-full bg-cyan-400/20 backdrop-blur-lg border border-cyan-300/40 hover:bg-cyan-400/30 transition flex items-center gap-2"
            >
              <Eye size={18} />
              Preview
            </Link>

            <a
              href="https://drive.google.com/uc?export=download&id=1DAt5fkZ18TuYLom2LmUlzl03ANkksyU-"
              download
              className="px-5 py-2 rounded-full bg-cyan-500 text-black shadow-lg hover:scale-105 transition flex items-center gap-2"
            >
              <Download size={18} />
              Download
            </a>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-5xl font-bold">
            I&apos;m{" "}
            <span className="text-cyan-300 drop-shadow-md">Shahidullah</span>
            <br />
            <TypeAnimation
              sequence={[
                "A Professional",
                2000,
                "Full Stack",
                2000,
                "Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block mt-2 text-cyan-200"
            />
          </h1>

          <p className="max-w-lg mt-5 text-slate-300">
            Passionate Full Stack Developer skilled in the backend and frontend,
            experienced in creating dynamic web applications with HTML, CSS,
            Tailwind, JavaScript, React, Next.js, Node.js, MongoDB with mongose
            and Express.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
