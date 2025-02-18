"use client";
import { IBlog } from "@/types/blog.type";
import { useEffect, useState } from "react";

export default function BlogManagement() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    category: "",
  });

  console.log("From blogs:",blogs);

  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  const handleAddBlog = async () => {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    });
    if (res.ok) {
      setNewBlog({ title: "", content: "", category: "" });
      location.reload(); 
    }
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    setBlogs(blogs.filter((blog) => blog._id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Blogs</h1>

      {/* Create Blog */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="p-2 border rounded w-full"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          className="p-2 border rounded w-full mt-2"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          className="p-2 border rounded w-full mt-2"
          value={newBlog.category}
          onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
        />
        <button
          onClick={handleAddBlog}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Add Blog
        </button>
      </div>

      {/* Blog List */}
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.content.substring(0, 100)}...</p>
            <button
              onClick={() => handleDelete(blog._id)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
