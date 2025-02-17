import Image from "next/image";
import { IProject } from "@/types/project.type";

async function getProjects(): Promise<IProject[]> {
  const res = await fetch(`${process.env.BASE_URL}/api/projects`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProjectsPage() {
  const projects: IProject[] = await getProjects();
  console.log("Projects: ", projects);

  return (
    <section className="py-10 px-6 mt-10 lg:mt-16 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 rounded-lg shadow-lg">
            {project.image && project.image.startsWith("http") ? (
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-md"
              />
            ) : (
              <div className=" h-[250px] bg-gray-300 flex items-center justify-center text-gray-600">
                No Image
              </div>
            )}
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
      </div>
    </section>
  );
}
