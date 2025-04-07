"use client";

import { useState, useEffect } from "react";
import { IBlog } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/blogs`, {
          cache: "no-store",
        });
        const data: IBlog[] = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-12 px-6 mt-10 lg:mt-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        Latest Blogs
      </h1>

      {loading ? (
        <div className="text-center text-white text-lg font-semibold">
          Loading...
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-lg flex flex-col space-y-3"
            >
              {/* Blog Image */}
              {blog.image && blog.image.startsWith("http") ? (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="rounded-md text-gray-400 border border-gray-700"
                />
              ) : (
                <div className="h-[220px] flex items-center justify-center text-gray-600 border border-gray-700 rounded-md">
                  No Image
                </div>
              )}

              {/* Blog Content */}
              <div className="p-5">
                <span className="text-sm text-gray-500 font-semibold uppercase">
                  {blog.category}
                </span>
                <h2 className="text-xl text-white font-semibold mt-2 line-clamp-1">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                  {blog.content}
                </p>

                {/* Read More Button */}
                <Link
                  href={`/blogs/${blog._id}`}
                  className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
