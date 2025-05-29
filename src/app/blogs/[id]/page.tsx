"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IBlog } from "@/types/blog.type";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Failed to fetch blog details", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center text-white text-lg font-semibold py-24">
        Loading...
      </p>
    );
  }

  if (!blog) {
    return (
      <p className="text-center text-white text-lg font-semibold py-24">
        Blog not found.
      </p>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-6"
    >
      <div className="max-w-6xl mx-auto dark:text-white">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight lg:mt-16">
          {blog.title}
        </h1>

        {/* Meta info */}
        <div className="flex flex-col sm:flex-row sm:items-center text-sm space-y-2 sm:space-y-0 sm:space-x-6 mb-8">
          <span className="uppercase tracking-wide font-medium">
            {blog.category || "Uncategorized"}
          </span>
          <span className="text-xs border-l dark:text-gray-300 pl-4">
            🕒 Published on{" "}
            {new Date(blog.createdAt || blog._id).toLocaleDateString()}
          </span>
        </div>

        {/* Blog Image */}
        {blog.image && (
          <div className="relative w-full h-96 sm:h-[28rem] rounded-xl overflow-hidden border border-gray-500 mb-10">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        )}

        {/* Blog Content */}
        <article className="prose prose-invert lg:prose-lg max-w-none text-gray-900 dark:text-gray-300 leading-relaxed">
          <p>{blog.content}</p>
        </article>
      </div>
    </motion.section>
  );
}
