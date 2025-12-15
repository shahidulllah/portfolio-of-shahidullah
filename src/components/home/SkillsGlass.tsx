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
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Mongoose", icon: <SiMongoose /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
];

export default function SkillsGlass() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Technical <span className="text-indigo-400">Skills</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.08 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center gap-3 shadow-lg"
          >
            <div className="text-4xl text-indigo-300">{skill.icon}</div>
            <p className="font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
