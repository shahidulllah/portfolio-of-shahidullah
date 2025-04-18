/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Trash2, PlusCircle, Pencil } from "lucide-react";
import { IProject } from "@/types/project.type";

export default function ProjectManagement() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "",
    liveUrl: "",
    githubUrl: "",
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

  // Handle adding a new project
  const handleAddProject = async () => {
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });

    if (res.ok) {
      const projectData = await res.json();
      setNewProject({
        title: "",
        description: "",
        image: "",
        liveUrl: "",
        githubUrl: "",
      });
      setIsModalOpen(false);
      toast.success("Project added successfully!");
      setProjects((prevProjects) => [...prevProjects, projectData]);
    } else {
      toast.error("Failed to add project. Please try again.");
    }
  };

  // Handle updating a project
  const handleEditProject = async () => {
    if (!currentProjectId) return;

    const res = await fetch(`/api/projects/${currentProjectId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });

    if (res.ok) {
      const updatedProject = await res.json();

      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project._id === currentProjectId ? { ...updatedProject } : project
        )
      );

      setIsModalOpen(false);
      toast.success("Project updated successfully!");
    } else {
      toast.error("Failed to update project.");
    }
  };

  // Handle opening edit modal
  const openEditModal = (project: IProject) => {
    setNewProject({
      title: project.title,
      description: project.description,
      image: project.image || "",
      liveUrl: project.liveUrl || "",
      githubUrl: project.githubUrl || "",
    });
    setCurrentProjectId(project._id);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  // Handle deleting a project
  const handleDelete = async (id: string) => {
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    setProjects(projects.filter((project) => project._id !== id));
    toast.success("Project deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Project Management</h1>

      {/* Button to open modal for adding project */}
      <button
        onClick={() => {
          setIsEditMode(false);
          setNewProject({
            title: "",
            description: "",
            image: "",
            liveUrl: "",
            githubUrl: "",
          });
          setIsModalOpen(true);
        }}
        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full mb-6"
      >
        <PlusCircle className="mr-2" />
        Upload New Project
      </button>

      {/* Project List */}
      {loading && (
        <p className="text-white mb-4 text-center">Loading projects...</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col space-y-3"
          >
            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
            )}

            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-400">
              {project.description.substring(0, 100)}...
            </p>
            <div className="flex justify-between items-center mt-3">
              <a
                href={project.liveUrl}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                className="text-gray-400 hover:underline"
              >
                GitHub
              </a>
              <button
                onClick={() => openEditModal(project)}
                className="text-yellow-500 px-4 py-2 rounded flex items-center"
              >
                <Pencil className="mr-2" />
              </button>
              <button
                onClick={() => handleDelete(project._id)}
                className="text-red-600 px-4 py-2 rounded flex items-center"
              >
                <Trash2 className="mr-2" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding/editing project */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg w-96 space-y-4">
            <h3 className="text-2xl font-semibold">
              {isEditMode ? "Edit Project" : "Add New Project"}
            </h3>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
            />
            <textarea
              placeholder="Description"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={newProject.image}
              onChange={(e) =>
                setNewProject({ ...newProject, image: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Live URL"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={newProject.liveUrl}
              onChange={(e) =>
                setNewProject({ ...newProject, liveUrl: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="GitHub URL"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={newProject.githubUrl}
              onChange={(e) =>
                setNewProject({ ...newProject, githubUrl: e.target.value })
              }
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={isEditMode ? handleEditProject : handleAddProject}
                className={`px-4 py-2 rounded text-white ${
                  isEditMode
                    ? "bg-yellow-600 hover:bg-yellow-500"
                    : "bg-green-600 hover:bg-green-700"
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
