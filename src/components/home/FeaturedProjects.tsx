"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IProject } from "@/types/project.type";
import Link from "next/link";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`/api/projects`, { cache: "no-store" });
        const data = await res.json();

        setProjects(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-12 dark:bg-gradient-to-r dark:from-[#141330] dark:to-[#57618c] bg-gradient-to-r from-[#818bb6] via-[#82b2c1] to-[#aabec6]">
      <div className="px-6 lg:px-0 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>

        {loading ? (
          <p className="text-lg">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project._id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-yellow-500/30 hover:ring-2 hover:ring-yellow-400"
                >
                  {/* Project Image */}
                  {project.image && project.image.startsWith("http") ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                  ) : (
                    <div className="h-[220px] bg-gray-300 flex items-center justify-center text-gray-600">
                      No Image
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5 space-y-4">
                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {project.description.substring(0, 100)}...
                    </p>

                    {/* Details Button */}
                    <div className="mt-4">
                      <Link key={project._id} href={`/projects/${project._id}`}>
                        <button className="flex items-center gap-2 text-sm font-medium text-yellow-400 border border-yellow-500 px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:scale-105 hover:shadow-md">
                          View Details
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
