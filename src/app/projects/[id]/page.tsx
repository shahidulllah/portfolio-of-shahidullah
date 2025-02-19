"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IProject } from "@/types/project.type";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState<IProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error("Failed to fetch project details", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProject();
  }, [id]);

  if (loading)
    return <p className="text-center text-white mt-10">Loading...</p>;
  if (!project)
    return <p className="text-center text-white mt-10">Project not found.</p>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-6 max-w-5xl mx-auto text-white mt-12"
    >
      {/* Project Title */}
      <h1 className="text-4xl font-bold mb-6 text-center">{project.title}</h1>

      {/* Project Image */}
      {project.image && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-96 mb-6 rounded-lg overflow-hidden"
        >
          <Image
            src={project.image}
            alt={`${project.title} image`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg border border-gray-500"
          />
        </motion.div>
      )}

      {/* Project Description */}
      <p className="text-lg text-gray-300 leading-relaxed">
        {project.description}
      </p>

      {/* Project Links */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Live Demo 
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition"
          >
            View Code
          </Link>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-10 text-center">
        <Link
          href="/projects"
          className="text-blue-400 hover:underline text-lg"
        >
          ← Back to Projects
        </Link>
      </div>
    </motion.section>
  );
}
