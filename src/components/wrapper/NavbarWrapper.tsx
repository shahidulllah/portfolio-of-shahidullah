"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return !isDashboard ? <Navbar /> : null;
}
