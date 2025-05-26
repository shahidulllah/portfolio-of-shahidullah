"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Are you open to freelance or part-time projects?",
    answer: "Yes, I'm open to freelance and part-time opportunities that align with my skill set and values.",
  },
  {
    question: "Which technologies do you specialize in?",
    answer: "I specialize in the MERN stack — MongoDB, Express.js, React.js, Node.js — along with Next.js, Tailwind CSS, and TypeScript.",
  },
  {
    question: "Do you have experience working in teams?",
    answer: "Absolutely! I’ve collaborated on projects with team members using Git, GitHub, and agile tools like Trello and Notion.",
  },
  {
    question: "How can I contact you?",
    answer: "You can reach out via the contact form on this website or email me directly at your@email.com.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 px-6 lg:px-28 bg-[#0d1117] text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ❓ Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-lg p-4 bg-[#1c1c2a] transition-all"
          >
            <button
              onClick={() => toggle(i)}
              className="flex justify-between items-center w-full text-left"
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === i ? (
                <ChevronUp className="text-gray-400" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.p
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-gray-400"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
