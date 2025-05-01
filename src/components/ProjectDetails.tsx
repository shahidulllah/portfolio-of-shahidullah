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
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-6">
        {project.title}
      </h1>

      {/* Image */}
      {project.image && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[350px] md:h-[450px] mb-8 rounded-xl overflow-hidden border border-gray-700 shadow-lg"
        >
          <Image
            src={project.image}
            alt={`${project.title} image`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </motion.div>
      )}

      {/* Description */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">Overview</h2>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>User Authentication & Role-Based Access</li>
            <li>Blog/Project CRUD functionality</li>
            <li>Responsive design with animations</li>
            <li>Search, Sort & Filter support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "MongoDB",
              "Express",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-800 border border-yellow-500 text-yellow-300 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">
            Challenges
          </h2>
          <p className="text-gray-300">
            One of the major challenges was integrating secure authentication
            and creating a fully modular, scalable codebase using the MVC
            pattern. Debugging asynchronous issues and optimizing performance
            were also key parts of the learning curve.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">
            Future Plans
          </h2>
          <p className="text-gray-300">
            Planning to add a comment system, admin analytics dashboard, and
            email notifications. Also working on SEO improvements and public API
            documentation.
          </p>
        </section>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
          >
            🌐 Live Demo
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            className="bg-gray-800 text-yellow-300 border border-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition"
          >
            🔗 View Code
          </Link>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-12 text-center">
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
