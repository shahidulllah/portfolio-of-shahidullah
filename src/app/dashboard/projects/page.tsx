"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Trash2, PlusCircle, Pencil } from "lucide-react";
import { INewProject, IProject } from "@/types/project.type";
import Image from "next/image";

export default function ProjectManagement() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [newProject, setNewProject] = useState<INewProject>({
    title: "",
    description: "",
    image: "",
    liveUrl: "",
    githubUrl: { client: "", server: "" },
    category: "",
    technologies: [],
    goals: "",
    challenges: [],
    features: [],
    learnings: "",
    futurePlans: [],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  const resetForm = () => {
    setNewProject({
      title: "",
      description: "",
      image: "",
      liveUrl: "",
      githubUrl: { client: "", server: "" },
      category: "",
      technologies: [],
      goals: "",
      challenges: [],
      features: [],
      learnings: "",
      futurePlans: [],
    });
  };

  const handleAddProject = async () => {
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });

    if (res.ok) {
      const projectData = await res.json();
      resetForm();
      setIsModalOpen(false);
      toast.success("Project added successfully!");
      setProjects((prev) => [...prev, projectData]);
    } else {
      toast.error("Failed to add project. Please try again.");
    }
  };

  const handleEditProject = async () => {
    if (!currentProjectId) return;

    const res = await fetch(`/api/projects/${currentProjectId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });

    if (res.ok) {
      const updated = await res.json();
      setProjects((prev) =>
        prev.map((p) => (p._id === currentProjectId ? updated : p))
      );
      resetForm();
      setIsModalOpen(false);
      toast.success("Project updated successfully!");
    } else {
      toast.error("Failed to update project.");
    }
  };

  const openEditModal = (project: IProject) => {
    setNewProject({
      title: project.title,
      description: project.description,
      image: project.image || "",
      liveUrl: project.liveUrl || "",
      githubUrl: {
        client: project.githubUrl?.client || "",
        server: project.githubUrl?.server || "",
      },
      category: project.category || "",
      technologies: project.technologies || [],
      goals: project.goals || "",
      challenges: project.challenges || [],
      features: project.features || [],
      learnings: project.learnings || "",
      futurePlans: project.futurePlans || [],
    });
    setCurrentProjectId(project._id);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    setProjects(projects.filter((p) => p._id !== id));
    toast.success("Project deleted successfully!");
  };

  const handleArrayInputChange = (field: keyof IProject, value: string) => {
    setNewProject({
      ...newProject,
      [field]: value.split(",").map((s) => s.trim()),
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Project Management</h1>

      <button
        onClick={() => {
          setIsEditMode(false);
          resetForm();
          setIsModalOpen(true);
        }}
        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full mb-6"
      >
        <PlusCircle className="mr-2" />
        Upload New Project
      </button>

      {loading && <p className="text-white mb-4">Loading projects...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-3"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-400">
              {project.description.substring(0, 100)}...
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-teal-300">
              {project.technologies.map((tech, idx) => (
                <span key={idx}>#{tech}</span>
              ))}
            </div>
            <div className="flex justify-between mt-3">
              <a
                href={project.liveUrl}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Live
              </a>
              <a
                href={project.githubUrl.client}
                target="_blank"
                className="text-gray-400 hover:underline"
              >
                GitHub (Client)
              </a>
              <a
                href={project.githubUrl.server}
                target="_blank"
                className="text-gray-400 hover:underline"
              >
                Server
              </a>
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => openEditModal(project)}
                className="text-yellow-500 flex items-center"
              >
                <Pencil className="mr-1" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(project._id)}
                className="text-red-600 flex items-center"
              >
                <Trash2 className="mr-1" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg w-96 space-y-3 overflow-y-auto max-h-[90vh]">
            <h3 className="text-xl font-semibold mb-2">
              {isEditMode ? "Edit Project" : "Add New Project"}
            </h3>

            <input
              placeholder="Title"
              className="input"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
            />

            <textarea
              placeholder="Description"
              className="input"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
            />

            <input
              placeholder="Image URL"
              className="input"
              value={newProject.image}
              onChange={(e) =>
                setNewProject({ ...newProject, image: e.target.value })
              }
            />

            <input
              placeholder="Live URL"
              className="input"
              value={newProject.liveUrl}
              onChange={(e) =>
                setNewProject({ ...newProject, liveUrl: e.target.value })
              }
            />

            <input
              placeholder="GitHub Client URL"
              className="input"
              value={newProject.githubUrl.client}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  githubUrl: {
                    ...newProject.githubUrl,
                    client: e.target.value,
                  },
                })
              }
            />

            <input
              placeholder="GitHub Server URL"
              className="input"
              value={newProject.githubUrl.server}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  githubUrl: {
                    ...newProject.githubUrl,
                    server: e.target.value,
                  },
                })
              }
            />

            <input
              placeholder="Category"
              className="input"
              value={newProject.category}
              onChange={(e) =>
                setNewProject({ ...newProject, category: e.target.value })
              }
            />

            <input
              placeholder="Technologies (comma-separated)"
              className="input"
              value={newProject.technologies.join(", ")}
              onChange={(e) =>
                handleArrayInputChange("technologies", e.target.value)
              }
            />

            <textarea
              placeholder="Goals"
              className="input"
              value={newProject.goals}
              onChange={(e) =>
                setNewProject({ ...newProject, goals: e.target.value })
              }
            />

            <input
              placeholder="Challenges (comma-separated)"
              className="input"
              value={newProject.challenges.join(", ")}
              onChange={(e) =>
                handleArrayInputChange("challenges", e.target.value)
              }
            />

            <input
              placeholder="Features (comma-separated)"
              className="input"
              value={newProject.features.join(", ")}
              onChange={(e) =>
                handleArrayInputChange("features", e.target.value)
              }
            />

            <textarea
              placeholder="Learnings"
              className="input"
              value={newProject.learnings}
              onChange={(e) =>
                setNewProject({ ...newProject, learnings: e.target.value })
              }
            />

            <input
              placeholder="Future Plans (comma-separated)"
              className="input"
              value={newProject.futurePlans.join(", ")}
              onChange={(e) =>
                handleArrayInputChange("futurePlans", e.target.value)
              }
            />

            <div className="flex justify-between mt-4">
              <button
                onClick={isEditMode ? handleEditProject : handleAddProject}
                className={`px-4 py-2 rounded text-white ${
                  isEditMode ? "bg-yellow-600" : "bg-green-600"
                }`}
              >
                {isEditMode ? "Update Project" : "Add Project"}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
