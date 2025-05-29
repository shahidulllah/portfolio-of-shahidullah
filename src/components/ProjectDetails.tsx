"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IProject } from "@/types/project.type";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Github } from "lucide-react";

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

  if (loading)
    return <p className="text-center text-white py-16">Loading project...</p>;

  if (!project)
    return <p className="text-center text-red-400 py-16">Project not found.</p>;

  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-black dark:text-white"
      >
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold  mb-6 mt-8">
         <strong> Title: </strong> {project.title}
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
        <div className="text-lg leading-relaxed space-y-6 text-justify">
          <p className="mb-14">{project.description}</p>

          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              🔧 Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "MongoDB",
                "Express",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1 rounded-full bg-[#262656] text-white border border-[#599cb7]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Extra Sections */}
        <div className="mt-16 space-y-12 text-black dark:text-white">
          {/* Goals */}
          <section>
            <h2 className="text-2xl font-bold mb-3 ">
              🚀 Project Goals
            </h2>
            <p className="leading-relaxed">
              The main objective of this project was to build a full-stack
              portfolio and blog management platform with user authentication,
              real-time CRUD operations, and a seamless, responsive UI for
              personal branding.
            </p>
          </section>

          {/* Challenges */}
          <section>
            <h2 className="text-2xl font-bold mb-3">
              📊 Challenges & Solutions
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Challenge:</strong> Implementing role-based dashboard
                with secure APIs.
                <br />
                <strong>Solution:</strong> Used NextAuth for social login and
                protected routes with middleware and `getSession`.
              </li>
              <li>
                <strong>Challenge:</strong> Keeping the UI responsive and clean
                across all screens.
                <br />
                <strong>Solution:</strong> Tailwind + Framer Motion allowed
                consistent animation and layout scaling.
              </li>
            </ul>
          </section>

          {/* What I Learned */}
          <section>
            <h2 className="text-2xl font-bold mb-3">
              📈 What I Learned
            </h2>
            <p className="leading-relaxed">
              I gained deeper understanding of full-stack architecture using the
              MERN stack, handling secure auth flows, building scalable APIs,
              and refining UI/UX consistency across devices and themes.
            </p>
          </section>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-black bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] hover:scale-105 transition shadow-md"
            >
              <Eye className="w-4 h-4" /> Live Preview
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-yellow-300 bg-[#1a1a2e] border border-[#599cb7] hover:scale-105 transition shadow-md"
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
