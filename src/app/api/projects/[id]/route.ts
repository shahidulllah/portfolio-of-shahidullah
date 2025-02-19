import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Fetch a single project by ID
export async function GET(req: Request, { params }: PageProps) {
  const { id } = await params;
  try {
    await connectDB();
    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching project", error },
      { status: 500 }
    );
  }
}

//  Update a project
export async function PUT(req: Request, { params }: PageProps) {
  const { id } = await params;
  try {
    await connectDB();
    const data = await req.json();
    const updatedProject = await Project.findByIdAndUpdate(id, data, {
      new: true,
    });
    return NextResponse.json(updatedProject, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating project", error },
      { status: 500 }
    );
  }
}

// Delete a project
export async function DELETE(req: Request, { params }: PageProps) {
  const { id } = await params;
  try {
    await connectDB();
    await Project.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting project", error },
      { status: 500 }
    );
  }
}
