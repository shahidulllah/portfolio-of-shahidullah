"use client";

// import { useEffect, useState } from "react";
import Image from "next/image";

// interface Project {
//   _id: string;
//   title: string;
//   description: string;
//   image: string;
//   liveUrl: string;
//   githubUrl: string;
// }
const projects = [
    {
      title: "Study Room",
      description: "An educational platform for learning.",
      image: "/study-room.png",
      liveUrl: "https://study-room.vercel.app/",
      githubUrl: "https://github.com/shahidulllah/study-room-client",
    },
    {
      title: "MediCare",
      description: "A healthcare platform for medical services.",
      image: "/medicare.png",
      liveUrl: "https://medicare.vercel.app/",
      githubUrl: "https://github.com/shahidulllah/medicare-client",
    },
  ];

export default function ProjectsPage() {
//   const [projects, setProjects] = useState<Project[]>([]);

//   useEffect(() => {
//     async function fetchProjects() {
//       try {
//         const res = await fetch("/api/projects");
//         const data = await res.json();
//         setProjects(data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       }
//     }
//     fetchProjects();
//   }, []);

  return (
    <section className="py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          <>
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-md"
                />
                <h2 className="text-xl font-semibold mt-3">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex gap-3 mt-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="text-blue-600"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-gray-600"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {" "}
            <p>Your project is empty....</p>
          </>
        )}
      </div>
    </section>
  );
}
