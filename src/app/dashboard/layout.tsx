"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard">Home</Link>
          </li>
          <li>
            <Link href="/dashboard/blogs">Manage Blogs</Link>
          </li>
          <li>
            <Link href="/dashboard/projects">Manage Projects</Link>
          </li>
          <li>
            <Link href="/dashboard/messages">Messages</Link>
          </li>
        </ul>
        <button
          onClick={() => signOut()}
          className="w-full mt-4 bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">{children}</div>
    </div>
  );
}
