import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

//  Update a project
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const data = await req.json();
    const updatedProject = await Project.findByIdAndUpdate(params.id, data, {
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
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    await Project.findByIdAndDelete(params.id);
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
