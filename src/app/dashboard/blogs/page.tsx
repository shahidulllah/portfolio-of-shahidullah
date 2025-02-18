"use client";

import { IBlog } from "@/types/blog.type";
import { useEffect, useState } from "react";


export default function BlogManagement() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch(`${process.env.BASE_URL}/api/blogs`);
      const data = await res.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Manage Blogs</h1>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
