"use client";

import { useState, useEffect, useMemo } from "react";
import { IBlog } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const PAGE_SIZE = 6;

export default function BlogPage() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/blogs`, { cache: "no-store" });
        const data: IBlog[] = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const categories = useMemo(() => {
    const setCat = new Set(blogs.map((b) => b.category || "Uncategorized"));
    return ["All", ...Array.from(setCat)];
  }, [blogs]);

  const filtered = useMemo(() => {
    let filtered = [...blogs];

    if (search) {
      filtered = filtered.filter(
        (b) =>
          b.title.toLowerCase().includes(search.toLowerCase()) ||
          b.content.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      filtered = filtered.filter(
        (b) => (b.category || "Uncategorized") === category
      );
    }

    filtered.sort((a, b) => {
      const dateA = new Date(a.createdAt || a._id).getTime();
      const dateB = new Date(b.createdAt || b._id).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  }, [blogs, search, category, sortOrder]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginatedBlogs = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const handlePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto mt-4">
        <h1 className="text-4xl font-bold text-center dark:text-white mb-10">
          Latest Blogs
        </h1>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
          <div className="relative w-full lg:w-1/2">
            <input
              type="text"
              placeholder="Search blog..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-transparent dark:text-white border border-gray-700 dark:border-gray-400 dark:placeholder-gray-400 placeholder-gray-800"
            />
            <Search className="absolute top-2.5 left-3 h-5 w-5 dark:text-gray-400 text-gray-800" />
          </div>

          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
            className="px-4 py-2 rounded-lg bg-transparent dark:text-gray-400 border border-gray-700 dark:border-gray-300 dark:placeholder-gray-400 placeholder-gray-800"
          >
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as "newest" | "oldest")
            }
            className="px-4 py-2 rounded-lg bg-transparent dark:text-gray-400 border border-gray-700 dark:border-gray-300 dark:placeholder-gray-400 placeholder-gray-800"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center text-white font-semibold py-24">
            Loading blogs...
          </div>
        ) : paginatedBlogs.length === 0 ? (
          <div className="text-center text-gray-400 font-medium py-24">
            No blogs found.
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedBlogs.map((blog, i) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <div className="bg-gradient-to-r from-[#baab86] to-[#4d889f] dark:from-[#314155] dark:to-[#262656] dark:text-white p-4 rounded-lg shadow-lg border border-gray-700 flex flex-col">
                    {blog.image && blog.image.startsWith("http") ? (
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={400}
                        height={220}
                        className="border border-gray-500 rounded-md object-cover w-full h-[220px]"
                      />
                    ) : (
                      <div className="h-[220px] flex items-center justify-center text-gray-600 border border-gray-700 rounded-md">
                        No Image
                      </div>
                    )}

                    <div className="mt-4">
                      <span className="text-xs uppercase">{blog.category}</span>
                      <h2 className="text-xl font-semibold mt-1 line-clamp-1">
                        {blog.title}
                      </h2>
                      <p className="text-sm mt-2 line-clamp-2">
                        {blog.content}
                      </p>
                      <Link
                        href={`/blogs/${blog._id}`}
                        className="inline-block mt-4 hover:underline text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10 gap-2">
              <button
                onClick={() => handlePage(page - 1)}
                disabled={page === 1}
                className="px-4 py-1 bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] dark:text-white transition-all duration-300 hover:bg-gray-900/30 hover:text-black hover:scale-105 hover:shadow-md border border-gray-500 dark:border-gray-400 rounded"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePage(i + 1)}
                  className={`px-4 py-1 rounded ${
                    page === i + 1
                      ? "bg-slate-700 dark:slate-900 dark:border text-white"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePage(page + 1)}
                disabled={page === totalPages}
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
