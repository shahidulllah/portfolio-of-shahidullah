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
import SkillsMarquee from "./SkillsMarquee";

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
    <section className="py-12 bg-gradient-to-r from-[#9d94ad] via-[#68909c] to-[#637780] dark:bg-gradient-to-r dark:from-[#2c2b4b] dark:to-[#323a57] text-center border-y border-[#33353F]">
      <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
        Tools & Technologies
      </h2>

      <div className="relative w-[320px] h-[320px] mx-auto">
        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] text-gray-900 shadow-lg border border-slate-500 dark:text-white border-cyan-400/40 flex items-center justify-center font-semibold">
            MERN
          </div>
        </div>

        {/* Orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * 360;
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translateX(-50%) translateY(-50%) rotate(${angle}deg) translate(var(--radius, 140px)) rotate(-${angle}deg)`,
                  }}
                >
                  <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                    <skill.icon size={28} className="text-cyan-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <SkillsMarquee />
    </section>
  );
}
