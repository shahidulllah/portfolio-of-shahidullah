'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center py-10 px-5 md:px-10">
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full mb-5"
      />
      <h1 className="text-3xl font-bold">Md. Shahidullah</h1>
      <p className="text-gray-600 max-w-lg mt-2">
        Frontend Developer skilled in HTML, CSS, JavaScript, React, and Next.js.
        Passionate about creating modern, responsive, and accessible web
        applications.
      </p>

      {/* Skills Section */}
      <div className="mt-5 flex gap-4 flex-wrap justify-center">
        <span className="px-4 py-2 bg-gray-200 rounded">JavaScript</span>
        <span className="px-4 py-2 bg-gray-200 rounded">React</span>
        <span className="px-4 py-2 bg-gray-200 rounded">Next.js</span>
        <span className="px-4 py-2 bg-gray-200 rounded">Tailwind CSS</span>
        <span className="px-4 py-2 bg-gray-200 rounded">MongoDB</span>
      </div>

      {/* Resume Download */}
      <div className="mt-6">
        <Link href="/resume.pdf" target="_blank">
          <Button color="primary" variant="solid">
            Download Resume
          </Button>
        </Link>
      </div>
    </section>
  );
}
