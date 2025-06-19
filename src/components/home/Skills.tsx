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

// Skill List
const skills = [
  { name: "HTML", icon: <SiHtml5 size={40} /> },
  { name: "CSS", icon: <SiCss3 size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "Express.js", icon: <SiExpress size={40} /> },
  { name: "Typescript", icon: <SiTypescript size={40} /> },
  { name: "Redux", icon: <SiRedux size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Mongoose", icon: <SiMongoose size={40} /> },
  { name: "Git", icon: <SiGit size={40} /> },
  { name: "GitHub", icon: <SiGithub size={40} /> },
];

export default function Skills() {
  return (
    <section className="py-10 px-6 bg-gradient-to-r from-[#9d94ad] via-[#68909c] to-[#637780] dark:bg-gradient-to-r dark:from-[#2c2b4b] dark:to-[#323a57] text-center border-y border-[#33353F]">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
        Technical Skills
      </h2>
      <div className="max-w-6xl mx-auto">
        {/* Scrolling Animation */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex space-x-10"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-2 bg-gray-800 p-4 rounded-lg shadow-lg min-w-[120px]"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-blue-400">{skill.icon}</span>
                <span className="text-white">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
