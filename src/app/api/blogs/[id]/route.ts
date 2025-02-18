import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

// Update a blog
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const data = await req.json();
    const updatedBlog = await Blog.findByIdAndUpdate(params.id, data, {
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
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    await Blog.findByIdAndDelete(params.id);
    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting blog", error },
      { status: 500 }
    );
  }
}
