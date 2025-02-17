import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

// Fetch all projects
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching projects", error },
      { status: 500 }
    );
  }
}

// Add a new project (Admin only)
export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const newProject = await Project.create(data);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error adding project", error }, { status: 500 });
  }
}
