import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import NavbarWrapper from "@/components/wrapper/NavbarWrapper";
import FooterWrapper from "@/components/wrapper/FooterWrapper";
import { Toaster } from "sonner";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavbarWrapper />
          <div className="min-h-screen bg-gradient-to-r from-[#141330] to-[#57618c] dark:from-gray-900 dark:to-black">
            {children}
          </div>
          <FooterWrapper />
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
