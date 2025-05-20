"use client";

import { usePathname } from "next/navigation";
import Footer from "../home/Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return !isDashboard ? <Footer /> : null;
}
