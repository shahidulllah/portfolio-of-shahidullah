import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio & Blog",
  description: "Showcasing my projects and blog posts",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
