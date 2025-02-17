import { NextUIProvider } from "@nextui-org/react";
// import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <SessionProvider> */}
          <NextUIProvider>
            <Navbar />
           <div className="min-h-screen bg-gradient-to-r from-[#141330] to-[#57618c] dark:from-gray-900 dark:to-black"> {children}</div>
            <Footer />
          </NextUIProvider>
          {/* </SessionProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
