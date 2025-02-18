/* eslint-disable @next/next/no-img-element */
"use client";
import { IBlog } from "@/types/blog.type";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Trash2, PlusCircle } from "lucide-react";

export default function BlogManagement() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    category: "",
    image: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
      setLoading(false);
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
      const blogData = await res.json();

      setNewBlog({ title: "", content: "", category: "", image: "" });
      setIsModalOpen(false);
      toast.success("Blog added successfully!");

      setBlogs((prevBlogs) => [...prevBlogs, blogData]);
    } else {
      toast.error("Failed to add blog. Please try again.");
    }
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    setBlogs(blogs.filter((blog) => blog._id !== id));
    toast.success("Blog deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Blog Management</h1>

      {/* Button to open modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-6"
      >
        <PlusCircle className="mr-2" />
        Add New Blog
      </button>

      {/* Blog List */}
      {loading && (
        <p className="text-white mb-4 text-center">Loading blogs...</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col space-y-3"
          >
            {/* Blog Image */}
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md"
              />
            )}

            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-400">{blog.content.substring(0, 100)}...</p>
            <div className="flex justify-between items-center mt-3">
              <button
                onClick={() => handleDelete(blog._id)}
                className="bg-red-900 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center"
              >
                <Trash2 className="mr-2" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding blog */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg w-96 space-y-4">
            <h3 className="text-2xl font-semibold">Add New Blog</h3>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={newBlog.title}
              onChange={(e) =>
                setNewBlog({ ...newBlog, title: e.target.value })
              }
            />
            <textarea
              placeholder="Content"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={newBlog.content}
              onChange={(e) =>
                setNewBlog({ ...newBlog, content: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Category"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={newBlog.category}
              onChange={(e) =>
                setNewBlog({ ...newBlog, category: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={newBlog.image}
              onChange={(e) =>
                setNewBlog({ ...newBlog, image: e.target.value })
              }
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleAddBlog}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Add Blog
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
