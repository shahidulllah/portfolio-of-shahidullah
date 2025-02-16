import { useEffect, useState } from "react";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  description: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  return (
    <section className="py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mt-3">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
            <Link href={`/blog/${blog._id}`} className="text-blue-600">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
