"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const certifications = [
  {
    title: "Complete Web Development (Level-1)",
    provider: "Programming Hero",
    image: "/images/Level-1.png",
    link: "https://drive.google.com/file/d/1ykx7JbV37vRm0Wa3dyLR5B1G7t7YVQNq/view?usp=drive_link",
  },
  {
    title: "Full Stack Web Development (Level-2)",
    provider: "Programming Hero",
    image: "/images/Phero.png",
    link: "https://drive.google.com/file/d/1-PMEHpODXe4IRbStH0O-a3y5BIpv3i9G/view?usp=drive_link",
  },
  {
    title: "Black Belt-Reward",
    provider: "Programming Hero",
    image: "/images/Black Belt.png",
    link: "https://drive.google.com/file/d/1PDJhkHCRS852CDIFQeZck9beJlFa_AED/view?usp=drive_link",
  },
  {
    title: "Basic Computer And IT Application",
    provider: "United Trust",
    image: "/images/Phero.png",
    link: "https://scrimba.com/certificate/your-cert-id",
  },
  {
    title: "Spoken English",
    provider: "English Boli",
    image: "/images/Phero.png",
    link: "https://scrimba.com/certificate/your-cert-id",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-16 px-6 text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Badges
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] rounded-lg overflow-hidden shadow-lg border border-gray-600"
            >
              <Link href={cert.link} target="_blank" className="block">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg dark:text-white font-semibold line-clamp-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm dark:gray-300 mt-1">{cert.provider}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
