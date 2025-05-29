"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { IProject } from "@/types/project.type";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const PAGE_SIZE = 6;

export default function ProjectsPage() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`/api/projects`, { cache: "no-store" });
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

  const categories = useMemo(() => {
    const unique = new Set(projects.map((p) => p.category || "Uncategorized"));
    return ["All", ...Array.from(unique)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    result = result.filter((project) => {
      const matchTitle = project.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchDesc = project.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchTitle || matchDesc;
    });

    if (selectedCategory !== "All") {
      result = result.filter(
        (p) => (p.category || "Uncategorized") === selectedCategory
      );
    }

    result.sort((a, b) => {
      const dateA = new Date(a.createdAt || a._id).getTime();
      const dateB = new Date(b.createdAt || b._id).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [projects, searchTerm, selectedCategory, sortOrder]);

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto mt-4">
        <h1 className="text-4xl font-bold text-center dark:text-white mb-10">
          All Projects
        </h1>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          {/* Search */}
          <div className="relative w-full lg:w-1/2">
            <input
              type="text"
              placeholder="Search by title or description..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full py-2 pl-10 pr-4 rounded-md bg-gray-800 text-white border border-gray-700 placeholder-gray-400"
            />
            <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
          </div>

          {/* Category Filter */}
          <select
            className="py-2 px-4 rounded-md bg-gray-800 text-white border border-gray-700"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Sort Order */}
          <select
            className="py-2 px-4 rounded-md bg-gray-800 text-white border border-gray-700"
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as "newest" | "oldest")
            }
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Projects */}
        {loading ? (
          <div className="text-center text-white font-medium py-24">
            Loading projects...
          </div>
        ) : paginatedProjects.length === 0 ? (
          <div className="text-center text-gray-400 font-medium py-24">
            No projects found.
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link href={`/projects/${project._id}`}>
                    <div className="bg-gradient-to-r from-[#b0a27f] to-[#4b849b] dark:from-[#314155] dark:to-[#262656] dark:text-white p-4 rounded-lg shadow-lg border border-gray-800 hover:shadow-xl transition">
                      {project.image && project.image.startsWith("http") ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={250}
                          className="rounded-md object-cover w-full h-[200px]"
                        />
                      ) : (
                        <div className="h-[200px] bg-gray-700 flex items-center justify-center rounded-md text-gray-400">
                          No Image
                        </div>
                      )}
                      <div className="mt-3">
                        <h2 className="text-xl font-semibold">
                          {project.title}
                        </h2>
                        <p className="text-sm dark:text-gray-400 mt-1 line-clamp-3">
                          {project.description}
                        </p>
                        {project.category && (
                          <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-800 text-white rounded-full">
                            {project.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-10 space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-1 bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] dark:text-white transition-all duration-300 hover:bg-gray-900/30 hover:text-black hover:scale-105 hover:shadow-md border border-gray-500 dark:border-gray-400 rounded"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-slate-700 dark:slate-900 dark:border text-white"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-1 bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-900/30 hover:text-black hover:scale-105 hover:shadow-md border border-gray-500 dark:border-gray-400 rounded"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
