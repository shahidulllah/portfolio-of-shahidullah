"use client";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  GitBranch,
  PaintBucket,
  Smartphone,
} from "lucide-react";

// Skill List with Icons
const skills = [
  { name: "HTML", icon: <Code size={40} /> },
  { name: "CSS", icon: <PaintBucket size={40} /> },
  { name: "JavaScript", icon: <Code size={40} /> },
  { name: "React", icon: <Smartphone size={40} /> },
  { name: "Next.js", icon: <Server size={40} /> },
  { name: "Node.js", icon: <Server size={40} /> },
  { name: "MongoDB", icon: <Database size={40} /> },
  { name: "Git", icon: <GitBranch size={40} /> },
];

export default function Skills() {
  return (
    <section className="py-16 px-6  bg-gradient-to-r from-[#141330] to-[#57618c] dark:from-gray-900 dark:to-black text-white text-center">
      <div className="max-w-7xl mx-auto">
        {/* Scrolling Animation */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex space-x-10"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {skills.map((skill, index) => (
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
