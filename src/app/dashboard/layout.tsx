"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  FileText,
  Briefcase,
  MessageSquare,
  LogOut,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  const navItems = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    {
      name: "Manage Blogs",
      href: "/dashboard/blogs",
      icon: <FileText size={20} />,
    },
    {
      name: "Manage Projects",
      href: "/dashboard/projects",
      icon: <Briefcase size={20} />,
    },
    {
      name: "Messages",
      href: "/dashboard/messages",
      icon: <MessageSquare size={20} />,
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Mobile Sidebar Toggle */}
      <button
        className="absolute top-4 left-4 md:hidden z-50 bg-gray-800 text-white p-2 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative bg-gray-900 text-white w-72 p-6 space-y-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-72"
        } md:translate-x-0 transition-transform md:flex flex-col min-h-full`}
      >
        <h2 className="text-2xl font-bold text-center">Dashboard</h2>
        <ul className="space-y-2 h-full">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                  pathname === item.href
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 w-full mt-auto bg-red-900 px-4 py-2 rounded hover:bg-red-600 transition"
        >
          <LogOut size={20} /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6  w-full  overflow-auto">
        {children}
      </div>
    </div>
  );
}
