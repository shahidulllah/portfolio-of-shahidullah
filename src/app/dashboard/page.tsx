"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardHome() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading")
    return <p className="text-center mt-10">Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-yellow-600 text-center">
        Welcome, {session.user?.name}
      </h1>
      <p className="text-gray-300 mb-6 text-center">
        Manage your blogs, projects, and messages from here.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Manage Blogs */}
        <Link
          href="/dashboard/blogs"
          className="bg-gray-800 border border-gray-500 p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-xl text-gray-400 font-bold mb-2">Manage Blogs</h2>
          <p className="text-gray-500">Create, edit, and delete blog posts.</p>
        </Link>

        {/* Manage Projects */}
        <Link
          href="/dashboard/projects"
          className="bg-gray-800 border border-gray-500 p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-xl text-gray-400 font-bold mb-2">
            Manage Projects
          </h2>
          <p className="text-gray-500">Add, update, and remove projects.</p>
        </Link>

        {/* Manage Messages */}
        <Link
          href="/dashboard/messages"
          className="bg-gray-800 border border-gray-500 p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-xl text-gray-400 font-bold mb-2">Messages</h2>
          <p className="text-gray-500">
            View and manage contact form messages.
          </p>
        </Link>
      </div>
    </div>
  );
}
