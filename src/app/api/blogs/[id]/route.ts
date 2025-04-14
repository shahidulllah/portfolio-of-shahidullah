import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Fetch a single blog by ID
export async function GET(req: Request, { params }: PageProps) {
  const { id } = await params;
  try {
    await connectDB();
    const blog = await Blog.findById(id);
    if (!blog)
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching blog", error },
      { status: 500 }
    );
  }
}

// Update a blog
export async function PUT(req: Request, { params }: PageProps) {
  const { id } = await params;
  try {
    await connectDB();
    const data = await req.json();
    const updatedBlog = await Blog.findByIdAndUpdate(id, data, {
      new: true,
    });
    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating blog", error },
      { status: 500 }
    );
  }
}

// Delete a blog
export async function DELETE(req: Request, { params }: PageProps) {
  const { id } = await params;
  try {
    await connectDB();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Blog is deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting blog", error },
      { status: 500 }
    );
  }
}
