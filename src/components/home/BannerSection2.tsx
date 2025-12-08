"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";

export default function BannerSectionV1() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-700 text-white py-24 px-6">
      {/* Floating Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-purple-600/40 mix-blend-screen rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-500/40 mix-blend-screen rounded-full blur-3xl animate-ping" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div className="w-60 h-60 lg:w-80 lg:h-80 rounded-full ring-4 ring-slate-300 shadow-xl shadow-black/40 overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="profile"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>

          {/* Floating icons around image */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/20 text-xs"
          >
            MERN Stack Developer
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-yellow-200 to-blue-300 bg-clip-text text-transparent">
              Shahidullah
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "A Professional",
                2000,
                "MERN Stack",
                2000,
                "Web Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="text-3xl lg:text-4xl block mt-2"
            />
          </h1>

          <p className="max-w-xl mt-5 text-slate-200">
            Passionate junior web developer skilled in the MERN stack and
            experienced in creating dynamic and responsive applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-7 justify-center lg:justify-start">
            <Link
              href="https://drive.google.com/file/d/1DAt5fkZ18TuYLom2LmUlzl03ANkksyU-/view?usp=sharing"
              target="_blank"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-yellow-300 shadow-lg"
            >
              <Eye size={18} className="group-hover:scale-110 duration-200" />
              Preview Resume
            </Link>

            <a
              href="https://drive.google.com/uc?export=download&id=1DAt5fkZ18TuYLom2LmUlzl03ANkksyU-"
              download
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-blue-400 text-black shadow-lg hover:scale-105 transition"
            >
              <Download size={18} className="group-hover:translate-y-[-2px]" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
