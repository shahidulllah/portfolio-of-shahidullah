import { IBlog } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const res = await fetch(`${process.env.BASE_URL}/api/blogs`, {
    cache: "no-store",
  });
  const blogs: IBlog[] = await res.json();

  return (
    <section className="py-12 px-6 mt-10 lg:mt-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        Latest Blogs
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Blog Image */}
            <div className="relative w-full h-52">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Blog Content */}
            <div className="p-5">
              <span className="text-sm text-blue-500 font-semibold uppercase">
                {blog.category}
              </span>
              <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                {blog.content}
              </p>

              {/* Read More Button */}
              <Link
                href={`/blog/${blog._id}`}
                className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
