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
    <section className="py-12 px-6 max-w-7xl mx-auto text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>

      {loading ? (
        <p className="text-lg">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project._id}
              href={`/projects/${project._id}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col space-y-3"
              >
                {project.image && project.image.startsWith("http") ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="rounded-md"
                    priority
                  />
                ) : (
                  <div className="h-[250px] bg-gray-300 flex items-center justify-center text-gray-600">
                    No Image
                  </div>
                )}
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">
                  {project.description.substring(0, 100)}...
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
