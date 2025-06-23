"use client";

import { IBlog } from "@/types/blog.type";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Trash2, PlusCircle, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function BlogManagement() {
  const { data: session, status } = useSession();
  const role = session?.user?.role;

  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    category: "",
    image: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState<string | null>(null);
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

  if (status === "loading")
    return <p className="text-center text-white">Loading session...</p>;
  if (!session)
    return (
      <p className="text-center text-white">
        You must be logged in to access this page.
      </p>
    );

  const handleAddBlog = async () => {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newBlog,
        author: session.user.name,
        email: session.user.email,
      }),
    });

    if (res.ok) {
      const blogData = await res.json();
      setNewBlog({ title: "", content: "", category: "", image: "" });
      setIsModalOpen(false);
      toast.success("Blog added successfully!");
      setBlogs((prev) => [...prev, blogData]);
    } else {
      toast.error("Failed to add blog.");
    }
  };

  const handleEditBlog = async () => {
    if (!currentBlogId) return;

    const res = await fetch(`/api/blogs/${currentBlogId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    });

    if (res.ok) {
      const updatedBlog: IBlog = await res.json();
      const sanitized = {
        _id: updatedBlog._id,
        title: updatedBlog.title,
        content: updatedBlog.content,
        category: updatedBlog.category,
        image: updatedBlog.image || "",
      } as IBlog;

      setBlogs((prev) =>
        prev.map((b) => (b._id === currentBlogId ? sanitized : b))
      );

      setIsModalOpen(false);
      toast.success("Blog updated successfully!");
    } else {
      toast.error("Failed to update blog.");
    }
  };

  const openEditModal = (blog: IBlog) => {
    setNewBlog({
      title: blog.title,
      content: blog.content,
      category: blog.category,
      image: blog.image || "",
    });
    setCurrentBlogId(blog._id);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    setBlogs((prev) => prev.filter((b) => b._id !== id));
    toast.success("Blog deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Blog Management</h1>

      <button
        onClick={() => {
          setIsEditMode(false);
          setNewBlog({ title: "", content: "", category: "", image: "" });
          setIsModalOpen(true);
        }}
        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full mb-6"
      >
        <PlusCircle className="mr-2" />
        Add New Blog
      </button>

      {loading && (
        <p className="text-white mb-4 text-center">Loading blogs...</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col space-y-3"
          >
            {blog.image ? (
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="rounded-md"
                priority
              />
            ) : (
              <div className="h-[200px] flex items-center justify-center text-gray-600 border border-gray-700 rounded-md">
                No Image
              </div>
            )}
            <h2 className="text-xl font-semibold line-clamp-1">{blog.title}</h2>
            <span className="text-sm text-gray-500 font-semibold uppercase">
              {blog.category}
            </span>
            <Link href={`/blogs/${blog._id}`}>
              <p className="text-gray-400 line-clamp-2">{blog.content}</p>
            </Link>

            {role === "admin" && (
              <div className="flex justify-between items-center mt-3">
                <button
                  onClick={() => openEditModal(blog)}
                  className="text-white px-2 py-2 rounded flex items-center"
                >
                  <Pencil className="mr-2" />
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="text-red-600 px-4 py-2 rounded flex items-center"
                >
                  <Trash2 className="mr-2" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg w-96 space-y-4">
            <h3 className="text-2xl font-semibold">
              {isEditMode ? "Edit Blog" : "Add New Blog"}
            </h3>
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
                onClick={isEditMode ? handleEditBlog : handleAddBlog}
                className={`px-4 py-2 rounded text-white ${
                  isEditMode
                    ? "bg-yellow-600 hover:bg-yellow-500"
                    : "bg-purple-700 hover:bg-purple-700"
                }`}
              >
                {isEditMode ? "Update Blog" : "Add Blog"}
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
