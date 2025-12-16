"use client";

import { motion } from "framer-motion";
import * as Icons from "react-icons/si";

const skills = [
  { name: "HTML", icon: Icons.SiHtml5 },
  { name: "CSS", icon: Icons.SiCss3 },
  { name: "JavaScript", icon: Icons.SiJavascript },
  { name: "React", icon: Icons.SiReact },
  { name: "Next.js", icon: Icons.SiNextdotjs },
  { name: "Node.js", icon: Icons.SiNodedotjs },
  { name: "Express", icon: Icons.SiExpress },
  { name: "TypeScript", icon: Icons.SiTypescript },
  { name: "Redux", icon: Icons.SiRedux },
  { name: "MongoDB", icon: Icons.SiMongodb },
  { name: "Mongoose", icon: Icons.SiMongoose },
  { name: "Git", icon: Icons.SiGit },
  { name: "GitHub", icon: Icons.SiGithub },
];

export default function SkillsMarquee() {
  return (
    <section className="relative text-white overflow-hidden mt-16 max-w-6xl mx-auto">
      {/* <h2 className="text-4xl font-bold text-center mb-10">
        Tools & Technologies
      </h2> */}

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b1120] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b1120] to-transparent z-10" />

      <motion.div
        className="flex gap-10 px-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="min-w-[140px] bg-slate-800 rounded-xl p-5 flex flex-col items-center gap-3 shadow-md hover:-translate-y-2 transition"
          >
            <skill.icon size={38} className="text-sky-400" />
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
