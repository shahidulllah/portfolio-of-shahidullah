"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IProject } from "@/types/project.type";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Github, Goal, Hammer, Lightbulb, Wrench } from "lucide-react";

export default function ProjectDetailsPage() {
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
        console.error("Error fetching project", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProject();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center text-white py-24">Loading project details...</p>
    );
  }

  if (!project) {
    return <p className="text-center text-red-400 py-24">Project not found.</p>;
  }

  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-black dark:text-white"
      >
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-8">
          <strong>Title:</strong> {project.title}
        </h1>

        {/* Project Image */}
        {project.image && (
          <div className="relative w-full h-[300px] md:h-[400px] mb-10 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        )}

        {/* Category */}
        {project.category && (
          <p className="text-sm text-center mb-10 text-gray-600 dark:text-white/70">
            Category:{" "}
            <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs">
              {project.category}
            </span>
          </p>
        )}

        {/* Description */}
        <div className="text-lg leading-relaxed space-y-6 text-justify mb-14">
          <p>{project.description}</p>
        </div>

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <Wrench className="w-6 h-6 text-yellow-500" />
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1 rounded-full bg-[#262656] text-white border border-[#599cb7]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Goals */}
        {project.goals && (
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Goal className="w-6 h-6 text-blue-500" />
              Project Goals
            </h2>
            <p className="leading-relaxed">{project.goals}</p>
          </section>
        )}

        {/* Challenges */}
        {project.challenges?.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Hammer className="w-6 h-6 text-red-500" />
              Challenges & Solutions
            </h2>
            <ul className="list-disc ml-5 space-y-2">
              {project.challenges.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Learnings */}
        {project.learnings && (
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-green-500" />
              What I Learned
            </h2>
            <p className="leading-relaxed">{project.learnings}</p>
          </section>
        )}

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] dark:text-white hover:scale-105 transition shadow-md"
            >
              <Eye className="w-4 h-4" /> Live Preview
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] dark:text-white hover:scale-105 transition shadow-md"
            >
              <Github className="w-4 h-4" /> GitHub Repo
            </Link>
          )}
        </div>

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="dark:text-blue-400 text-blue-900 hover:underline text-sm"
          >
            ← Back to Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
