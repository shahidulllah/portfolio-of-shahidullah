import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio & Blog",
  description: "Showcasing my projects and blog posts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isDashboard = pathName.startsWith("/dashboard");
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {!isDashboard && <Navbar />}
          <div className="min-h-screen bg-gradient-to-r from-[#141330] to-[#57618c] dark:from-gray-900 dark:to-black">
            {children}
          </div>
          {!isDashboard && <Footer />}
        </Providers>
      </body>
    </html>
  );
}
