"use client";

import { motion } from "framer-motion";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Redux", icon: SiRedux },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Mongoose", icon: SiMongoose },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

export default function SkillsOrbit() {
  return (
    <section className="relative py-24 bg-[#0f172a] text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-cyan-400">Tech Stack</span>
      </h2>

      <div className="relative w-[320px] h-[320px] mx-auto">
        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center font-semibold">
            MERN
          </div>
        </div>

        {/* Orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute inset-0"
        >
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 360;
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${angle}deg) translate(140px) rotate(-${angle}deg)`,
                }}
              >
                <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                  <skill.icon size={28} className="text-cyan-400" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
