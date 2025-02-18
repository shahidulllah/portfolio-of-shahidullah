"use client";

import { IProject } from "@/types/project.type";
import { useEffect, useState } from "react";

export default function ProjectManagement() {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch(`/api/projects`);
      const data = await res.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Manage Projects</h1>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">
              {project.description.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
