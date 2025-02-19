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
      <p className="text-center text-white text-lg font-semibold mt-10">
        Loading...
      </p>
    );
  }

  if (!blog) {
    return (
      <p className="text-center text-white text-lg font-semibold mt-10">
        Blog not found.
      </p>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-6 max-w-5xl mx-auto text-white mt-16"
    >
      <h1 className="text-4xl font-bold mb-3">{blog.title}</h1>
      <span className="text-sm text-gray-500 font-semibold uppercase">
        {blog.category}
      </span>
      {/* Blog Image */}
      {blog.image && (
        <div className="relative w-full h-96 mb-6 mt-6">
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="text-lg text-gray-300 leading-relaxed text-justify">
        {blog.content}
      </div>
    </motion.section>
  );
}
