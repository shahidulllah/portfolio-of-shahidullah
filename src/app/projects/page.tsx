"use client"; // Convert to Client Component

import { useState, useEffect } from "react";
import Image from "next/image";
import { IProject } from "@/types/project.type";
import Link from "next/link";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`/api/projects`, {
          cache: "no-store",
        });
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-10 px-6 mt-10 lg:mt-16 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Projects
      </h1>

      {loading ? (
        <div className="text-center text-white text-lg font-semibold">
          Loading...
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/projects/${project._id}`}
              className="block"
            >
              <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
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
                  <div className="h-[180px] bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
                    No Image
                  </div>
                )}
                <h2 className="text-xl text-gray-400 font-semibold mt-3">
                  {project.title}
                </h2>
                <p className="text-gray-500">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
