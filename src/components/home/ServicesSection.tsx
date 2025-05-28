"use client";

import { motion } from "framer-motion";
import { Code, Monitor, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: <Code size={36} className="text-blue-500" />,
    title: "Full-Stack Web Development",
    description:
      "Building complete applications using React, Node.js, Express, and MongoDB with modern best practices.",
  },
  {
    icon: <LayoutDashboard size={36} className="text-green-500" />,
    title: "Frontend Design",
    description:
      "Creating responsive, modern, and accessible UIs using Tailwind CSS, Next.js, and Framer Motion.",
  },
  {
    icon: <Monitor size={36} className="text-purple-500" />,
    title: "Portfolio & Blog Development",
    description:
      "Custom personal websites with blog functionality, contact forms, dashboards, and authentication.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-black dark:text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Services I Offered
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#a19474] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] p-6 rounded-lg shadow-md hover:shadow-xl border border-gray-700"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-900 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
