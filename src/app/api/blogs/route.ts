import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

// Fetch all blogs
export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching projects", error },
      { status: 500 }
    );
  }
}

// Add a new blog (Admin only)
export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const newBlog = await Blog.create(data);
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding blog", error },
      { status: 500 }
    );
  }
}
